> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebystringinterpolation/stringinterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation/stringinterpolation)

# StringInterpolation

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type each segment of a string literal containing interpolations should be appended to.

## Declaration

```swift
associatedtype StringInterpolation : StringInterpolationProtocol = DefaultStringInterpolation where Self.StringLiteralType == Self.StringInterpolation.StringLiteralType
```

<a id="discussion"></a>

## Discussion

The `StringLiteralType` of an interpolation type must match the `StringLiteralType` of the conforming type.
