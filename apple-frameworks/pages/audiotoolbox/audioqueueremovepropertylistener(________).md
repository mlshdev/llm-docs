> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueremovepropertylistener(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueremovepropertylistener(_:_:_:_:))

# AudioQueueRemovePropertyListener(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Removes a property listener callback from an audio queue.

## Declaration

```swift
func AudioQueueRemovePropertyListener(_ inAQ: AudioQueueRef, _ inID: AudioQueuePropertyID, _ inProc: AudioQueuePropertyListenerProc, _ inUserData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue that you want to remove a property listener callback from.
- `inID`: The ID of the property whose changes you no longer want to respond to. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `inProc`: The callback to be removed.
- `inUserData`: The same custom data for the property listener callback that you passed when calling [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md).

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty(\_:\_:\_:\_:)](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueSetProperty(\_:\_:\_:\_:)](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueGetPropertySize(\_:\_:\_:)](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.

# AudioQueueRemovePropertyListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Removes a property listener callback from an audio queue.

## Declaration

```objectivec
extern OSStatus AudioQueueRemovePropertyListener(AudioQueueRef inAQ, AudioQueuePropertyID inID, AudioQueuePropertyListenerProc inProc, void *inUserData);
```

## Parameters

- `inAQ`: The audio queue that you want to remove a property listener callback from.
- `inID`: The ID of the property whose changes you no longer want to respond to. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `inProc`: The callback to be removed.
- `inUserData`: The same custom data for the property listener callback that you passed when calling [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md).

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueSetProperty](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueGetPropertySize](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.
