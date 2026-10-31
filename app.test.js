const request = require("supertest");
const app = require("./app");

describe("app", () => {
  test("GET / returns the demo message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Classroom CI/CD Demo" });
  });

  test("GET /health returns an ok status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });
})
