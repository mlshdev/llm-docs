> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstagecomponent/init(allowshittesting:)](https://developer.apple.com/documentation/usdkit/usdstagecomponent/init(allowshittesting:))

# init(allowsHitTesting:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a USDStageComponent in manual mode.

## Declaration

```swift
@MainActor init(allowsHitTesting: Bool = true)
```

## Parameters

- `allowsHitTesting`: Whether to generate collision shapes for hit testing. Defaults to `true`.

<a id="discussion"></a>

## Discussion

In manual mode, you control when rendering occurs by calling [render(\_:to:at:)](render%28__to_at_%29.md).

## See Also

### Creating a stage component

- [init(\_:timeCode:allowsHitTesting:)](init%28__timecode_allowshittesting_%29.md): Creates a USDStageComponent in automatic mode and waits for the first render to complete.
