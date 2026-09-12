> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/supportsmultichannelcontent](https://developer.apple.com/documentation/avfaudio/avaudiosession/supportsmultichannelcontent)

# supportsMultichannelContent (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether your app supplies multichannel audio content.

## Declaration

```swift
var supportsMultichannelContent: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Configuring multichannel support

- [setSupportsMultichannelContent(\_:)](setsupportsmultichannelcontent%28__%29.md): Sets whether your app supplies multichannel audio content.

# supportsMultichannelContent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether your app supplies multichannel audio content.

## Declaration

```objectivec
@property (readonly) BOOL supportsMultichannelContent;
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Configuring multichannel support

- [setSupportsMultichannelContent:error:](setsupportsmultichannelcontent%28__%29.md): Sets whether your app supplies multichannel audio content.
