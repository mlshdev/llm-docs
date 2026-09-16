> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/transitionphase/isidentity

# isIdentity

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean that indicates whether the transition should have an identity effect, i.e. not change the appearance of its view.

## Declaration

```swift
var isIdentity: Bool { get }
```

<a id="discussion"></a>

## Discussion

This is true in the `identity` phase.

## See Also

### Getting phase characteristics

- [value](value.md): A value that can be used to multiply effects that are applied differently depending on the phase.
