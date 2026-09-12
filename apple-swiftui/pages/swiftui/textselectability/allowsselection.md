> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textselectability/allowsselection](https://developer.apple.com/documentation/swiftui/textselectability/allowsselection)

# allowsSelection

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A Boolean value that indicates whether the selectability type allows selection.

## Declaration

```swift
static var allowsSelection: Bool { get }
```

<a id="discussion"></a>

## Discussion

Conforming types, such as [EnabledTextSelectability](../enabledtextselectability.md) and [DisabledTextSelectability](../disabledtextselectability.md), return `true` or `false` for this property as appropriate. SwiftUI expects this value for a given selectability type to be constant, unaffected by global state.
