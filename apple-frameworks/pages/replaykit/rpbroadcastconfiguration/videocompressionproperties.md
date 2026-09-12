> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastconfiguration/videocompressionproperties](https://developer.apple.com/documentation/replaykit/rpbroadcastconfiguration/videocompressionproperties)

# videoCompressionProperties (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

The compression properties for encoding movie clips that are to be overwritten.

> No longer supported

## Declaration

```swift
var videoCompressionProperties: [String : any NSSecureCoding & NSObjectProtocol]? { get set }
```

<a id="Discussion"></a>

## Discussion

See [AVVideoCompressionPropertiesKey](../../avfoundation/avvideocompressionpropertieskey.md) for a list of available properties.

## See Also

### Configuring Movie Clips

- [clipDuration](clipduration.md): Deprecated. The duration of movie clips sent the to the movie clip handler extension.

# videoCompressionProperties (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

The compression properties for encoding movie clips that are to be overwritten.

> No longer supported

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSDictionary<NSString *,NSObject<NSCoding,NSSecureCoding> *> * videoCompressionProperties;
```

<a id="Discussion"></a>

## Discussion

See [AVVideoCompressionPropertiesKey](../../avfoundation/avvideocompressionpropertieskey.md) for a list of available properties.

## See Also

### Configuring Movie Clips

- [clipDuration](clipduration.md): Deprecated. The duration of movie clips sent the to the movie clip handler extension.
