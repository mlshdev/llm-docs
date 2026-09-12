> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuegetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuegetproperty(_:_:_:_:))

# AudioQueueGetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets an audio queue property value.

## Declaration

```swift
func AudioQueueGetProperty(_ inAQ: AudioQueueRef, _ inID: AudioQueuePropertyID, _ outData: UnsafeMutableRawPointer, _ ioDataSize: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue that you want to get a property value from.
- `inID`: The ID of the property whose value you want to get. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `outData`: On output, the desired property value.
- `ioDataSize`: On input, the maximum bytes of space the caller expects to receive. On output, the actual data size of the property value.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Before calling this function, you can use the [AudioQueueGetPropertySize(\_:\_:\_:)](audioqueuegetpropertysize%28______%29.md) function to determine the size, in bytes, of the value of a specified property. Some properties have values of a specific size, as described in [AudioQueuePropertyID](audioqueuepropertyid.md).

<a id="Special-Considerations"></a>

### Special Considerations

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueSetProperty(\_:\_:\_:\_:)](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueGetPropertySize(\_:\_:\_:)](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.
- [AudioQueueRemovePropertyListener(\_:\_:\_:\_:)](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.

# AudioQueueGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets an audio queue property value.

## Declaration

```objectivec
extern OSStatus AudioQueueGetProperty(AudioQueueRef inAQ, AudioQueuePropertyID inID, void *outData, UInt32 *ioDataSize);
```

## Parameters

- `inAQ`: The audio queue that you want to get a property value from.
- `inID`: The ID of the property whose value you want to get. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `outData`: On output, the desired property value.
- `ioDataSize`: On input, the maximum bytes of space the caller expects to receive. On output, the actual data size of the property value.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Before calling this function, you can use the [AudioQueueGetPropertySize](audioqueuegetpropertysize%28______%29.md) function to determine the size, in bytes, of the value of a specified property. Some properties have values of a specific size, as described in [AudioQueuePropertyID](audioqueuepropertyid.md).

<a id="Special-Considerations"></a>

### Special Considerations

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueSetProperty](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueGetPropertySize](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.
- [AudioQueueRemovePropertyListener](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.
