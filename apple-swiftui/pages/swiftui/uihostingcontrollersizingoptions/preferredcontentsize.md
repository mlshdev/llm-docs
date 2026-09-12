> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingcontrollersizingoptions/preferredcontentsize](https://developer.apple.com/documentation/swiftui/uihostingcontrollersizingoptions/preferredcontentsize)

# preferredContentSize

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The hosting controller tracks its content’s ideal size in its preferred content size.

## Declaration

```swift
static let preferredContentSize: UIHostingControllerSizingOptions
```

<a id="discussion"></a>

## Discussion

Use this option when using a hosting controller with a container view controller that requires up-to-date knowledge of the hosting controller’s ideal size.

> **Note**

> This option comes with a performance cost because it asks for the ideal size of the content using the [unspecified](../proposedviewsize/unspecified.md) size proposal.

## See Also

### Getting sizing options

- [intrinsicContentSize](intrinsiccontentsize.md): The hosting controller’s view automatically invalidate its intrinsic content size when its ideal size changes.
