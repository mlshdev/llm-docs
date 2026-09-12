> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstagecomponent/allowshittesting](https://developer.apple.com/documentation/usdkit/usdstagecomponent/allowshittesting)

# allowsHitTesting

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Whether the rendered entities support hit testing. Set at initialization and cannot be changed afterwards.

## Declaration

```swift
let allowsHitTesting: Bool
```

## See Also

### Configuring the component

- [stage](stage.md): The stage currently being rendered by this component, or `nil` if the component is in manual mode and no render has been performed yet.
- [timeCode](timecode.md): The time code to render at.
- [rendersAutomatically](rendersautomatically.md): Whether the component renders automatically in response to stage or time code changes. `false` indicates manual mode, in which rendering must be triggered explicitly via [render(\_:to:at:)](render%28__to_at_%29.md).
