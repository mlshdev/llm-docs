> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreamgetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilestreamgetproperty(_:_:_:_:))

# AudioFileStreamGetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retrieves the value of the specified property.

## Declaration

```swift
func AudioFileStreamGetProperty(_ inAudioFileStream: AudioFileStreamID, _ inPropertyID: AudioFileStreamPropertyID, _ ioPropertyDataSize: UnsafeMutablePointer<UInt32>, _ outPropertyData: UnsafeMutableRawPointer) -> OSStatus
```

## Parameters

- `inAudioFileStream`: The ID of the parser from which you wish to obtain data. The parser ID is returned by the [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md) function.
- `inPropertyID`: A four-character ID indicating the audio file stream property whose value you want to read. See [Audio File Stream Properties](1391506-audio-file-stream-properties.md) for possible values.
- `ioPropertyDataSize`: On input, the size of the buffer in the `outPropertyData` parameter. Call the [AudioFileStreamGetPropertyInfo(\_:\_:\_:\_:)](audiofilestreamgetpropertyinfo%28________%29.md) function to obtain the size of the property value. On output, the number of bytes of the property value returned.
- `outPropertyData`: On output, the value of the specified property.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Related Documentation

- [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

### Working with Data Stream Property Information

- [AudioFileStreamGetPropertyInfo(\_:\_:\_:\_:)](audiofilestreamgetpropertyinfo%28________%29.md): Retrieves information about a property value.
- [AudioFileStreamSetProperty(\_:\_:\_:\_:)](audiofilestreamsetproperty%28________%29.md): Sets the value of the specified property.

# AudioFileStreamGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retrieves the value of the specified property.

## Declaration

```objectivec
extern OSStatus AudioFileStreamGetProperty(AudioFileStreamID inAudioFileStream, AudioFileStreamPropertyID inPropertyID, UInt32 *ioPropertyDataSize, void *outPropertyData);
```

## Parameters

- `inAudioFileStream`: The ID of the parser from which you wish to obtain data. The parser ID is returned by the [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md) function.
- `inPropertyID`: A four-character ID indicating the audio file stream property whose value you want to read. See [Audio File Stream Properties](1391506-audio-file-stream-properties.md) for possible values.
- `ioPropertyDataSize`: On input, the size of the buffer in the `outPropertyData` parameter. Call the [AudioFileStreamGetPropertyInfo](audiofilestreamgetpropertyinfo%28________%29.md) function to obtain the size of the property value. On output, the number of bytes of the property value returned.
- `outPropertyData`: On output, the value of the specified property.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Related Documentation

- [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

### Working with Data Stream Property Information

- [AudioFileStreamGetPropertyInfo](audiofilestreamgetpropertyinfo%28________%29.md): Retrieves information about a property value.
- [AudioFileStreamSetProperty](audiofilestreamsetproperty%28________%29.md): Sets the value of the specified property.
