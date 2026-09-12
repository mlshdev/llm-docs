> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/urgency](https://developer.apple.com/documentation/weatherkitrestapi/urgency)

# Urgency

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Type  
**Availability:** Weather API 1.0.0+

An indication of urgency of action from the reporting agency.

## Declaration

```
string Urgency
```

## Possible Values

- `immediate`:
- `expected`:
- `future`:
- `past`:
- `unknown`:

<a id="Possible-Values"></a>

## Possible Values

- **immediate**: Take responsive action immediately.
- **expected**: Take responsive action in the next hour.
- **future**: Take responsive action in the near future.
- **past**: Responsive action is no longer required.
- **unknown**: The urgency is unknown.

## See Also

### Obtaining weather alerts

- [GET /api/v1/weatherAlert/{language}/{id}](get-api-v1-weatheralert-_language_-_id_.md): Receive an active weather alert.
- [WeatherAlert](weatheralert.md): An official message indicating severe weather from a reporting agency.
- [WeatherAlertCollection](weatheralertcollection.md): A collection of severe weather alerts for a specified location.
- [WeatherAlertSummary](weatheralertsummary.md): Detailed information about the weather alert.
- [ResponseType](responsetype.md): The recommended action from a reporting agency.
- [Severity](severity.md): The level of danger to life and property.
