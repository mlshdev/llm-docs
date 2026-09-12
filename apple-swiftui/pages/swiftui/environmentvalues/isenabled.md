> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/isenabled](https://developer.apple.com/documentation/swiftui/environmentvalues/isenabled)

# isEnabled

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the view associated with this environment allows user interaction.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Managing view interaction

- [disabled(\_:)](../view/disabled%28__%29.md): Adds a condition that controls whether users can interact with this view.
- [interactionActivityTrackingTag(\_:)](../view/interactionactivitytrackingtag%28__%29.md): Sets a tag that you use for tracking interactivity.
- [invalidatableContent(\_:)](../view/invalidatablecontent%28__%29.md): Mark the receiver as their content might be invalidated.
