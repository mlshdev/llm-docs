> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/stations](https://developer.apple.com/documentation/applemusicapi/stations)

# Stations

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a station.

## Declaration

```
object Stations
```

## Properties

- `id` — `string` (required): The identifier for the station.
- `type` — `string` (required): This value must always be `stations`.
  **Allowed values:** `stations`
- `href` — `string` (required): The relative location for the station resource.
- `attributes` — `Stations.Attributes`: The attributes for the station.
- `relationships` — `Stations.Relationships`: The relationships for the station.

## Topics

### Related Objects

- [Stations.Attributes](stations/attributes-data.dictionary.md): The attributes for a station resource.
- [Stations.Relationships](stations/relationships-data.dictionary.md): The name of the relationship you want to fetch for this resource.

## See Also

### Handling the Response

- [StationsResponse](stationsresponse.md): The response to a stations request.
- [StationGenres](stationgenres.md): A resource object that represents a station genre.
- [StationGenresResponse](stationgenresresponse.md): The response to a specific station genres resource request.
