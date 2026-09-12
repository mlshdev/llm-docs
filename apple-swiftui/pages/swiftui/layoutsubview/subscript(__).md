> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutsubview/subscript(_:)](https://developer.apple.com/documentation/swiftui/layoutsubview/subscript(_:))

# subscript(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Gets the value for the subview that’s associated with the specified key.

## Declaration

```swift
subscript<K>(key: K.Type) -> K.Value where K : LayoutValueKey { get }
```

<a id="overview"></a>

## Overview

If you define a custom layout value using [LayoutValueKey](../layoutvaluekey.md), you can read the key’s associated value for a given subview in a layout container by indexing the container’s subviews with the key type. For example, if you define a `Flexibility` key type, you can put the associated values of all the layout’s subviews into an array:

```swift
let flexibilities = subviews.map { subview in
    subview[Flexibility.self]
}
```

For more information about creating a custom layout, see [Layout](../layout.md).
