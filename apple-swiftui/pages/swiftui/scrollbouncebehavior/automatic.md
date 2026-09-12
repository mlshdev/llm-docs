> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollbouncebehavior/automatic](https://developer.apple.com/documentation/swiftui/scrollbouncebehavior/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The automatic behavior.

## Declaration

```swift
static var automatic: ScrollBounceBehavior { get }
```

<a id="discussion"></a>

## Discussion

The scrollable view automatically chooses whether content bounces when people scroll to the end of the view’s content. By default, scrollable views use the [always](always.md) behavior.

## See Also

### Bounce behaviors

- [always](always.md): The scrollable view always bounces.
- [basedOnSize](basedonsize.md): The scrollable view bounces when its content is large enough to require scrolling.
