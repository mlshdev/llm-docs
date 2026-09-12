> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/starts(with:)-4972u](https://developer.apple.com/documentation/swift/bidirectionalcollection/starts(with:)-4972u)

# starts(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in the specified regex.

## Declaration

```swift
func starts(with regex: some RegexComponent) -> Bool
```

## Parameters

- `regex`: A regex to compare to this sequence.

<a id="return-value"></a>

## Return Value

`true` if the initial elements of the sequence matches the beginning of `regex`; otherwise, `false`.
