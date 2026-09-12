> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpadtimerange/init(_:)](https://developer.apple.com/documentation/mediaplayer/mpadtimerange/init(_:))

# init(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a Media Player time range that indicates where an ad break exists in the current player.

## Declaration

```swift
init(_ timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: A Core Media time range.

# initWithTimeRange: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a Media Player time range that indicates where an ad break exists in the current player.

## Declaration

```objectivec
- (instancetype) initWithTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: A Core Media time range.
