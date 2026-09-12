> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/rosterclassresponse](https://developer.apple.com/documentation/devicemanagement/rosterclassresponse)

# RosterClassResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

The response that contains a list of classes.

## Declaration

```
object RosterClassResponse
```

## Properties

- `classes` — `[RosterClass]`: An array of classes, sorted in lexical order by a class `source_system_identifier`. The organization must provide this identifier to Apple.
- `cursor` — `string`: A hex string that should be used for the next request to paginate. This field data type has a maximum length of 512 UTF-8 characters.
- `more_to_follow` — `boolean`: Indicates whether the request’s limit and cursor values resulted in only a partial list of classes. If `true`, the MDM server should then make another request (starting from the newly returned cursor) to obtain additional records.

## See Also

### Request and Response

- [RosterRequest](rosterrequest.md): The request for a list of classes.
