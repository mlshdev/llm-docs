> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/utf8view/subscript(_:)](https://developer.apple.com/documentation/swift/unicode/scalar/utf8view/subscript(_:))

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Accesses the code unit at the specified position.

## Declaration

```swift
subscript(position: Int) -> UTF8.CodeUnit { get }
```

## Parameters

- `position`: The position of the element to access. `position` must be a valid index of the collection that is not equal to the `endIndex` property.
