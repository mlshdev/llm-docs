> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutput/copytaggedbuffergroupforhosttime:presentationtimestamp:activeconfiguration:](https://developer.apple.com/documentation/avfoundation/avplayervideooutput/copytaggedbuffergroupforhosttime:presentationtimestamp:activeconfiguration:)

# copyTaggedBufferGroupForHostTime:presentationTimeStamp:activeConfiguration:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

## Declaration

```objectivec
- (CMTaggedBufferGroupRef) copyTaggedBufferGroupForHostTime:(CMTime) hostTime presentationTimeStamp:(CMTime *) presentationTimeStampOut activeConfiguration:(AVPlayerVideoOutputConfiguration **) activeConfigurationOut;
```

## See Also

### Accessing video data

- [AVPlayerVideoOutputConfiguration](configuration.md): An object that provides configuration information for the related player item.
