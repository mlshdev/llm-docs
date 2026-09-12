> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconverterdispose(_:)](https://developer.apple.com/documentation/audiotoolbox/audioconverterdispose(_:))

# AudioConverterDispose(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Disposes of an audio converter object.

## Declaration

```swift
func AudioConverterDispose(_ inAudioConverter: AudioConverterRef) -> OSStatus
```

## Parameters

- `inAudioConverter`: The audio converter object to dispose of.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

## See Also

### Managing Audio Converter Objects

- [AudioConverterNew(\_:\_:\_:)](audioconverternew%28______%29.md): Creates a new audio converter object based on specified audio formats.
- [AudioConverterNewSpecific(\_:\_:\_:\_:\_:)](audioconverternewspecific%28__________%29.md): Creates a new audio converter object using a specified codec.
- [AudioConverterReset(\_:)](audioconverterreset%28__%29.md): Resets an audio converter object, clearing and flushing its buffers.

# AudioConverterDispose (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Disposes of an audio converter object.

## Declaration

```objectivec
extern OSStatus AudioConverterDispose(AudioConverterRef inAudioConverter);
```

## Parameters

- `inAudioConverter`: The audio converter object to dispose of.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

## See Also

### Managing Audio Converter Objects

- [AudioConverterNew](audioconverternew%28______%29.md): Creates a new audio converter object based on specified audio formats.
- [AudioConverterNewSpecific](audioconverternewspecific%28__________%29.md): Creates a new audio converter object using a specified codec.
- [AudioConverterReset](audioconverterreset%28__%29.md): Resets an audio converter object, clearing and flushing its buffers.
