> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkitrestapi/weatheralert/weatheralertdata

# WeatherAlert.WeatherAlertData

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Object  
**Availability:** Weather API 1.0.0+

The weather alert information.

## Declaration

```
object WeatherAlert.WeatherAlertData
```

## Properties

- `area` — `WeatherAlert.WeatherAlertData.Area` (required): An object defining the geographic region the weather alert applies to.
- `messages` — `[EventText]` (required): An array of official text messages describing a severe weather event from the agency.

## Topics

### Getting the Weather Alert Area

- [WeatherAlert.WeatherAlertData.Area](weatheralertdata/area-data.dictionary.md)

## Relationships

### Inherited By

- [WeatherAlert](../weatheralert.md)
