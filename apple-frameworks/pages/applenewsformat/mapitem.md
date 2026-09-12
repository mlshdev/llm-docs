> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/mapitem](https://developer.apple.com/documentation/applenewsformat/mapitem)

# MapItem

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

An object used in a map component for specifying the location of a map pin.

## Declaration

```
object MapItem
```

## Properties

- `latitude` — `number` (required): The latitude of the map item.
- `longitude` — `number` (required): The longitude of the map item.
- `caption` — `string`: The name of the map item. This caption is  displayed when a user taps on a map pin.

<a id="Discussion"></a>

## Discussion

In the `Map` component, use an array of items to specify the location (`latitude` and `longitude`) for the pins you want displayed on the map. See [Map](map.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "map",
      "caption": "Apple Headquarters",
      "items": [
        {
          "caption": "Apple Headquarters",
          "latitude": 37.3315294,
          "longitude": -122.0183063
        }
      ]
    }
  ]
}
```

## See Also

### Location

- [Map](map.md): The component for adding a map.
- [MapSpan](mapspan.md): An object used in a map or place component for defining the visible area of the map.
- [Place](place.md): The component for adding a map with a specific point of interest.
