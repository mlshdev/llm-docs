> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/severity](https://developer.apple.com/documentation/weatherkitrestapi/severity)

# Severity

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Type  
**Availability:** Weather API 1.0.0+

The level of danger to life and property.

## Declaration

```
string Severity
```

## Possible Values

- `extreme`:
- `severe`:
- `moderate`:
- `minor`:
- `unknown`:

<a id="Possible-Values"></a>

## Possible Values

- **extreme**: Extraordinary threat.
- **severe**: Significant threat.
- **moderate**: Possible threat.
- **minor**: Minimal or no known threat.
- **unknown**: Unknown threat.

## See Also

### Obtaining weather alerts

- [GET /api/v1/weatherAlert/{language}/{id}](get-api-v1-weatheralert-_language_-_id_.md): Receive an active weather alert.
- [WeatherAlert](weatheralert.md): An official message indicating severe weather from a reporting agency.
- [WeatherAlertCollection](weatheralertcollection.md): A collection of severe weather alerts for a specified location.
- [WeatherAlertSummary](weatheralertsummary.md): Detailed information about the weather alert.
- [ResponseType](responsetype.md): The recommended action from a reporting agency.
- [Urgency](urgency.md): An indication of urgency of action from the reporting agency.
