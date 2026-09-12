> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterstitialtimerange/init(timerange:)](https://developer.apple.com/documentation/avkit/avinterstitialtimerange/init(timerange:))

# init(timeRange:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** tvOS 9.0+

Initializes an interstitial time range object with the specified time range.

## Declaration

```swift
init(timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: The time range to designate as interstitial content.

<a id="return-value"></a>

## Return Value

A new interstitial time range object.

<a id="Discussion"></a>

## Discussion

To associate interstitial time ranges with an asset for playback, use the [interstitialTimeRanges](../../avfoundation/avplayeritem/interstitialtimeranges.md) property of an [AVPlayerItem](../../avfoundation/avplayeritem.md) object.

# initWithTimeRange: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Initializes an interstitial time range object with the specified time range.

## Declaration

```objectivec
- (instancetype) initWithTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range to designate as interstitial content.

<a id="return-value"></a>

## Return Value

A new interstitial time range object.

<a id="Discussion"></a>

## Discussion

To associate interstitial time ranges with an asset for playback, use the [interstitialTimeRanges](../../avfoundation/avplayeritem/interstitialtimeranges.md) property of an [AVPlayerItem](../../avfoundation/avplayeritem.md) object.
