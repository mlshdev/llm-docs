> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transitionphase/value](https://developer.apple.com/documentation/swiftui/transitionphase/value)

# value

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A value that can be used to multiply effects that are applied differently depending on the phase.

## Declaration

```swift
var value: Double { get }
```

<a id="return-value"></a>

## Return Value

Zero when in the `identity` case, -1.0 for `willAppear`, and 1.0 for `didDisappear`.

## See Also

### Getting phase characteristics

- [isIdentity](isidentity.md): A Boolean that indicates whether the transition should have an identity effect, i.e. not change the appearance of its view.
