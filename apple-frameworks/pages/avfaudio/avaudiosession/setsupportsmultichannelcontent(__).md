> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setsupportsmultichannelcontent(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setsupportsmultichannelcontent(_:))

# setSupportsMultichannelContent(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets whether your app supplies multichannel audio content.

## Declaration

```swift
func setSupportsMultichannelContent(_ inValue: Bool) throws
```

## Parameters

- `inValue`: A Boolean value that indicates whether your app supplies multichannel audio content.

## See Also

### Configuring multichannel support

- [supportsMultichannelContent](supportsmultichannelcontent.md): A Boolean value that indicates whether your app supplies multichannel audio content.

# setSupportsMultichannelContent:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets whether your app supplies multichannel audio content.

## Declaration

```objectivec
- (BOOL) setSupportsMultichannelContent:(BOOL) inValue error:(NSError **) outError;
```

## Parameters

- `inValue`: A Boolean value that indicates whether your app supplies multichannel audio content.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil.`

## See Also

### Configuring multichannel support

- [supportsMultichannelContent](supportsmultichannelcontent.md): A Boolean value that indicates whether your app supplies multichannel audio content.
