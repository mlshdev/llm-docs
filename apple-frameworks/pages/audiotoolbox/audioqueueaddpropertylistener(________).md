> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueaddpropertylistener(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueaddpropertylistener(_:_:_:_:))

# AudioQueueAddPropertyListener(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Adds a property listener callback to an audio queue.

## Declaration

```swift
func AudioQueueAddPropertyListener(_ inAQ: AudioQueueRef, _ inID: AudioQueuePropertyID, _ inProc: AudioQueuePropertyListenerProc, _ inUserData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue that you want to assign a property listener callback to.
- `inID`: The ID of the property whose changes you want to respond to. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `inProc`: The callback to be invoked when the property value changes.
- `inUserData`: Custom data for the property listener callback.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Use this function to let your application respond to property value changes in an audio queue. For example, say your application’s user interface has a button that acts as a Play/Stop toggle switch. When an audio file has finished playing, the audio queue stops and the value of the  `kAudioQueueProperty_IsRunning` property changes from `true` to `false`. You can use a property listener callback to update the button text appropriately.

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty(\_:\_:\_:\_:)](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueSetProperty(\_:\_:\_:\_:)](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueGetPropertySize(\_:\_:\_:)](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueRemovePropertyListener(\_:\_:\_:\_:)](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.

# AudioQueueAddPropertyListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Adds a property listener callback to an audio queue.

## Declaration

```objectivec
extern OSStatus AudioQueueAddPropertyListener(AudioQueueRef inAQ, AudioQueuePropertyID inID, AudioQueuePropertyListenerProc inProc, void *inUserData);
```

## Parameters

- `inAQ`: The audio queue that you want to assign a property listener callback to.
- `inID`: The ID of the property whose changes you want to respond to. See [AudioQueuePropertyID](audioqueuepropertyid.md).
- `inProc`: The callback to be invoked when the property value changes.
- `inUserData`: Custom data for the property listener callback.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Use this function to let your application respond to property value changes in an audio queue. For example, say your application’s user interface has a button that acts as a Play/Stop toggle switch. When an audio file has finished playing, the audio queue stops and the value of the  `kAudioQueueProperty_IsRunning` property changes from `true` to `false`. You can use a property listener callback to update the button text appropriately.

## See Also

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueSetProperty](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueGetPropertySize](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueRemovePropertyListener](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.
