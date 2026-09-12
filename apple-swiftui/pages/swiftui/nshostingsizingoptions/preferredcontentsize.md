> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingsizingoptions/preferredcontentsize](https://developer.apple.com/documentation/swiftui/nshostingsizingoptions/preferredcontentsize)

# preferredContentSize

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 13.0+

The hosting controller creates and updates constraints that represent its content’s ideal size. These constraints in turn influence the hosting controller’s `preferredContentSize`.

## Declaration

```swift
static let preferredContentSize: NSHostingSizingOptions
```

<a id="discussion"></a>

## Discussion

The constraints reflect the size that fits a proposal of `.unspecified`.

> **Note**

> This option has no effect when used with an `NSHostingView` directly.

## See Also

### Geting sizing options

- [intrinsicContentSize](intrinsiccontentsize.md): The hosting view creates and updates constraints that represent its content’s ideal size. These constraints in turn influence the hosting view’s `intrinsicContentSize`.
- [maxSize](maxsize.md): The hosting view creates and updates constraints that represent its content’s maximum size.
- [minSize](minsize.md): The hosting view creates and updates constraints that represent its content’s minimum size.
- [standardBounds](standardbounds.md): The hosting view creates constraints for its minimum, ideal, and maximum sizes.
