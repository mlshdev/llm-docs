> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemapsserverapi/etaresponse/eta

# EtaResponse.Eta

**Interface language:** Data

**Framework:** Apple Maps Server API  
**Kind:** Object  
**Availability:** Apple Maps Server API 1.2+

An object that contains details about an estimated time of arrival (ETA).

## Declaration

```
object EtaResponse.Eta
```

## Properties

- `destination` — `Location`: The destination as a [Location](../location.md).
- `distanceMeters` — `integer`: The distance in meters to the destination.
- `expectedTravelTimeSeconds` — `integer`: The estimated travel time in seconds, including delays due to traffic.
- `staticTravelTimeSeconds` — `integer`: The expected travel time, in seconds, without traffic.
- `transportType` — `string`: A string that represents the mode of transportation for this ETA, which is one of:
  **Allowed values:** `Automobile`, `Transit`, `Walking`, `Cycling`
