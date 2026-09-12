> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationpath/codablerepresentation](https://developer.apple.com/documentation/swiftui/navigationpath/codablerepresentation)

# NavigationPath.CodableRepresentation

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A serializable representation of a navigation path.

## Declaration

```swift
struct CodableRepresentation
```

<a id="overview"></a>

## Overview

When a navigation path contains elements that conform to the [Codable](https://developer.apple.com/documentation/swift/codable) protocol, you can use the path’s `CodableRepresentation` to convert the path to an external representation and to convert an external representation back into a navigation path.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Encoding a path

- [codable](codable.md): A value that describes the contents of this path in a serializable format.
