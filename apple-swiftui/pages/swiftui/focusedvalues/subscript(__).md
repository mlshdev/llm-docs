> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusedvalues/subscript(_:)](https://developer.apple.com/documentation/swiftui/focusedvalues/subscript(_:))

# subscript(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Reads and writes values associated with a given focused value key.

## Declaration

```swift
subscript<Key>(key: Key.Type) -> Key.Value? where Key : FocusedValueKey { get set }
```

<a id="overview"></a>

## Overview

Use this subscript to get or set a focused value for a custom [FocusedValueKey](../focusedvaluekey.md). In most cases, you’ll use the `Entry` macro to create focused value properties, which automatically generates the appropriate key and uses this subscript internally:

```swift
extension FocusedValues {
    @Entry var myCustomValue: MyType?
}
```
