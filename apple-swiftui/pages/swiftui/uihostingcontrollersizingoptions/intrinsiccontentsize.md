> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingcontrollersizingoptions/intrinsiccontentsize](https://developer.apple.com/documentation/swiftui/uihostingcontrollersizingoptions/intrinsiccontentsize)

# intrinsicContentSize

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The hosting controller’s view automatically invalidate its intrinsic content size when its ideal size changes.

## Declaration

```swift
static let intrinsicContentSize: UIHostingControllerSizingOptions
```

<a id="discussion"></a>

## Discussion

Use this option when the hosting controller’s view is being laid out with Auto Layout.

> **Note**

> This option comes with a performance cost because it asks for the ideal size of the content using the [unspecified](../proposedviewsize/unspecified.md) size proposal.

## See Also

### Getting sizing options

- [preferredContentSize](preferredcontentsize.md): The hosting controller tracks its content’s ideal size in its preferred content size.
