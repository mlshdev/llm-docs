> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kextaudiofileerror_codecunavailableinputnotconsumed](https://developer.apple.com/documentation/audiotoolbox/kextaudiofileerror_codecunavailableinputnotconsumed)

# kExtAudioFileError_CodecUnavailableInputNotConsumed (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The [ExtAudioFileWrite(\_:\_:\_:)](extaudiofilewrite%28______%29.md) function was interrupted and the last buffer that you provided was *not* successfully written to disk.

## Declaration

```swift
var kExtAudioFileError_CodecUnavailableInputNotConsumed: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

For additional information, refer to [Audio Guidelines By App Type](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/AudioGuidelinesByAppType/AudioGuidelinesByAppType.html#//apple_ref/doc/uid/TP40007875-CH11) in [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875).

## See Also

### Result Codes

- [kExtAudioFileError_CodecUnavailableInputConsumed](kextaudiofileerror_codecunavailableinputconsumed.md): The [ExtAudioFileWrite(\_:\_:\_:)](extaudiofilewrite%28______%29.md) function was interrupted and the last buffer that you provided was successfully written to disk.
- [kExtAudioFileError_InvalidProperty](kextaudiofileerror_invalidproperty.md)
- [kExtAudioFileError_InvalidPropertySize](kextaudiofileerror_invalidpropertysize.md)
- [kExtAudioFileError_NonPCMClientFormat](kextaudiofileerror_nonpcmclientformat.md)
- [kExtAudioFileError_InvalidChannelMap](kextaudiofileerror_invalidchannelmap.md): The number of channels does not match the specified format.
- [kExtAudioFileError_InvalidOperationOrder](kextaudiofileerror_invalidoperationorder.md)
- [kExtAudioFileError_InvalidDataFormat](kextaudiofileerror_invaliddataformat.md)
- [kExtAudioFileError_MaxPacketSizeUnknown](kextaudiofileerror_maxpacketsizeunknown.md)
- [kExtAudioFileError_InvalidSeek](kextaudiofileerror_invalidseek.md): An attempt to write, or an offset, is out of bounds.
- [kExtAudioFileError_AsyncWriteTooLarge](kextaudiofileerror_asyncwritetoolarge.md)
- [kExtAudioFileError_AsyncWriteBufferOverflow](kextaudiofileerror_asyncwritebufferoverflow.md): An asynchronous write operation could not be completed in time.

# kExtAudioFileError_CodecUnavailableInputNotConsumed (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The [ExtAudioFileWrite](extaudiofilewrite%28______%29.md) function was interrupted and the last buffer that you provided was *not* successfully written to disk.

## Declaration

```objectivec
kExtAudioFileError_CodecUnavailableInputNotConsumed
```

<a id="Discussion"></a>

## Discussion

For additional information, refer to [Audio Guidelines By App Type](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/AudioGuidelinesByAppType/AudioGuidelinesByAppType.html#//apple_ref/doc/uid/TP40007875-CH11) in [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875).

## See Also

### Result Codes

- [kExtAudioFileError_CodecUnavailableInputConsumed](kextaudiofileerror_codecunavailableinputconsumed.md): The [ExtAudioFileWrite](extaudiofilewrite%28______%29.md) function was interrupted and the last buffer that you provided was successfully written to disk.
- [kExtAudioFileError_InvalidProperty](kextaudiofileerror_invalidproperty.md)
- [kExtAudioFileError_InvalidPropertySize](kextaudiofileerror_invalidpropertysize.md)
- [kExtAudioFileError_NonPCMClientFormat](kextaudiofileerror_nonpcmclientformat.md)
- [kExtAudioFileError_InvalidChannelMap](kextaudiofileerror_invalidchannelmap.md): The number of channels does not match the specified format.
- [kExtAudioFileError_InvalidOperationOrder](kextaudiofileerror_invalidoperationorder.md)
- [kExtAudioFileError_InvalidDataFormat](kextaudiofileerror_invaliddataformat.md)
- [kExtAudioFileError_MaxPacketSizeUnknown](kextaudiofileerror_maxpacketsizeunknown.md)
- [kExtAudioFileError_InvalidSeek](kextaudiofileerror_invalidseek.md): An attempt to write, or an offset, is out of bounds.
- [kExtAudioFileError_AsyncWriteTooLarge](kextaudiofileerror_asyncwritetoolarge.md)
- [kExtAudioFileError_AsyncWriteBufferOverflow](kextaudiofileerror_asyncwritebufferoverflow.md): An asynchronous write operation could not be completed in time.
