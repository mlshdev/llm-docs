> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/get-assignments-158kc](https://developer.apple.com/documentation/devicemanagement/get-assignments-158kc)

# Get Assignments

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 1.1+

Get a list of assignments currently assigned to a user or device.

> This legacy API is currently in maintenance mode. Apple won’t add any new functionality to it.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/getAssignments
```

## HTTP Body

Content type: `application/json`

Type: `VppAssignmentRequest`

The request for a list of assignments.

## Response Codes

- `200` OK — `VppAssignmentsResponse`: The response that contains a list of assignments.

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
{
  "adamIdStr" : "361304891",
  "clientUserIdStr" : "user1",
  "sToken" : "h40Gte9aQnZFDNM39IUkRPCsQDxBxbZB4Wy34pxefOuQkeeb3h2a5Rlopo4KDn3MrFKf4CM3OY+WGAoZ1cD6iZ6yzsMk1+5PVBNc66YS6ZQ="
}
```

**Response**

```json
{
  "assignments" : [ {
    "adamIdStr" : "361304891",
    "clientUserIdStr" : "user1",
    "pricingParam" : "STDQ"
  } ],
  "assignmentsInCurrentPage" : 1,
  "currentPageIndex" : 0,
  "expirationMillis" : 1860422147836,
  "location" : {
    "locationId" : 22222222222,
    "locationName" : "LocationName"
  },
  "status" : 0,
  "totalAssignments" : 1,
  "totalPages" : 1,
  "uId" : "100978"
}
```

## Topics

### Request and Response

- [VppAssignmentRequest](vppassignmentrequest.md): The request for a list of assignments.
- [VppAssignmentsResponse](vppassignmentsresponse.md): The response that contains a list of assignments.

## See Also

### Asset and license management

- [Get Assets](get-assets-44p83.md): Deprecated. Get the set of assets managed by your organization.
- [Get Licenses](get-licenses.md): Deprecated. Get the set of licenses managed by your organization.
- [Manage Licenses](manage-licenses.md): Deprecated. Associate and disassociate licenses with users and devices.
