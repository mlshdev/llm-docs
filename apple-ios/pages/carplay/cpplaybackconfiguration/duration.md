> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpplaybackconfiguration/duration](https://developer.apple.com/documentation/carplay/cpplaybackconfiguration/duration)

# duration (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The total duration of the media content as a CMTime value. Provide 0 if the duration of the content is unknown or unavailable, for example in live-streaming content.

## Declaration

```swift
var duration: CMTime { get }
```

# duration (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The total duration of the media content as a CMTime value. Provide 0 if the duration of the content is unknown or unavailable, for example in live-streaming content.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CMTime duration;
```
