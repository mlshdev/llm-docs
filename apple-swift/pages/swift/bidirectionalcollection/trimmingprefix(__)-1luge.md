> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/trimmingprefix(_:)-1luge](https://developer.apple.com/documentation/swift/bidirectionalcollection/trimmingprefix(_:)-1luge)

# trimmingPrefix(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new collection of the same type by removing the initial elements that matches the given regex.

## Declaration

```swift
func trimmingPrefix(_ regex: some RegexComponent) -> Self.SubSequence
```

## Parameters

- `regex`: The regex to remove from this collection.

<a id="return-value"></a>

## Return Value

A collection containing the elements that does not match `regex` from the start.
