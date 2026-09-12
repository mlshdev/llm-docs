> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/responsetype](https://developer.apple.com/documentation/weatherkitrestapi/responsetype)

# ResponseType

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Type  
**Availability:** Weather API 1.0.0+

The recommended action from a reporting agency.

## Declaration

```
string ResponseType
```

## Possible Values

- `shelter`:
- `evacuate`:
- `prepare`:
- `execute`:
- `avoid`:
- `monitor`:
- `assess`:
- `allClear`:
- `none`:

<a id="Possible-Values"></a>

## Possible Values

- **shelter**: Take shelter in place.
- **evacuate**: Relocate.
- **prepare**: Make preparations.
- **execute**: Execute a pre-planned activity.
- **avoid**: Avoid the event.
- **monitor**: Monitor the situation.
- **assess**: Assess the situation.
- **allClear**: The event no longer poses a threat.
- **none**: No action recommended.

## See Also

### Obtaining weather alerts

- [GET /api/v1/weatherAlert/{language}/{id}](get-api-v1-weatheralert-_language_-_id_.md): Receive an active weather alert.
- [WeatherAlert](weatheralert.md): An official message indicating severe weather from a reporting agency.
- [WeatherAlertCollection](weatheralertcollection.md): A collection of severe weather alerts for a specified location.
- [WeatherAlertSummary](weatheralertsummary.md): Detailed information about the weather alert.
- [Severity](severity.md): The level of danger to life and property.
- [Urgency](urgency.md): An indication of urgency of action from the reporting agency.
