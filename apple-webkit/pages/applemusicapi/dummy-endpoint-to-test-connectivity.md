> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/dummy-endpoint-to-test-connectivity](https://developer.apple.com/documentation/applemusicapi/dummy-endpoint-to-test-connectivity)

# Placeholder Endpoint to Test Connectivity

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

## URL

```http
GET https://api.music.apple.com/v1/test
```

## Query Parameters

- `l` — `string`:

## Response Codes

- `200` OK — `EmptyBodyResponse`:
- `401` Unauthorized — `UnauthorizedResponse`:
- `500` Internal Server Error — `ErrorsResponse`:
