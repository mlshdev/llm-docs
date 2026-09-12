> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogstore/position(date:)](https://developer.apple.com/documentation/oslog/oslogstore/position(date:))

# position(date:) (Swift)

**Framework:** OSLog  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a position representing the time specified.

## Declaration

```swift
func position(date: Date) -> OSLogPosition
```

<a id="Discussion"></a>

## Discussion

If there are multiple occurrences of the same time, the method returns the earliest occurrence.

## See Also

### Accessing Position

- [position(timeIntervalSinceEnd:)](position%28timeintervalsinceend_%29.md): Returns a position representing time since the end of the time range that the entries span.
- [position(timeIntervalSinceLatestBoot:)](position%28timeintervalsincelatestboot_%29.md): Returns a position representing time since the last boot in the series of entries.

# positionWithDate: (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a position representing the time specified.

## Declaration

```objectivec
- (OSLogPosition *) positionWithDate:(NSDate *) date;
```

<a id="Discussion"></a>

## Discussion

If there are multiple occurrences of the same time, the method returns the earliest occurrence.

## See Also

### Accessing Position

- [positionWithTimeIntervalSinceEnd:](position%28timeintervalsinceend_%29.md): Returns a position representing time since the end of the time range that the entries span.
- [positionWithTimeIntervalSinceLatestBoot:](position%28timeintervalsincelatestboot_%29.md): Returns a position representing time since the last boot in the series of entries.
