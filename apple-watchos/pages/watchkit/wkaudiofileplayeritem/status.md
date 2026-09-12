> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayeritem/status](https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritem/status)

# status (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The status of the player item.

## Declaration

```swift
var status: WKAudioFilePlayerItemStatus { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [WKAudioFilePlayerItemStatus.failed](../wkaudiofileplayeritemstatus/failed.md), the [error](error.md) property contains the reason for the failure.

## See Also

### Getting Information About the Item

- [asset](asset.md): Deprecated. The audio file asset being managed.
- [error](error.md): Deprecated. An error that describes the cause of a failure.

# status (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The status of the player item.

## Declaration

```objectivec
@property (nonatomic, readonly) WKAudioFilePlayerItemStatus status;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [WKAudioFilePlayerItemStatusFailed](../wkaudiofileplayeritemstatus/failed.md), the [error](error.md) property contains the reason for the failure.

## See Also

### Getting Information About the Item

- [asset](asset.md): Deprecated. The audio file asset being managed.
- [error](error.md): Deprecated. An error that describes the cause of a failure.
