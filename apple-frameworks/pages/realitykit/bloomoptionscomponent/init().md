> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bloomoptionscomponent/init()](https://developer.apple.com/documentation/realitykit/bloomoptionscomponent/init())

# init()

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a Bloom Options Component with default settings.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

The default configuration provides a moderate bloom effect with:

- `strength`: 0.25 (25% bloom intensity)
- `threshold`: 1.0 (pixels brighter than 1.0 will bloom)
- `blurRadius`: 6 (6% of viewport height)
