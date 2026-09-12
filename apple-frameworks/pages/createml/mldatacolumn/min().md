> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/min()](https://developer.apple.com/documentation/createml/mldatacolumn/min())

# min()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Returns the element with the lowest value in a column of doubles.

## Declaration

```swift
func min() -> Double?
```

<a id="return-value"></a>

## Return Value

A [Double](https://developer.apple.com/documentation/swift/double); otherwise `nil` if the column is empty or invalid.

## See Also

### Getting the min and max element values

- [max()](max%28%29.md): Conforms when `Element` is `Double`. Returns the element with the highest value in a column of doubles.
