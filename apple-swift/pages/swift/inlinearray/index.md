> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/inlinearray/index

# InlineArray.Index

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type that represents a position in the array.

## Declaration

```swift
typealias Index = Int
```

<a id="discussion"></a>

## Discussion

Valid indices consist of the position of every element and a “past the end” position that’s not valid for use as a subscript argument.
