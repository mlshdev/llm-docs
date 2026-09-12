> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/get-api-v1-weatheralert-_language_-_id_](https://developer.apple.com/documentation/weatherkitrestapi/get-api-v1-weatheralert-_language_-_id_)

# GET /api/v1/weatherAlert/{language}/{id}

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Web Service Endpoint  
**Availability:** Weather API 1.0.0+

Receive an active weather alert.

## URL

```http
GET https://weatherkit.apple.com/api/v1/weatherAlert/{language}/{id}
```

## Path Parameters

- `id` — `uuid` (required): The unique identifier for the weather alert.
- `language` — `string` (required): The language tag to use for localizing responses.

## Response Codes

- `200` OK — `WeatherAlert`: The request is successful. The weather alert is in the response.
- `400` Bad Request: The server is unable to process the request due to an invalid parameter value.
- `401` Unauthorized: The request isn’t authorized or doesn’t include the correct authentication information.
- `404` Not Found: There’s no active alert for the specified unique identifier.

## See Also

### Obtaining weather alerts

- [WeatherAlert](weatheralert.md): An official message indicating severe weather from a reporting agency.
- [WeatherAlertCollection](weatheralertcollection.md): A collection of severe weather alerts for a specified location.
- [WeatherAlertSummary](weatheralertsummary.md): Detailed information about the weather alert.
- [ResponseType](responsetype.md): The recommended action from a reporting agency.
- [Severity](severity.md): The level of danger to life and property.
- [Urgency](urgency.md): An indication of urgency of action from the reporting agency.
