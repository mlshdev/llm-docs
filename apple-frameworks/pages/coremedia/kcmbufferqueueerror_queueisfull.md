> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmbufferqueueerror_queueisfull](https://developer.apple.com/documentation/coremedia/kcmbufferqueueerror_queueisfull)

# kCMBufferQueueError_QueueIsFull (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

You attempted to enqueue a buffer on a queue that’s full.

## Declaration

```swift
var kCMBufferQueueError_QueueIsFull: OSStatus { get }
```

## See Also

### Error Codes

- [kCMBufferQueueError_AllocationFailed](kcmbufferqueueerror_allocationfailed.md): The system failed to allocate memory.
- [kCMBufferQueueError_RequiredParameterMissing](kcmbufferqueueerror_requiredparametermissing.md): You failed to provide a valid value for a required parameter.
- [kCMBufferQueueError_InvalidCMBufferCallbacksStruct](kcmbufferqueueerror_invalidcmbuffercallbacksstruct.md): The format of a callbacks structure isn’t correct.
- [kCMBufferQueueError_EnqueueAfterEndOfData](kcmbufferqueueerror_enqueueafterendofdata.md): You attempted to enqueue a buffer on a queue that disallows it.
- [kCMBufferQueueError_BadTriggerDuration](kcmbufferqueueerror_badtriggerduration.md): You specified an invalid trigger duration.
- [kCMBufferQueueError_CannotModifyQueueFromTriggerCallback](kcmbufferqueueerror_cannotmodifyqueuefromtriggercallback.md): A trigger callback attempted to modify a queue.
- [kCMBufferQueueError_InvalidTriggerCondition](kcmbufferqueueerror_invalidtriggercondition.md): You specified an invalid trigger condition.
- [kCMBufferQueueError_InvalidTriggerToken](kcmbufferqueueerror_invalidtriggertoken.md): You specified a trigger token that isn’t a trigger currently associated with this queue.
- [kCMBufferQueueError_InvalidBuffer](kcmbufferqueueerror_invalidbuffer.md): A buffer validation callback rejected the buffer.

# kCMBufferQueueError_QueueIsFull (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

You attempted to enqueue a buffer on a queue that’s full.

## Declaration

```objectivec
kCMBufferQueueError_QueueIsFull
```

## See Also

### Error Codes

- [kCMBufferQueueError_AllocationFailed](kcmbufferqueueerror_allocationfailed.md): The system failed to allocate memory.
- [kCMBufferQueueError_RequiredParameterMissing](kcmbufferqueueerror_requiredparametermissing.md): You failed to provide a valid value for a required parameter.
- [kCMBufferQueueError_InvalidCMBufferCallbacksStruct](kcmbufferqueueerror_invalidcmbuffercallbacksstruct.md): The format of a callbacks structure isn’t correct.
- [kCMBufferQueueError_EnqueueAfterEndOfData](kcmbufferqueueerror_enqueueafterendofdata.md): You attempted to enqueue a buffer on a queue that disallows it.
- [kCMBufferQueueError_BadTriggerDuration](kcmbufferqueueerror_badtriggerduration.md): You specified an invalid trigger duration.
- [kCMBufferQueueError_CannotModifyQueueFromTriggerCallback](kcmbufferqueueerror_cannotmodifyqueuefromtriggercallback.md): A trigger callback attempted to modify a queue.
- [kCMBufferQueueError_InvalidTriggerCondition](kcmbufferqueueerror_invalidtriggercondition.md): You specified an invalid trigger condition.
- [kCMBufferQueueError_InvalidTriggerToken](kcmbufferqueueerror_invalidtriggertoken.md): You specified a trigger token that isn’t a trigger currently associated with this queue.
- [kCMBufferQueueError_InvalidBuffer](kcmbufferqueueerror_invalidbuffer.md): A buffer validation callback rejected the buffer.
