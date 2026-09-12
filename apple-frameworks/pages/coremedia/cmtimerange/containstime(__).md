> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerange/containstime(_:)](https://developer.apple.com/documentation/coremedia/cmtimerange/containstime(_:))

# containsTime(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the time range contains a time.

## Declaration

```swift
func containsTime(_ time: CMTime) -> Bool
```

## Parameters

- `time`: A time value to test for in the time range.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the time range contains the `time` value; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Finding Elements

- [containsTimeRange(\_:)](containstimerange%28__%29.md): Returns a Boolean value that indicates whether the time range contains another time range.
