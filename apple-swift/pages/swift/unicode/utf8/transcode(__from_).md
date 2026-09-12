> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf8/transcode(_:from:)](https://developer.apple.com/documentation/swift/unicode/utf8/transcode(_:from:))

# transcode(\_:from:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a scalar from another encoding’s representation, returning `nil` if the scalar can’t be represented in this encoding.

## Declaration

```swift
static func transcode<FromEncoding>(_ content: FromEncoding.EncodedScalar, from _: FromEncoding.Type) -> Unicode.UTF8.EncodedScalar? where FromEncoding : _UnicodeEncoding
```

<a id="discussion"></a>

## Discussion

A default implementation of this method will be provided automatically for any conforming type that does not implement one.
