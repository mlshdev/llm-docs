> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/dropconfiguration/accepteditemcount

# acceptedItemCount

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Specifies the number of items that the drop side wants to accept.

## Declaration

```swift
var acceptedItemCount: Int? { get set }
```

<a id="discussion"></a>

## Discussion

Some drop destinations can accept only a limited number of dropped items. On macOS, the number is displayed as a cursor badge.
