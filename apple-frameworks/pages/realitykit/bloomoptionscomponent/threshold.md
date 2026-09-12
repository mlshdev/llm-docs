> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bloomoptionscomponent/threshold](https://developer.apple.com/documentation/realitykit/bloomoptionscomponent/threshold)

# threshold

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The brightness threshold for bloom activation.

## Declaration

```swift
var threshold: Float
```

<a id="discussion"></a>

## Discussion

Only pixels with luminance values above this threshold will contribute to the bloom effect. The value is typically in the range `[0.0, 1.x]`:

- `0.0` makes all pixels contribute to bloom
- `1.0` standard threshold for HDR content (default)
- `>1` only very bright highlights will bloom

Higher thresholds create more selective bloom that only affects the brightest elements in the scene.

## See Also

### Configuring the bloom effect

- [strength](strength.md): The intensity of the bloom effect.
- [blurRadius](blurradius.md): The width of the bloom blur kernel as a percentage of viewport height
