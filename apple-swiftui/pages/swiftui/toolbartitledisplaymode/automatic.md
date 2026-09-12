> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbartitledisplaymode/automatic](https://developer.apple.com/documentation/swiftui/toolbartitledisplaymode/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The automatic mode.

## Declaration

```swift
static var automatic: ToolbarTitleDisplayMode { get }
```

<a id="discussion"></a>

## Discussion

For root content in a navigation stack in iOS, iPadOS, or tvOS this behavior will:

- Default to [large](large.md) when a navigation title is configured.
- Default to [inline](inline.md) when no navigation title is provided.

In all platforms, content pushed onto a navigation stack will use the behavior of the content already on the navigation stack. This has no effect in macOS.

## See Also

### Getting display modes

- [inline](inline.md): The inline mode.
- [inlineLarge](inlinelarge.md): The inline large mode.
- [large](large.md): The large mode.
