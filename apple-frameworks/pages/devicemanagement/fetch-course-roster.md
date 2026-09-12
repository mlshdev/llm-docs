> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-course-roster](https://developer.apple.com/documentation/devicemanagement/fetch-course-roster)

# Get the List of Courses

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Obtain a list of the courses the server manages.

## URL

```http
POST https://mdmenrollment.apple.com/roster/class/course
```

## HTTP Body

Content type: `application/json`

Type: `RosterRequest`

The object containing the request information.

## Response Codes

- `200` OK — `RosterCourseResponse`: The request was successful. The server returns a list of courses.
- `400` Bad Request: The server was unable to process the request.

## Topics

### Response

- [RosterCourseResponse](rostercourseresponse.md): The response that contains a list of courses.

## See Also

### Course management

- [BaseRosterCourse](baserostercourse.md): A base course’s properties and their values.
- [RosterCourse](rostercourse.md): A course’s properties and their values.
- [Sync the List of Courses](fetch-course-roster-sync.md): Get updates about the list of courses the server manages.
