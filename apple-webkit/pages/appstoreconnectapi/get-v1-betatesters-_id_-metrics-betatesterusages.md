> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betatesters-_id_-metrics-betatesterusages](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betatesters-_id_-metrics-betatesterusages)

# Read Beta Tester Usage Metrics

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Get usage metrics for a specific beta tester.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaTesters/{id}/metrics/betaTesterUsages
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `betaTesters` resource ID from the [List beta testers](get-v1-betatesters.md) response.

## Query Parameters

- `filter[apps]` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `apps` resource ID from the [List apps](get-v1-apps.md) response.
- `limit` — `integer`: **Maximum:** `200`
- `period` — `string`: -`P7D`: 7 days -`P30D`: 30 days -`P90D`: 90 days -`P365D`: 356 days
  **Allowed values:** `P7D`, `P30D`, `P90D`, `P365D`

## Response Codes

- `200` OK — `BetaTesterUsagesV1MetricResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/betaTesters/1aa1fe09-bb5c-47dd-a067-a6066db1d32d/metrics/betaTesterUsages?period=P90D&filter%5Bapps%5D=6447306070
```

**Response**

```json
{  "data": [
    {
      "type": "betaTesterUsages",
      "dataPoints": [
        {
          "start": "2023-07-07",
          "end": "2023-10-05",
          "values": {
            "crashCount": 11,
            "sessionCount": 9,
            "feedbackCount": 21
          }
        }
      ],
      "dimensions": {
        "apps": {
          "data": {
            "type": "apps",
            "id": "6447306070"
          },
          "links": {
            "related": "https://api.appstoreconnect.apple.com/v1/apps/6447306070"
          }
        }
      }
    }
  ],
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/betaTesters/1aa1fe09-bb5c-47dd-a067-a6066db1d32d/metrics/betaTesterUsages?period=PT2160H&filter%5Bapps%5D=6447306070"
  },
  "meta": {
    "paging": {
      "total": 1,
      "limit": 50
    }
  }
}
```

## See Also

### Beta Tester Metrics

- [Read Beta Tester Metrics for an App](get-v1-apps-_id_-metrics-betatesterusages.md): Get usage metrics for beta testers of a specific app.
- [Read Metrics for Beta Testers in a Beta Group](get-v1-betagroups-_id_-metrics-betatesterusages.md): Get beta tester usage metrics for a beta group.
