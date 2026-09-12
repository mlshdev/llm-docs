> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/starts(with:)-97xlm](https://developer.apple.com/documentation/swift/bidirectionalcollection/starts(with:)-97xlm)

# starts(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether the initial elements of this collection are a match for the regex created by the given closure.

## Declaration

```swift
func starts(@RegexComponentBuilder with content: () -> some RegexComponent) -> Bool
```

## Parameters

- `content`: A closure that returns a regex to match at the beginning of this collection.

<a id="return-value"></a>

## Return Value

`true` if the initial elements of this collection match regex returned by `content`; otherwise, `false`.
