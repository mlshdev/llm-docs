> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transitionphase/isidentity](https://developer.apple.com/documentation/swiftui/transitionphase/isidentity)

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
