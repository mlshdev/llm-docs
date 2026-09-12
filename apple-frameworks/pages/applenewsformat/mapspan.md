> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/mapspan](https://developer.apple.com/documentation/applenewsformat/mapspan)

# MapSpan

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

An object used in a map or place component for defining the visible area of the map.

## Declaration

```
object MapSpan
```

## Properties

- `latitudeDelta` — `number` (required): A float value between 0.0 and 90.0.
  **Minimum:** `0`  
  **Maximum:** `90`
- `longitudeDelta` — `number` (required): A float value between 0.0 and 180.0.
  **Minimum:** `0`  
  **Maximum:** `180`

<a id="Discussion"></a>

## Discussion

Use the `MapSpan` object to define the visible bounds of a map using deltas from a defined center coordinate.

This object can be used in [Map](map.md) and [Place](place.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "map",
      "caption": "Apple Headquarters",
      "latitude": 37.3315294,
      "longitude": -122.0183063,
      "mapSpan": {
        "latitudeDelta": 0.1,
        "longitudeDelta": 0.1
      }
    }
  ]
}
```

## See Also

### Location

- [Map](map.md): The component for adding a map.
- [MapItem](mapitem.md): An object used in a map component for specifying the location of a map pin.
- [Place](place.md): The component for adding a map with a specific point of interest.
