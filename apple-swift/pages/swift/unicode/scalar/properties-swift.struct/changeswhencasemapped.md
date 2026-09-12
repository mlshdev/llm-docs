> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/changeswhencasemapped](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/changeswhencasemapped)

# changesWhenCaseMapped

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar may change when it undergoes case mapping.

## Declaration

```swift
var changesWhenCaseMapped: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is `true` whenever one or more of `changesWhenLowercased`, `changesWhenUppercased`, or `changesWhenTitlecased` are `true`.

This property corresponds to the “Changes_When_Casemapped” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
