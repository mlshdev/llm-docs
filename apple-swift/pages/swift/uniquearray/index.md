> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/index](https://developer.apple.com/documentation/swift/uniquearray/index)

# UniqueArray.Index

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that represents a position in the array: an integer offset from the start.

## Declaration

```swift
typealias Index = Int
```

<a id="discussion"></a>

## Discussion

Valid indices consist of the position of every element and a “past the end” position that’s not valid for use as a subscript argument.
