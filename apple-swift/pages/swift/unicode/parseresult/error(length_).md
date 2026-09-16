> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unicode/parseresult/error(length:)

# Unicode.ParseResult.error(length:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An encoding error was detected.

## Declaration

```swift
case error(length: Int)
```

<a id="discussion"></a>

## Discussion

`length` is the number of underlying code units consumed by this error, guaranteed to be greater than 0.
