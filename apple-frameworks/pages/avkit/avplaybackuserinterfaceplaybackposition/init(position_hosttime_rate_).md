> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfaceplaybackposition/init(position:hosttime:rate:)](https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackposition/init(position:hosttime:rate:))

# init(position:hostTime:rate:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a new playback position snapshot.

## Declaration

```swift
init(position: CMTime, hostTime: CMTime, rate: Float)
```

## Parameters

- `position`: The playback position at `hostTime`.
- `hostTime`: The mach host time at which `position` was accurate.
- `rate`: The rate of position advancement at the time of the snapshot.

<a id="return-value"></a>

## Return Value

A new playback position snapshot.

# initWithPosition:hostTime:rate: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a new playback position snapshot.

## Declaration

```objectivec
- (instancetype) initWithPosition:(CMTime) position hostTime:(CMTime) hostTime rate:(float) rate;
```

## Parameters

- `position`: The playback position at `hostTime`.
- `hostTime`: The mach host time at which `position` was accurate.
- `rate`: The rate of position advancement at the time of the snapshot.

<a id="return-value"></a>

## Return Value

A new playback position snapshot.
