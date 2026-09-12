> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/sum()](https://developer.apple.com/documentation/createml/mldatacolumn/sum())

# sum()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Returns the sum of the elements in a column of doubles.

## Declaration

```swift
func sum() -> Double?
```

<a id="return-value"></a>

## Return Value

A [Double](https://developer.apple.com/documentation/swift/double); otherwise `nil` if the column is invalid.

## See Also

### Getting sum, mean, and standard deviation values

- [mean()](mean%28%29.md): Conforms when `Element` is `Double`. Returns the arithmetic mean of the elements in a column of doubles.
- [std()](std%28%29.md): Deprecated. Conforms when `Element` is `Double`. Returns the standard deviation of the elements in a column of doubles.
- [stdev()](stdev%28%29.md): Conforms when `Element` is `Double`. Returns the standard deviation of the elements in a column of doubles.
