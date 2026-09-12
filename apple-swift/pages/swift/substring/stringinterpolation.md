> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/stringinterpolation](https://developer.apple.com/documentation/swift/substring/stringinterpolation)

# Substring.StringInterpolation

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type each segment of a string literal containing interpolations should be appended to.

## Declaration

```swift
typealias StringInterpolation = DefaultStringInterpolation
```

<a id="discussion"></a>

## Discussion

The `StringLiteralType` of an interpolation type must match the `StringLiteralType` of the conforming type.
