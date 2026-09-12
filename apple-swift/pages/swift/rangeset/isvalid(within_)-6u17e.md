> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/isvalid(within:)-6u17e](https://developer.apple.com/documentation/swift/rangeset/isvalid(within:)-6u17e)

# isValid(within:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether the range set is valid for use with the provided attributed string.

## Declaration

```swift
func isValid(within text: some AttributedStringProtocol) -> Bool
```

## Parameters

- `text`: An attributed string used to validate the range set.

<a id="return-value"></a>

## Return Value

`true` when the range set is valid for use with the provided attributed string; otherwise, false. A range set is valid if each of its ranges are valid in the attributed string.
