import React from "react";
import Layout from "../components/Layout";

function Create() {
  return (
    <Layout>
      <div>
        <legend>Create Book</legend>
        <form method action="#">
          <div className="form-group">
            <label htmlFor="title" className="col-sm-2 control-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control is-invalid "
                defaultValue
                id="title"
                name="title"
                placeholder="Title"
              />
              <div className="invalid-feedback">Error message</div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Create;
