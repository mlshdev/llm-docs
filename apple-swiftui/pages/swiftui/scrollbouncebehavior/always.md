> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scrollbouncebehavior/always

# always

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The scrollable view always bounces.

## Declaration

```swift
static var always: ScrollBounceBehavior { get }
```

<a id="discussion"></a>

## Discussion

The scrollable view always bounces along the specified axis, regardless of the size of the content.

## See Also

### Bounce behaviors

- [automatic](automatic.md): The automatic behavior.
- [basedOnSize](basedonsize.md): The scrollable view bounces when its content is large enough to require scrolling.
