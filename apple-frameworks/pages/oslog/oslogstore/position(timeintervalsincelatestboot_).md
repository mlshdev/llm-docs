> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogstore/position(timeintervalsincelatestboot:)](https://developer.apple.com/documentation/oslog/oslogstore/position(timeintervalsincelatestboot:))

# position(timeIntervalSinceLatestBoot:) (Swift)

**Framework:** OSLog  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a position representing time since the last boot in the series of entries.

## Declaration

```swift
func position(timeIntervalSinceLatestBoot seconds: TimeInterval) -> OSLogPosition
```

## See Also

### Accessing Position

- [position(date:)](position%28date_%29.md): Returns a position representing the time specified.
- [position(timeIntervalSinceEnd:)](position%28timeintervalsinceend_%29.md): Returns a position representing time since the end of the time range that the entries span.

# positionWithTimeIntervalSinceLatestBoot: (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a position representing time since the last boot in the series of entries.

## Declaration

```objectivec
- (OSLogPosition *) positionWithTimeIntervalSinceLatestBoot:(NSTimeInterval) seconds;
```

## See Also

### Accessing Position

- [positionWithDate:](position%28date_%29.md): Returns a position representing the time specified.
- [positionWithTimeIntervalSinceEnd:](position%28timeintervalsinceend_%29.md): Returns a position representing time since the end of the time range that the entries span.
