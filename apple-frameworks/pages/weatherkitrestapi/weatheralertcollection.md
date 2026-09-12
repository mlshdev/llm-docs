> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/weatheralertcollection](https://developer.apple.com/documentation/weatherkitrestapi/weatheralertcollection)

# WeatherAlertCollection

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Object  
**Availability:** Weather API 1.0.0+

A collection of severe weather alerts for a specified location.

## Declaration

```
object WeatherAlertCollection
```

## Topics

### Getting the weather alert collection

- [WeatherAlertCollection.WeatherAlertCollectionData](weatheralertcollection/weatheralertcollectiondata.md): A collecton of weather alerts.

## Relationships

### Inherits From

- [ProductData](productdata.md)
- [WeatherAlertCollection.WeatherAlertCollectionData](weatheralertcollection/weatheralertcollectiondata.md)

## See Also

### Obtaining weather alerts

- [GET /api/v1/weatherAlert/{language}/{id}](get-api-v1-weatheralert-_language_-_id_.md): Receive an active weather alert.
- [WeatherAlert](weatheralert.md): An official message indicating severe weather from a reporting agency.
- [WeatherAlertSummary](weatheralertsummary.md): Detailed information about the weather alert.
- [ResponseType](responsetype.md): The recommended action from a reporting agency.
- [Severity](severity.md): The level of danger to life and property.
- [Urgency](urgency.md): An indication of urgency of action from the reporting agency.
