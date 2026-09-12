> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/repeated/subscript(_:)](https://developer.apple.com/documentation/swift/repeated/subscript(_:))

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at the specified position.

## Declaration

```swift
subscript(position: Int) -> Element { get }
```

## Parameters

- `position`: The position of the element to access. `position` must be a valid index of the collection that is not equal to the `endIndex` property.
