> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/rostercourseresponse](https://developer.apple.com/documentation/devicemanagement/rostercourseresponse)

# RosterCourseResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

The response that contains a list of courses.

## Declaration

```
object RosterCourseResponse
```

## Properties

- `courses` — `[RosterCourse]`: Provides information about courses, sorted in lexical order by a course `source_system_identifier`. The organization must provide this identifier to Apple.
- `cursor` — `string`: A hex string that should be used for the next request to paginate. This field data type has a maximum length of 512 UTF-8 characters.
- `more_to_follow` — `boolean`: Indicates whether the request’s limit and cursor values resulted in only a partial list of classes. If true, the MDM server should then make another request (starting from the newly returned cursor) to obtain additional records.
