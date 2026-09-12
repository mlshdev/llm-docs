> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/isvalid(within:)-38qb9](https://developer.apple.com/documentation/swift/rangeset/isvalid(within:)-38qb9)

# isValid(within:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether the range set is valid for use with the provided discontiguous attributed string.

## Declaration

```swift
func isValid(within text: DiscontiguousAttributedSubstring) -> Bool
```

## Parameters

- `text`: A discontiguous attributed string used to validate the range set.

<a id="return-value"></a>

## Return Value

`true` when the range set is valid for use with the provided discontiguous attributed string; otherwise, false. A range set is valid if each of its ranges are valid in the discontiguous attributed string.
