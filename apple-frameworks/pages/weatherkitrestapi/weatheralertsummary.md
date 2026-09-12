> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/weatheralertsummary](https://developer.apple.com/documentation/weatherkitrestapi/weatheralertsummary)

# WeatherAlertSummary

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Object  
**Availability:** Weather API 1.0.0+

Detailed information about the weather alert.

## Declaration

```
object WeatherAlertSummary
```

## Properties

- `areaId` — `string`: An official designation of the affected area.
- `areaName` — `string`: A human-readable name of the affected area.
- `certainty` — `Certainty` (required): How likely the event is to occur.
- `countryCode` — `string` (required): The ISO code of the reporting country.
- `description` — `string` (required): A human-readable description of the event.
- `detailsUrl` — `string`: The URL to a page containing detailed information about the event.
- `effectiveTime` — `date-time` (required): The time the event went into effect.
- `eventEndTime` — `date-time`: The time when the underlying weather event is projected to end.
- `eventOnsetTime` — `date-time`: The time when the underlying weather event is projected to start.
- `expireTime` — `date-time` (required): The time when the event expires.
- `id` — `uuid` (required): A unique identifier of the event.
- `issuedTime` — `date-time` (required): The time that event was issued by the reporting agency.
- `responses` — `[ResponseType]` (required): An array of recommended actions from the reporting agency.
- `severity` — `Severity` (required): The level of danger to life and property.
- `source` — `string` (required): The name of the reporting agency.
- `urgency` — `Urgency`: An indication of urgency of action from the reporting agency.

## Relationships

### Inherited By

- [WeatherAlert](weatheralert.md)

## See Also

### Obtaining weather alerts

- [GET /api/v1/weatherAlert/{language}/{id}](get-api-v1-weatheralert-_language_-_id_.md): Receive an active weather alert.
- [WeatherAlert](weatheralert.md): An official message indicating severe weather from a reporting agency.
- [WeatherAlertCollection](weatheralertcollection.md): A collection of severe weather alerts for a specified location.
- [ResponseType](responsetype.md): The recommended action from a reporting agency.
- [Severity](severity.md): The level of danger to life and property.
- [Urgency](urgency.md): An indication of urgency of action from the reporting agency.
