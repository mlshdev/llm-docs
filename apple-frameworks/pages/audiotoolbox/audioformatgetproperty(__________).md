> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioformatgetproperty(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioformatgetproperty(_:_:_:_:_:))

# AudioFormatGetProperty(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Gets the value of an audio format property.

## Declaration

```swift
func AudioFormatGetProperty(_ inPropertyID: AudioFormatPropertyID, _ inSpecifierSize: UInt32, _ inSpecifier: UnsafeRawPointer?, _ ioPropertyDataSize: UnsafeMutablePointer<UInt32>?, _ outPropertyData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inPropertyID`: An [AudioFormatPropertyID](audioformatpropertyid.md) constant. For a list of these constants, see [Audio Format Property Identifiers](1577853-audio-format-property-identifier.md).
- `inSpecifierSize`: The size of the specifier data.
- `inSpecifier`: A buffer of data used as an input argument for querying some of the properties.
- `ioPropertyDataSize`: On input, the size of the `outPropertyData` buffer. On output, the number of bytes written to the buffer.
- `outPropertyData`: The buffer to write the property data to. If the `outPropertyData` parameter is `NULL` and `ioPropertyDataSize` is not `NULL`, the amount that would have been written is reported.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Audio Format Services Functions

- [AudioFormatGetPropertyInfo(\_:\_:\_:\_:)](audioformatgetpropertyinfo%28________%29.md): Gets information about an audio format property.

# AudioFormatGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Gets the value of an audio format property.

## Declaration

```objectivec
extern OSStatus AudioFormatGetProperty(AudioFormatPropertyID inPropertyID, UInt32 inSpecifierSize, const void *inSpecifier, UInt32 *ioPropertyDataSize, void *outPropertyData);
```

## Parameters

- `inPropertyID`: An [AudioFormatPropertyID](audioformatpropertyid.md) constant. For a list of these constants, see [Audio Format Property Identifiers](1577853-audio-format-property-identifier.md).
- `inSpecifierSize`: The size of the specifier data.
- `inSpecifier`: A buffer of data used as an input argument for querying some of the properties.
- `ioPropertyDataSize`: On input, the size of the `outPropertyData` buffer. On output, the number of bytes written to the buffer.
- `outPropertyData`: The buffer to write the property data to. If the `outPropertyData` parameter is `NULL` and `ioPropertyDataSize` is not `NULL`, the amount that would have been written is reported.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Audio Format Services Functions

- [AudioFormatGetPropertyInfo](audioformatgetpropertyinfo%28________%29.md): Gets information about an audio format property.
