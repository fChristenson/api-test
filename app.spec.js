const app = require("./src/app");
const supertest = require("supertest");

describe("Api test", () => {
  describe("/api/v1/users", () => {
    describe("GET", () => {
      it("should return all the users", (done) => {
        supertest(app).get("/api/v1/users")
          .expect(200)
          .expect("Content-Type", /application\/json/)
          .end((err, res) => {
            expect(err).toEqual(null);
            expect(Array.isArray(res.body)).toEqual(true);
            expect(res.body.length).toEqual(3);
            done();
          })
      });

      it("should return the users after the offset", (done) => {
        supertest(app).get("/api/v1/users?offset=1")
          .expect(200)
          .expect("Content-Type", /application\/json/)
          .end((err, res) => {
            expect(err).toEqual(null);
            expect(Array.isArray(res.body)).toEqual(true);
            expect(res.body.length).toEqual(2);
            done();
          })
      });

      it("should return the users within the limit", (done) => {
        supertest(app).get("/api/v1/users?limit=1")
          .expect(200)
          .expect("Content-Type", /application\/json/)
          .end((err, res) => {
            expect(err).toEqual(null);
            expect(Array.isArray(res.body)).toEqual(true);
            expect(res.body.length).toEqual(1);
            done();
          })
      });
    });

    describe("POST", () => {
      it("should not allow POST method", (done) => {
        supertest(app).post("/api/v1/users")
          .expect(404)
          .expect("Content-Type", /application\/json/)
          .end((err, res) => {
            expect(err).toEqual(null);
            expect(res.body.error).toEqual("not found");
            done();
          })
      });
    });

    describe("PUT", () => {
      it("should not allow PUT method", (done) => {
        supertest(app).put("/api/v1/users")
          .expect(404)
          .expect("Content-Type", /application\/json/)
          .end((err, res) => {
            expect(err).toEqual(null);
            expect(res.body.error).toEqual("not found");
            done();
          })
      });
    });

    describe("DELETE", () => {
      it("should not allow DELETE method", (done) => {
        supertest(app).delete("/api/v1/users")
          .expect(404)
          .expect("Content-Type", /application\/json/)
          .end((err, res) => {
            expect(err).toEqual(null);
            expect(res.body.error).toEqual("not found");
            done();
          })
      });
    });
  });
});
