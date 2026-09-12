> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf8/validationerror/kind-swift.struct/rawvalue-swift.typealias](https://developer.apple.com/documentation/swift/unicode/utf8/validationerror/kind-swift.struct/rawvalue-swift.typealias)

# Unicode.UTF8.ValidationError.Kind.RawValue

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The raw type that can be used to represent all values of the conforming type.

## Declaration

```swift
typealias RawValue = UInt8
```

<a id="discussion"></a>

## Discussion

Every distinct value of the conforming type has a corresponding unique value of the `RawValue` type, but there may be values of the `RawValue` type that don’t have a corresponding value of the conforming type.
