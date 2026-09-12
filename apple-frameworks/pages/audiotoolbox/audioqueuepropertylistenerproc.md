> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuepropertylistenerproc](https://developer.apple.com/documentation/audiotoolbox/audioqueuepropertylistenerproc)

# AudioQueuePropertyListenerProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when a specified audio queue property changes value.

## Declaration

```swift
typealias AudioQueuePropertyListenerProc = (UnsafeMutableRawPointer?, AudioQueueRef, AudioQueuePropertyID) -> Void
```

## Parameters

- `inUserData`: The custom data you’ve specified in the `inUserData` parameter of the [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md) function.
- `inAQ`: The recording or playback audio queue that invoked the callback.
- `inID`: The ID of the property whose value changes you want to observe.

<a id="Discussion"></a>

## Discussion

If you name your callback function `MyAudioQueuePropertyListenerProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

Install this callback in an audio queue by calling the [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md) function. For example, say you want your application to be notified, after you call the [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md) function with the `inImmedate` parameter set to `false`, that audio has finished playing. Perform these steps:

1. Define this property listener callback function to listen for changes to the [kAudioQueueProperty_IsRunning](kaudioqueueproperty_isrunning.md) property.
2. Install this callback, using the [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md) function, in the playback audio queue that you want to monitor.

## See Also

### Callbacks

- [AudioQueueInputCallback](audioqueueinputcallback.md): Called by the system when a recording audio queue has finished filling an audio queue buffer.
- [AudioQueueOutputCallback](audioqueueoutputcallback.md): Called by the system when an audio queue buffer is available for reuse.

# AudioQueuePropertyListenerProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when a specified audio queue property changes value.

## Declaration

```objectivec
typedef void (*)(void *, struct OpaqueAudioQueue *, unsigned int) AudioQueuePropertyListenerProc;
```

## Parameters

- `inUserData`: The custom data you’ve specified in the `inUserData` parameter of the [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md) function.
- `inAQ`: The recording or playback audio queue that invoked the callback.
- `inID`: The ID of the property whose value changes you want to observe.

<a id="Discussion"></a>

## Discussion

If you name your callback function `MyAudioQueuePropertyListenerProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

Install this callback in an audio queue by calling the [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md) function. For example, say you want your application to be notified, after you call the [AudioQueueStop](audioqueuestop%28____%29.md) function with the `inImmedate` parameter set to `false`, that audio has finished playing. Perform these steps:

1. Define this property listener callback function to listen for changes to the [kAudioQueueProperty_IsRunning](kaudioqueueproperty_isrunning.md) property.
2. Install this callback, using the [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md) function, in the playback audio queue that you want to monitor.

## See Also

### Callbacks

- [AudioQueueInputCallback](audioqueueinputcallback.md): Called by the system when a recording audio queue has finished filling an audio queue buffer.
- [AudioQueueOutputCallback](audioqueueoutputcallback.md): Called by the system when an audio queue buffer is available for reuse.
