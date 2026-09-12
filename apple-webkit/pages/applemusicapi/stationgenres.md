> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/stationgenres](https://developer.apple.com/documentation/applemusicapi/stationgenres)

# StationGenres

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a station genre.

## Declaration

```
object StationGenres
```

## Properties

- `id` — `string` (required): The identifier for the station genre.
- `type` — `string` (required): This value must always be `station-genres`.
  **Allowed values:** `station-genres`
- `href` — `string` (required): The relative location for the station genre resource.
- `attributes` — `StationGenres.Attributes`: The attributes for the station genre.
- `relationships` — `StationGenres.Relationships`: The relationships for the station genre.

## Topics

### Related Objects

- [StationGenres.Attributes](stationgenres/attributes-data.dictionary.md): The attributes for the station genre resource.
- [StationGenres.Relationships](stationgenres/relationships-data.dictionary.md): The relationships for a station genre resource.

## See Also

### Handling the Response

- [Stations](stations.md): A resource object that represents a station.
- [StationsResponse](stationsresponse.md): The response to a stations request.
- [StationGenresResponse](stationgenresresponse.md): The response to a specific station genres resource request.
