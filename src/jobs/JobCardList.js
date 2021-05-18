import React from "react";
import JobCard from "./JobCard";

/** Show list of job cards.
 *
 * Used by both JobList and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobCard on apply.
 *
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function JobCardList({ jobs, apply}) {
    console.debug("JobCardList", "jobs=", jobs);

    return (
        <div className="JobCardList">
        {jobs.map(job => (
            <JobCard 
            key={jobs.id}
            id={jobs.id}
            title={jobs.title}
            salary={jobs.salary}
            equity={jobs.equity}
            companyName={jobs.companyName}
            />
        ))}
        </div>

    );
}

export default JobCardList;