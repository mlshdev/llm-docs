> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scrolltransitionphase/value

# value

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A phase-derived value that can be used to scale or otherwise modify effects.

## Declaration

```swift
var value: Double { get }
```

<a id="discussion"></a>

## Discussion

Returns -1.0 when in the topLeading phase, zero when in the identity phase, and 1.0 when in the bottomTrailing phase.

## See Also

### Accessing the phase state

- [isIdentity](isidentity.md)
