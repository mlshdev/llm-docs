> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textcomponent/text](https://developer.apple.com/documentation/realitykit/textcomponent/text)

# text

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The attributed string this component renders.

## Declaration

```swift
var text: AttributedString?
```

<a id="discussion"></a>

## Discussion

RealityKit renders text centered vertically. Neither the length of the string nor the specified attributes affect the size of the canvas mesh. All attributes are supported except for `TextAlignment` and `StrikethroughStyle`.
