> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scrollindicatorvisibility/hidden

# hidden

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Hide the scroll indicators.

## Declaration

```swift
static var hidden: ScrollIndicatorVisibility { get }
```

<a id="discussion"></a>

## Discussion

By default, scroll views in macOS show indicators when a mouse is connected. Use [never](never.md) to indicate a stronger preference that can override this behavior.

## See Also

### Getting visibilties

- [automatic](automatic.md): Scroll indicator visibility depends on the policies of the component accepting the visibility configuration.
- [never](never.md): Scroll indicators should never be visible.
- [visible](visible.md): Show the scroll indicators.
