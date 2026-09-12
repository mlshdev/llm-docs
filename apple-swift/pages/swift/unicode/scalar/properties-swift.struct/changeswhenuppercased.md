> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/changeswhenuppercased](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/changeswhenuppercased)

# changesWhenUppercased

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar’s normalized form differs from the `uppercaseMapping` of each constituent scalar.

## Declaration

```swift
var changesWhenUppercased: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property corresponds to the “Changes_When_Uppercased” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
