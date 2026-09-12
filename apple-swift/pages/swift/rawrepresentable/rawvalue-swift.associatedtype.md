> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawrepresentable/rawvalue-swift.associatedtype](https://developer.apple.com/documentation/swift/rawrepresentable/rawvalue-swift.associatedtype)

# RawValue

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The raw type that can be used to represent all values of the conforming type.

## Declaration

```swift
associatedtype RawValue
```

<a id="discussion"></a>

## Discussion

Every distinct value of the conforming type has a corresponding unique value of the `RawValue` type, but there may be values of the `RawValue` type that don’t have a corresponding value of the conforming type.

## See Also

### Accessing the Raw Value

- [rawValue](rawvalue-swift.property.md): The corresponding value of the raw type.
