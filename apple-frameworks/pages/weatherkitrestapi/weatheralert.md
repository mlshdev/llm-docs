> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/weatheralert](https://developer.apple.com/documentation/weatherkitrestapi/weatheralert)

# WeatherAlert

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Object  
**Availability:** Weather API 1.0.0+

An official message indicating severe weather from a reporting agency.

## Declaration

```
object WeatherAlert
```

## Topics

### Getting the weather alert

- [WeatherAlert.WeatherAlertData](weatheralert/weatheralertdata.md): The weather alert information.

## Relationships

### Inherits From

- [WeatherAlert.WeatherAlertData](weatheralert/weatheralertdata.md)
- [WeatherAlertSummary](weatheralertsummary.md)

## See Also

### Obtaining weather alerts

- [GET /api/v1/weatherAlert/{language}/{id}](get-api-v1-weatheralert-_language_-_id_.md): Receive an active weather alert.
- [WeatherAlertCollection](weatheralertcollection.md): A collection of severe weather alerts for a specified location.
- [WeatherAlertSummary](weatheralertsummary.md): Detailed information about the weather alert.
- [ResponseType](responsetype.md): The recommended action from a reporting agency.
- [Severity](severity.md): The level of danger to life and property.
- [Urgency](urgency.md): An indication of urgency of action from the reporting agency.
