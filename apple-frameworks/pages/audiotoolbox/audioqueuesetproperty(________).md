> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuesetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuesetproperty(_:_:_:_:))

# AudioQueueSetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets an audio queue property value.

## Declaration

```swift
func AudioQueueSetProperty(_ inAQ: AudioQueueRef, _ inID: AudioQueuePropertyID, _ inData: UnsafeRawPointer, _ inDataSize: UInt32) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue that you want to set a property value on.
- `inID`: The ID of the property whose value you want to set. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `inData`: The property value to set.
- `inDataSize`: The size of the property data.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty(\_:\_:\_:\_:)](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueGetPropertySize(\_:\_:\_:)](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.
- [AudioQueueRemovePropertyListener(\_:\_:\_:\_:)](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.

# AudioQueueSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets an audio queue property value.

## Declaration

```objectivec
extern OSStatus AudioQueueSetProperty(AudioQueueRef inAQ, AudioQueuePropertyID inID, const void *inData, UInt32 inDataSize);
```

## Parameters

- `inAQ`: The audio queue that you want to set a property value on.
- `inID`: The ID of the property whose value you want to set. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `inData`: The property value to set.
- `inDataSize`: The size of the property data.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueGetPropertySize](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.
- [AudioQueueRemovePropertyListener](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.
