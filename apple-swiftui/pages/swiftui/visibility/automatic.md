> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visibility/automatic](https://developer.apple.com/documentation/swiftui/visibility/automatic)

# Visibility.automatic

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The element may be visible or hidden depending on the policies of the component accepting the visibility configuration.

## Declaration

```swift
case automatic
```

<a id="discussion"></a>

## Discussion

For example, some components employ different automatic behavior depending on factors including the platform, the surrounding container, user settings, etc.

## See Also

### Getting visibility options

- [Visibility.visible](visible.md): The element may be visible.
- [Visibility.hidden](hidden.md): The element may be hidden.
