> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconverterreset(_:)](https://developer.apple.com/documentation/audiotoolbox/audioconverterreset(_:))

# AudioConverterReset(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Resets an audio converter object, clearing and flushing its buffers.

## Declaration

```swift
func AudioConverterReset(_ inAudioConverter: AudioConverterRef) -> OSStatus
```

## Parameters

- `inAudioConverter`: The audio converter object to reset.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

Call this function after a discontinuity in the source audio stream being provided to the converter.

## See Also

### Managing Audio Converter Objects

- [AudioConverterNew(\_:\_:\_:)](audioconverternew%28______%29.md): Creates a new audio converter object based on specified audio formats.
- [AudioConverterNewSpecific(\_:\_:\_:\_:\_:)](audioconverternewspecific%28__________%29.md): Creates a new audio converter object using a specified codec.
- [AudioConverterDispose(\_:)](audioconverterdispose%28__%29.md): Disposes of an audio converter object.

# AudioConverterReset (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Resets an audio converter object, clearing and flushing its buffers.

## Declaration

```objectivec
extern OSStatus AudioConverterReset(AudioConverterRef inAudioConverter);
```

## Parameters

- `inAudioConverter`: The audio converter object to reset.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

Call this function after a discontinuity in the source audio stream being provided to the converter.

## See Also

### Managing Audio Converter Objects

- [AudioConverterNew](audioconverternew%28______%29.md): Creates a new audio converter object based on specified audio formats.
- [AudioConverterNewSpecific](audioconverternewspecific%28__________%29.md): Creates a new audio converter object using a specified codec.
- [AudioConverterDispose](audioconverterdispose%28__%29.md): Disposes of an audio converter object.
