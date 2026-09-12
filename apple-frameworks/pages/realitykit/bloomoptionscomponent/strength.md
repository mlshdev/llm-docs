> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bloomoptionscomponent/strength](https://developer.apple.com/documentation/realitykit/bloomoptionscomponent/strength)

# strength

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The intensity of the bloom effect.

## Declaration

```swift
var strength: Float
```

<a id="discussion"></a>

## Discussion

Higher values create a more pronounced glow effect. The values can be be in the range `[0.0, 2.0]`, where:

- `0.0` disables the bloom effect entirely
- `0.25` provides a subtle bloom (default)
- `1.0` creates a strong, dramatic bloom effect
- `>1` extremely intense effects but may have some visual artifacts

## See Also

### Configuring the bloom effect

- [threshold](threshold.md): The brightness threshold for bloom activation.
- [blurRadius](blurradius.md): The width of the bloom blur kernel as a percentage of viewport height
