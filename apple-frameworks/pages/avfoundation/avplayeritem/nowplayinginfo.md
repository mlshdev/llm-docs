> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/nowplayinginfo](https://developer.apple.com/documentation/avfoundation/avplayeritem/nowplayinginfo)

# nowPlayingInfo (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The current now playing information for the player item.

## Declaration

```swift
var nowPlayingInfo: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this value to `nil` clears the player item’s now playing information.

# nowPlayingInfo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The current now playing information for the player item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * nowPlayingInfo;
```

<a id="Discussion"></a>

## Discussion

Setting this value to `nil` clears the player item’s now playing information.
