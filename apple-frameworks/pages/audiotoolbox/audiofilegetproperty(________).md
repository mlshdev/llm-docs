> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilegetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilegetproperty(_:_:_:_:))

# AudioFileGetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Gets the value of an audio file property.

## Declaration

```swift
func AudioFileGetProperty(_ inAudioFile: AudioFileID, _ inPropertyID: AudioFilePropertyID, _ ioDataSize: UnsafeMutablePointer<UInt32>, _ outPropertyData: UnsafeMutableRawPointer) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file you want to obtain a property value from.
- `inPropertyID`: The property whose value you want. See [Audio File Properties](1576499-audio-file-properties.md) for possible values.
- `ioDataSize`: On input, the size of the buffer passed in the `outPropertyData` parameter. On output, the number of bytes written to the buffer. Use the [AudioFileGetPropertyInfo(\_:\_:\_:\_:)](audiofilegetpropertyinfo%28________%29.md) function to obtain the size of the property value.
- `outPropertyData`: On output, the value of the property specified in the `inPropertyID` parameter.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Getting and Setting Audio File Properties

- [AudioFileGetPropertyInfo(\_:\_:\_:\_:)](audiofilegetpropertyinfo%28________%29.md): Gets information about an audio file property, including the size of the property value and whether the value is writable.
- [AudioFileSetProperty(\_:\_:\_:\_:)](audiofilesetproperty%28________%29.md): Sets the value of an audio file property

# AudioFileGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Gets the value of an audio file property.

## Declaration

```objectivec
extern OSStatus AudioFileGetProperty(AudioFileID inAudioFile, AudioFilePropertyID inPropertyID, UInt32 *ioDataSize, void *outPropertyData);
```

## Parameters

- `inAudioFile`: The audio file you want to obtain a property value from.
- `inPropertyID`: The property whose value you want. See [Audio File Properties](1576499-audio-file-properties.md) for possible values.
- `ioDataSize`: On input, the size of the buffer passed in the `outPropertyData` parameter. On output, the number of bytes written to the buffer. Use the [AudioFileGetPropertyInfo](audiofilegetpropertyinfo%28________%29.md) function to obtain the size of the property value.
- `outPropertyData`: On output, the value of the property specified in the `inPropertyID` parameter.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Getting and Setting Audio File Properties

- [AudioFileGetPropertyInfo](audiofilegetpropertyinfo%28________%29.md): Gets information about an audio file property, including the size of the property value and whether the value is writable.
- [AudioFileSetProperty](audiofilesetproperty%28________%29.md): Sets the value of an audio file property
