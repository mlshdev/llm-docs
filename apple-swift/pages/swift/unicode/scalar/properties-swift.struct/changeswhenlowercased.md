> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/changeswhenlowercased](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/changeswhenlowercased)

# changesWhenLowercased

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar’s normalized form differs from the `lowercaseMapping` of each constituent scalar.

## Declaration

```swift
var changesWhenLowercased: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property corresponds to the “Changes_When_Lowercased” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
