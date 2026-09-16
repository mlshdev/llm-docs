> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float16/init(exactly:)-2qxl0

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new value, if the given integer can be represented exactly.

## Declaration

```swift
init?<Source>(exactly value: Source) where Source : BinaryInteger
```

## Parameters

- `value`: The integer to convert to a floating-point value.

<a id="discussion"></a>

## Discussion

If the given integer cannot be represented exactly, the result is `nil`.
