> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/cellularprivatenetwork/geofenceitem](https://developer.apple.com/documentation/devicemanagement/cellularprivatenetwork/geofenceitem)

# CellularPrivateNetwork.GeofenceItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A geofence for a private network.

## Declaration

```
object CellularPrivateNetwork.GeofenceItem
```

## Properties

- `GeofenceId` — `string` (required): A geofence identifier that’s unique within a list of geofences.
- `Latitude` — `number` (required): The latitude of the geofence.
  **Minimum:** `-90`  
  **Maximum:** `90`
- `Longitude` — `number` (required): The longitude of the geofence.
  **Minimum:** `-180`  
  **Maximum:** `180`
- `Radius` — `number` (required): Specifies the radius of the geofence in meters. Set this value slightly greater than the private cellular network coverage area.
  **Minimum:** `100`  
  **Maximum:** `6500`
