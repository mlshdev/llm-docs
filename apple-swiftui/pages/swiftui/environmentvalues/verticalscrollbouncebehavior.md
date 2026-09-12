> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/verticalscrollbouncebehavior](https://developer.apple.com/documentation/swiftui/environmentvalues/verticalscrollbouncebehavior)

# verticalScrollBounceBehavior

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The scroll bounce mode for the vertical axis of scrollable views.

## Declaration

```swift
var verticalScrollBounceBehavior: ScrollBounceBehavior { get set }
```

<a id="discussion"></a>

## Discussion

Use the [scrollBounceBehavior(\_:axes:)](../view/scrollbouncebehavior%28__axes_%29.md) view modifier to set this value in the [Environment](../environment.md).

## See Also

### Configuring scroll bounce behavior

- [scrollBounceBehavior(\_:axes:)](../view/scrollbouncebehavior%28__axes_%29.md): Configures the bounce behavior of scrollable views along the specified axis.
- [horizontalScrollBounceBehavior](horizontalscrollbouncebehavior.md): The scroll bounce mode for the horizontal axis of scrollable views.
- [ScrollBounceBehavior](../scrollbouncebehavior.md): The ways that a scrollable view can bounce when it reaches the end of its content.
