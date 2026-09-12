> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingsizingoptions/maxsize](https://developer.apple.com/documentation/swiftui/nshostingsizingoptions/maxsize)

# maxSize

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 13.0+

The hosting view creates and updates constraints that represent its content’s maximum size.

## Declaration

```swift
static let maxSize: NSHostingSizingOptions
```

<a id="discussion"></a>

## Discussion

The constraints reflect the size that fits a proposal of `width: infinity, height: infinity`.

## See Also

### Geting sizing options

- [intrinsicContentSize](intrinsiccontentsize.md): The hosting view creates and updates constraints that represent its content’s ideal size. These constraints in turn influence the hosting view’s `intrinsicContentSize`.
- [minSize](minsize.md): The hosting view creates and updates constraints that represent its content’s minimum size.
- [preferredContentSize](preferredcontentsize.md): The hosting controller creates and updates constraints that represent its content’s ideal size. These constraints in turn influence the hosting controller’s `preferredContentSize`.
- [standardBounds](standardbounds.md): The hosting view creates constraints for its minimum, ideal, and maximum sizes.
