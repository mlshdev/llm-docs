> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/caseiterable/allcases-swift.associatedtype](https://developer.apple.com/documentation/swift/caseiterable/allcases-swift.associatedtype)

# AllCases

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can represent a collection of all values of this type.

## Declaration

```swift
associatedtype AllCases : Collection = [Self] where Self == Self.AllCases.Element
```

## See Also

### Accessing Cases

- [allCases](allcases-swift.type.property.md): A collection of all values of this type.
