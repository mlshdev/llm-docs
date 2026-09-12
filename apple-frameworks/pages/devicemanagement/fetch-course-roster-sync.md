> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-course-roster-sync](https://developer.apple.com/documentation/devicemanagement/fetch-course-roster-sync)

# Sync the List of Courses

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Get updates about the list of courses the server manages.

## URL

```http
POST https://mdmenrollment.apple.com/roster/class/course/sync
```

## HTTP Body

Content type: `application/json`

Type: `RosterRequest`

The object containing the request information.

## Response Codes

- `200` OK — `RosterCourseResponse`: The request was successful. The server returns a list of courses.
- `400` Bad Request: The server was unable to process the request.

<a id="Discussion"></a>

## Discussion

This sync service uses a cursor returned by the full course-roster service. It returns a list of all modifications (additions or deletions) made since the cursor date, for up to 7 days.

This service may return the same course more than once. You can identify duplicates by matching their `unique_identifier` values.

## See Also

### Course management

- [BaseRosterCourse](baserostercourse.md): A base course’s properties and their values.
- [RosterCourse](rostercourse.md): A course’s properties and their values.
- [Get the List of Courses](fetch-course-roster.md): Obtain a list of the courses the server manages.
