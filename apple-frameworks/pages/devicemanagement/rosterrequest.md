> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/rosterrequest](https://developer.apple.com/documentation/devicemanagement/rosterrequest)

# RosterRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

The request for a list of classes.

## Declaration

```
object RosterRequest
```

## Properties

- `cursor` — `string`: A hex string that represents the starting position for a request. This is used for pagination. On the initial request, this should be omitted.
- `limit` — `int32`: The maximum number of entries to return.
  **Default:** `1000`  
  **Maximum:** `1000`

## See Also

### Request and Response

- [RosterClassResponse](rosterclassresponse.md): The response that contains a list of classes.
