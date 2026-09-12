> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuegetpropertysize(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuegetpropertysize(_:_:_:))

# AudioQueueGetPropertySize(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the size of the value of an audio queue property.

## Declaration

```swift
func AudioQueueGetPropertySize(_ inAQ: AudioQueueRef, _ inID: AudioQueuePropertyID, _ outDataSize: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue that has the property value whose size you want to get.
- `inID`: The ID of the property value whose size you want to get. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `outDataSize`: On output, the size of the requested property value.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty(\_:\_:\_:\_:)](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueSetProperty(\_:\_:\_:\_:)](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.
- [AudioQueueRemovePropertyListener(\_:\_:\_:\_:)](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.

# AudioQueueGetPropertySize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the size of the value of an audio queue property.

## Declaration

```objectivec
extern OSStatus AudioQueueGetPropertySize(AudioQueueRef inAQ, AudioQueuePropertyID inID, UInt32 *outDataSize);
```

## Parameters

- `inAQ`: The audio queue that has the property value whose size you want to get.
- `inID`: The ID of the property value whose size you want to get. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `outDataSize`: On output, the size of the requested property value.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueSetProperty](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.
- [AudioQueueRemovePropertyListener](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.
