> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/attribution](https://developer.apple.com/documentation/weatherkitrestapi/attribution)

# Attribution

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Object  
**Availability:** Weather API 1.0.0+

A list of image asset URLs for attribution.

## Declaration

```
object Attribution
```

## Properties

- `logoDark@1x` — `string`: The partial URL of the dark appearance of the Apple Weather logo with a scale factor of 1, or @1x.
- `logoDark@2x` — `string`: The partial URL of the dark appearance of the Apple Weather logo with a scale factor of 2, or @2x.
- `logoDark@3x` — `string`: The partial URL of the dark appearance of the Apple Weather logo with a scale factor of 3, or @3x.
- `logoLight@1x` — `string`: The partial URL of the light appearance of the Apple Weather logo with a scale factor of 1, or @1x.
- `logoLight@2x` — `string`: The partial URL of the light appearance of the Apple Weather logo with a scale factor of 2, or @2x.
- `logoLight@3x` — `string`: The partial URL of the light appearance of the Apple Weather logo with a scale factor of 3, or @3x.
- `logoSquare@1x` — `string`: The partial URL of a square weather logo with a scale factor of 1, or @1x.
- `logoSquare@2x` — `string`: The partial URL of a square weather logo with a scale factor of 2, or @2x.
- `logoSquare@3x` — `string`: The partial URL of a square weather logo with a scale factor of 3, or @3x.
- `serviceName` — `string`: The name of the service.

<a id="Discussion"></a>

## Discussion

Attribution URLs of image assets are partial. Append the partial URL to `https://weatherkit.apple.com` to obtain the image asset.

## See Also

### Performing attribution

- [GET /attribution/{language}](get-attribution-_language_.md): Receive attribution information.
