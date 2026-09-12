> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/preferencekey/reduce(value:nextvalue:)](https://developer.apple.com/documentation/swiftui/preferencekey/reduce(value:nextvalue:))

# reduce(value:nextValue:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Combines a sequence of values by modifying the previously-accumulated value with the result of a closure that provides the next value.

## Declaration

```swift
static func reduce(value: inout Self.Value, nextValue: () -> Self.Value)
```

## Parameters

- `value`: The value accumulated through previous calls to this method. The implementation should modify this value.
- `nextValue`: A closure that returns the next value in the sequence.

<a id="discussion"></a>

## Discussion

This method receives its values in view-tree order. Conceptually, this combines the preference value from one tree with that of its next sibling.
