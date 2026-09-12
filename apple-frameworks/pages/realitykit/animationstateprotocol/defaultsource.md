> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationstateprotocol/defaultsource](https://developer.apple.com/documentation/realitykit/animationstateprotocol/defaultsource)

# defaultSource

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The previous blend stage value.

## Declaration

```swift
var defaultSource: Self.ValueType? { get }
```

<a id="discussion"></a>

## Discussion

The default source is the value output from the previous blend stage, and initialized with [defaultTarget](defaulttarget.md) for the first stage.
