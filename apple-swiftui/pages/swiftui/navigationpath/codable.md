> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationpath/codable](https://developer.apple.com/documentation/swiftui/navigationpath/codable)

# codable

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A value that describes the contents of this path in a serializable format.

## Declaration

```swift
var codable: NavigationPath.CodableRepresentation? { get }
```

<a id="discussion"></a>

## Discussion

This value is `nil` if any of the type-erased elements of the path don’t conform to the [Codable](https://developer.apple.com/documentation/swift/codable) protocol.

## See Also

### Encoding a path

- [NavigationPath.CodableRepresentation](codablerepresentation.md): A serializable representation of a navigation path.
