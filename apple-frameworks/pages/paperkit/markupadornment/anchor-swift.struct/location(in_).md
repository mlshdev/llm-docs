> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupadornment/anchor-swift.struct/location(in:)](https://developer.apple.com/documentation/paperkit/markupadornment/anchor-swift.struct/location(in:))

# location(in:)

**Framework:** PaperKit  
**Kind:** Instance Method

Returns the position of this anchor within the specified markup’s coordinate system.

## Declaration

```swift
func location(in markup: PaperMarkup) -> CGPoint?
```

## Parameters

- `markup`: The `PaperMarkup` instance to calculate the location within.

<a id="return-value"></a>

## Return Value

A `CGPoint` representing the anchor’s position in the markup’s coordinate system, or `nil` if the location is unavailable.
