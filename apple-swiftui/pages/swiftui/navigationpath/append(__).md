> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationpath/append(_:)](https://developer.apple.com/documentation/swiftui/navigationpath/append(_:))

# append(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Appends a new codable value to the end of this path.

## Declaration

```swift
mutating func append<V>(_ value: V) where V : Decodable, V : Encodable, V : Hashable
```

## Mentioned In

- [Understanding the navigation stack](../understanding-the-navigation-stack.md)

## See Also

### Managing path contents

- [isEmpty](isempty.md): A Boolean that indicates whether this path is empty.
- [count](count.md): The number of elements in this path.
- [removeLast(\_:)](removelast%28__%29.md): Removes values from the end of this path.
