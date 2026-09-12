> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconvertergetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioconvertergetproperty(_:_:_:_:))

# AudioConverterGetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Gets an audio converter property value.

## Declaration

```swift
func AudioConverterGetProperty(_ inAudioConverter: AudioConverterRef, _ inPropertyID: AudioConverterPropertyID, _ ioPropertyDataSize: UnsafeMutablePointer<UInt32>, _ outPropertyData: UnsafeMutableRawPointer) -> OSStatus
```

## Parameters

- `inAudioConverter`: The audio converter to get a property value from.
- `inPropertyID`: The property whose value you want.
- `ioPropertyDataSize`: On input, the size of the memory pointed to by the `outPropertyData` parameter. On output, the size of the property value.
- `outPropertyData`: On output, the property value you wanted to get.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Configuring Audio Converter Properties

- [AudioConverterGetPropertyInfo(\_:\_:\_:\_:)](audioconvertergetpropertyinfo%28________%29.md): Gets information about an audio converter property.
- [AudioConverterSetProperty(\_:\_:\_:\_:)](audioconvertersetproperty%28________%29.md): Sets the value of an audio converter object property.

# AudioConverterGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Gets an audio converter property value.

## Declaration

```objectivec
extern OSStatus AudioConverterGetProperty(AudioConverterRef inAudioConverter, AudioConverterPropertyID inPropertyID, UInt32 *ioPropertyDataSize, void *outPropertyData);
```

## Parameters

- `inAudioConverter`: The audio converter to get a property value from.
- `inPropertyID`: The property whose value you want.
- `ioPropertyDataSize`: On input, the size of the memory pointed to by the `outPropertyData` parameter. On output, the size of the property value.
- `outPropertyData`: On output, the property value you wanted to get.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Configuring Audio Converter Properties

- [AudioConverterGetPropertyInfo](audioconvertergetpropertyinfo%28________%29.md): Gets information about an audio converter property.
- [AudioConverterSetProperty](audioconvertersetproperty%28________%29.md): Sets the value of an audio converter object property.
