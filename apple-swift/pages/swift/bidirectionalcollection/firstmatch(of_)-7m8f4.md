> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/firstmatch(of:)-7m8f4](https://developer.apple.com/documentation/swift/bidirectionalcollection/firstmatch(of:)-7m8f4)

# firstMatch(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the first match of the specified regex within the collection.

## Declaration

```swift
func firstMatch<Output>(of r: some RegexComponent) -> Regex<Output>.Match?
```

<a id="return-value"></a>

## Return Value

The first match of `regex` in the collection, or `nil` if there isn’t a match.
