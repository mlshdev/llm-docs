> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/range(of:options:in:)](https://developer.apple.com/documentation/foundation/data/range(of:options:in:))

# range(of:options:in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds the range of the specified data as a subsequence of this data, if it exists.

## Declaration

```swift
func range(of dataToFind: Data, options: Data.SearchOptions = [], in range: Range<Data.Index>? = nil) -> Range<Data.Index>?
```

## Parameters

- `dataToFind`: The data to be searched for.
- `options`: Options for the search. Default value is `[]`.
- `range`: The range of this data in which to perform the search. Default value is `nil`, which means the entire content of this data.

<a id="return-value"></a>

## Return Value

A `Range` specifying the location of the found data, or nil if a match could not be found.

<a id="Discussion"></a>

## Discussion

Precondition: `range` must be in the bounds of the Data.

## See Also

### Finding Bytes

- [Data.SearchOptions](searchoptions.md): Options that control a data search operation.
