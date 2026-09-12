> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioqueueerr_invalidpropertysize](https://developer.apple.com/documentation/audiotoolbox/kaudioqueueerr_invalidpropertysize)

# kAudioQueueErr_InvalidPropertySize (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The size of the specified property is invalid.

## Declaration

```swift
var kAudioQueueErr_InvalidPropertySize: OSStatus { get }
```

## See Also

### Result Codes

- [kAudioQueueErr_InvalidBuffer](kaudioqueueerr_invalidbuffer.md): The specified audio queue buffer does not belong to the specified audio queue.
- [kAudioQueueErr_BufferEmpty](kaudioqueueerr_bufferempty.md): The audio queue buffer is empty (that is, the `mAudioDataByteSize` field = `0`).
- [kAudioQueueErr_DisposalPending](kaudioqueueerr_disposalpending.md): The function cannot act on the audio queue because it is being asynchronously disposed of.
- [kAudioQueueErr_InvalidProperty](kaudioqueueerr_invalidproperty.md): The specified property ID is invalid.
- [kAudioQueueErr_InvalidParameter](kaudioqueueerr_invalidparameter.md): The specified parameter ID is invalid.
- [kAudioQueueErr_CannotStart](kaudioqueueerr_cannotstart.md): The audio queue has encountered a problem and cannot start.
- [kAudioQueueErr_InvalidDevice](kaudioqueueerr_invaliddevice.md): The specified audio hardware device could not be located.
- [kAudioQueueErr_BufferInQueue](kaudioqueueerr_bufferinqueue.md): The audio queue buffer cannot be disposed of when it is enqueued.
- [kAudioQueueErr_InvalidRunState](kaudioqueueerr_invalidrunstate.md): The queue is running but the function can only operate on the queue when it is stopped, or vice versa.
- [kAudioQueueErr_InvalidQueueType](kaudioqueueerr_invalidqueuetype.md): The queue is an input queue but the function can only operate on an output queue, or vice versa.
- [kAudioQueueErr_Permissions](kaudioqueueerr_permissions.md): You do not have the required permissions to call the function.
- [kAudioQueueErr_InvalidPropertyValue](kaudioqueueerr_invalidpropertyvalue.md): The property value used is not valid.
- [kAudioQueueErr_PrimeTimedOut](kaudioqueueerr_primetimedout.md): During a call to the [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md) function, the audio queue’s audio converter failed to convert the requested number of sample frames.
- [kAudioQueueErr_CodecNotFound](kaudioqueueerr_codecnotfound.md): The requested codec was not found.
- [kAudioQueueErr_InvalidCodecAccess](kaudioqueueerr_invalidcodecaccess.md): The codec could not be accessed.

# kAudioQueueErr_InvalidPropertySize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The size of the specified property is invalid.

## Declaration

```objectivec
kAudioQueueErr_InvalidPropertySize
```

## See Also

### Result Codes

- [kAudioQueueErr_InvalidBuffer](kaudioqueueerr_invalidbuffer.md): The specified audio queue buffer does not belong to the specified audio queue.
- [kAudioQueueErr_BufferEmpty](kaudioqueueerr_bufferempty.md): The audio queue buffer is empty (that is, the `mAudioDataByteSize` field = `0`).
- [kAudioQueueErr_DisposalPending](kaudioqueueerr_disposalpending.md): The function cannot act on the audio queue because it is being asynchronously disposed of.
- [kAudioQueueErr_InvalidProperty](kaudioqueueerr_invalidproperty.md): The specified property ID is invalid.
- [kAudioQueueErr_InvalidParameter](kaudioqueueerr_invalidparameter.md): The specified parameter ID is invalid.
- [kAudioQueueErr_CannotStart](kaudioqueueerr_cannotstart.md): The audio queue has encountered a problem and cannot start.
- [kAudioQueueErr_InvalidDevice](kaudioqueueerr_invaliddevice.md): The specified audio hardware device could not be located.
- [kAudioQueueErr_BufferInQueue](kaudioqueueerr_bufferinqueue.md): The audio queue buffer cannot be disposed of when it is enqueued.
- [kAudioQueueErr_InvalidRunState](kaudioqueueerr_invalidrunstate.md): The queue is running but the function can only operate on the queue when it is stopped, or vice versa.
- [kAudioQueueErr_InvalidQueueType](kaudioqueueerr_invalidqueuetype.md): The queue is an input queue but the function can only operate on an output queue, or vice versa.
- [kAudioQueueErr_Permissions](kaudioqueueerr_permissions.md): You do not have the required permissions to call the function.
- [kAudioQueueErr_InvalidPropertyValue](kaudioqueueerr_invalidpropertyvalue.md): The property value used is not valid.
- [kAudioQueueErr_PrimeTimedOut](kaudioqueueerr_primetimedout.md): During a call to the [AudioQueuePrime](audioqueueprime%28______%29.md) function, the audio queue’s audio converter failed to convert the requested number of sample frames.
- [kAudioQueueErr_CodecNotFound](kaudioqueueerr_codecnotfound.md): The requested codec was not found.
- [kAudioQueueErr_InvalidCodecAccess](kaudioqueueerr_invalidcodecaccess.md): The codec could not be accessed.
