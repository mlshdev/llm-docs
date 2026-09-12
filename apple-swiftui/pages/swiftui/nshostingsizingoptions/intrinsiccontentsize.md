> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingsizingoptions/intrinsiccontentsize](https://developer.apple.com/documentation/swiftui/nshostingsizingoptions/intrinsiccontentsize)

# intrinsicContentSize

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 13.0+

The hosting view creates and updates constraints that represent its content’s ideal size. These constraints in turn influence the hosting view’s `intrinsicContentSize`.

## Declaration

```swift
static let intrinsicContentSize: NSHostingSizingOptions
```

<a id="discussion"></a>

## Discussion

The constraints reflect the size that fits a proposal of `.unspecified`.

## See Also

### Geting sizing options

- [maxSize](maxsize.md): The hosting view creates and updates constraints that represent its content’s maximum size.
- [minSize](minsize.md): The hosting view creates and updates constraints that represent its content’s minimum size.
- [preferredContentSize](preferredcontentsize.md): The hosting controller creates and updates constraints that represent its content’s ideal size. These constraints in turn influence the hosting controller’s `preferredContentSize`.
- [standardBounds](standardbounds.md): The hosting view creates constraints for its minimum, ideal, and maximum sizes.
