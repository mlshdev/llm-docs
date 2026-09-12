> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue-api](https://developer.apple.com/documentation/coremedia/cmbufferqueue-api)

# CMBufferQueue (Swift)

**Framework:** Core Media  
**Kind:** API Collection

A queue of timed buffers.

<a id="overview"></a>

## Overview

Buffer queues are Core Foundation objects that implement a queue of timed buffers. The buffers can be of any Core Foundation-based type (`CFTypeRef`), but must have a concept of duration. When you create a buffer queue, you pass a set of callbacks, one of which is a required callback that returns the duration of the Core Foundation-based buffer object. The system invokes these callbacks synchronously on the thread that called the API.

Buffer queues support reading and writing data from different threads in a producer-consumer model. While this model typically has two threads (a producer and a consumer), a buffer queue can service any number of threads to enqueue and dequeue buffers. The system makes all operations atomic by use of a single mutex (one mutex per created queue object).

By default, a `CMBufferQueue` is a FIFO queue, but you can change that order by providing a comparison callback. For example, you might create a buffer queue where you enqueue buffers in decode order, and dequeue them in presentation order, by providing a comparison callback that sorts by presentation timestamp.

A buffer queue retains its enqueued buffers. When you call [CMBufferQueueDequeue(\_:)](cmbufferqueuedequeue%28__%29.md), the system retains the buffer on behalf of the app, and the queue releases it. The retain count remains the same, but the app takes ownership of the buffer.

If you provide a buffer-readiness callback, an instance of `CMBufferQueue` can check for buffer readiness when calling the [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md) function. If you don’t provide that callback, the system assumes all buffers are ready, and there’s no difference between [CMBufferQueueDequeue(\_:)](cmbufferqueuedequeue%28__%29.md) and [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md).

Buffer queues also provide the [CMBufferQueueIsEmpty(\_:)](cmbufferqueueisempty%28__%29.md) and [CMBufferQueueTestTrigger(\_:triggerToken:)](cmbufferqueuetesttrigger%28__triggertoken_%29.md) functions that, with the help of optional callbacks, get decode and presentation timestamps from a buffer. The system returns a value of [invalid](cmtime/invalid.md) if you don’t provide these callbacks.

You can set an end-of-data marker on a buffer queue, which causes further enqueues to fail. After the queue has dequeued all buffers, the queue is permanently empty (“at end of data”) until you call the [CMBufferQueueReset(\_:)](cmbufferqueuereset%28__%29.md)function. Reset empties the queue and undoes the end-of-data marking.

You can interrogate the current status of a buffer queue. For example, you can test for emptiness ([CMBufferQueueCreate(allocator:capacity:callbacks:queueOut:)](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md)), current queue duration (`Inspecting Buffer Queues`), and end-of-data status ([CMBufferQueueContainsEndOfData(\_:)](cmbufferqueuecontainsendofdata%28__%29.md) and [CMBufferQueueIsAtEndOfData(\_:)](cmbufferqueueisatendofdata%28__%29.md)).

You can install trigger callbacks by calling the [CMBufferQueueInstallTriggerHandler(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandler%28__________%29.md) function to get notifications of various queue state transitions, such as when the duration becomes less than a second. You can inspect a buffer queue during trigger callback, but you can’t modify it. You can test trigger conditions explicitly as well. You can invoke trigger callbacks from any buffer queue API that modifies the total duration of the queue, such as enqueuing, dequeuing, or resetting the queue. The system invokes trigger callbacks synchronously on the thread that called the API.

You can’t modify the state of the queue from within a trigger callback. The operation fails, returning a [kCMBufferQueueError_CannotModifyQueueFromTriggerCallback](kcmbufferqueueerror_cannotmodifyqueuefromtriggercallback.md) error. Attempting to enqueue a buffer when the queue is full, or dequeue from an empty queue, immediately returns an error (or a `NULL` buffer).

Install triggers to observe the queue’s fullness rather than repeatedly polling the queue to get this state.

## Topics

### Creating a Queue

- [CMBufferQueueCreateWithHandlers(\_:\_:\_:\_:)](cmbufferqueuecreatewithhandlers%28________%29.md): Creates a buffer queue with handlers to inspect buffers.
- [CMBufferQueueCreate(allocator:capacity:callbacks:queueOut:)](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md): Creates a buffer queue with callbacks to inspect buffers.
- [CMBufferCallbacks](cmbuffercallbacks.md): A structure that stores the callbacks that perform buffer operations.

### Managing a Queue

- [CMBufferQueueEnqueue(\_:buffer:)](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer(\_:callback:refcon:)](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeue(\_:)](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData(\_:)](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset(\_:)](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback(\_:callback:refcon:)](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger(\_:triggerToken:)](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueTestTrigger(\_:triggerToken:)](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger(\_:callback:refcon:condition:time:triggerTokenOut:)](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold(\_:callback:refcon:condition:threshold:triggerTokenOut:)](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.

### Inspecting Duration and Timing

- [CMBufferQueueGetDuration(\_:)](cmbufferqueuegetduration%28__%29.md): Gets the duration of a buffer queue.
- [CMBufferQueueGetMinDecodeTimeStamp(\_:)](cmbufferqueuegetmindecodetimestamp%28__%29.md): Gets the earliest decode timestamp of a buffer queue.
- [CMBufferQueueGetFirstDecodeTimeStamp(\_:)](cmbufferqueuegetfirstdecodetimestamp%28__%29.md): Gets the decode timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetMinPresentationTimeStamp(\_:)](cmbufferqueuegetminpresentationtimestamp%28__%29.md): Gets the earliest presentation timestamp of a buffer queue.
- [CMBufferQueueGetFirstPresentationTimeStamp(\_:)](cmbufferqueuegetfirstpresentationtimestamp%28__%29.md): Gets the presentation timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetEndPresentationTimeStamp(\_:)](cmbufferqueuegetendpresentationtimestamp%28__%29.md): Gets the greatest end presentation timestamp of a buffer queue.
- [CMBufferQueueGetMaxPresentationTimeStamp(\_:)](cmbufferqueuegetmaxpresentationtimestamp%28__%29.md): Gets the greatest presentation timestamp of a buffer queue.
- [CMBufferQueueGetCallbacksForSampleBuffersSortedByOutputPTS()](cmbufferqueuegetcallbacksforsamplebufferssortedbyoutputpts%28%29.md): Returns a pointer to a structure that contains callbacks to sort sample buffers by output presentation timestamp.
- [CMBufferQueueGetCallbacksForUnsortedSampleBuffers()](cmbufferqueuegetcallbacksforunsortedsamplebuffers%28%29.md): Returns a pointer to a callback structure for unsorted sample buffers.

### Inspecting a Queue

- [CMBufferQueueIsEmpty(\_:)](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount(\_:)](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize(\_:)](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead(\_:)](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData(\_:)](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData(\_:)](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.

### Validating a Queue

- [CMBufferQueueSetValidationHandler(\_:\_:)](cmbufferqueuesetvalidationhandler%28____%29.md): A validation handler for the queue to call before enqueuing buffers.
- [CMBufferValidationHandler](cmbuffervalidationhandler.md): A type alias for a handler that tests whether a buffer is in a valid state to add to a queue.
- [CMBufferQueueSetValidationCallback(\_:callback:refcon:)](cmbufferqueuesetvalidationcallback%28__callback_refcon_%29.md): A validation callback for the queue to call before enqueuing buffers.
- [CMBufferValidationCallback](cmbuffervalidationcallback.md): A type alias for a callback that tests whether a buffer is in a valid state to add to a queue.

### Accessing the Type Identifier

- [CMBufferQueueGetTypeID()](cmbufferqueuegettypeid%28%29.md): Returns the type identifier of buffer queue objects.

### Data Types

- [CMBufferQueue](cmbufferqueue.md): A reference to a buffer queue instance.

### Error Codes

- [Buffer Queue Error Codes](buffer-queue-errors.md): Error codes that framework operations produce.

## See Also

### Queues

- [CMSimpleQueue](cmsimplequeue-api.md): A simple, lockless FIFO queue of elements.
- [CMMemoryPool](cmmemorypool-api.md): An object that optimizes memory allocation when working with large blocks of memory.

# CMBufferQueue (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

A queue of timed buffers.

<a id="overview"></a>

## Overview

Buffer queues are Core Foundation objects that implement a queue of timed buffers. The buffers can be of any Core Foundation-based type (`CFTypeRef`), but must have a concept of duration. When you create a buffer queue, you pass a set of callbacks, one of which is a required callback that returns the duration of the Core Foundation-based buffer object. The system invokes these callbacks synchronously on the thread that called the API.

Buffer queues support reading and writing data from different threads in a producer-consumer model. While this model typically has two threads (a producer and a consumer), a buffer queue can service any number of threads to enqueue and dequeue buffers. The system makes all operations atomic by use of a single mutex (one mutex per created queue object).

By default, a `CMBufferQueue` is a FIFO queue, but you can change that order by providing a comparison callback. For example, you might create a buffer queue where you enqueue buffers in decode order, and dequeue them in presentation order, by providing a comparison callback that sorts by presentation timestamp.

A buffer queue retains its enqueued buffers. When you call [CMBufferQueueDequeueAndRetain](cmbufferqueuedequeue%28__%29.md), the system retains the buffer on behalf of the app, and the queue releases it. The retain count remains the same, but the app takes ownership of the buffer.

If you provide a buffer-readiness callback, an instance of `CMBufferQueue` can check for buffer readiness when calling the [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md) function. If you don’t provide that callback, the system assumes all buffers are ready, and there’s no difference between [CMBufferQueueDequeueAndRetain](cmbufferqueuedequeue%28__%29.md) and [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md).

Buffer queues also provide the [CMBufferQueueIsEmpty](cmbufferqueueisempty%28__%29.md) and [CMBufferQueueTestTrigger](cmbufferqueuetesttrigger%28__triggertoken_%29.md) functions that, with the help of optional callbacks, get decode and presentation timestamps from a buffer. The system returns a value of [kCMTimeInvalid](cmtime/invalid.md) if you don’t provide these callbacks.

You can set an end-of-data marker on a buffer queue, which causes further enqueues to fail. After the queue has dequeued all buffers, the queue is permanently empty (“at end of data”) until you call the [CMBufferQueueReset](cmbufferqueuereset%28__%29.md)function. Reset empties the queue and undoes the end-of-data marking.

You can interrogate the current status of a buffer queue. For example, you can test for emptiness ([CMBufferQueueCreate](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md)), current queue duration (`Inspecting Buffer Queues`), and end-of-data status ([CMBufferQueueContainsEndOfData](cmbufferqueuecontainsendofdata%28__%29.md) and [CMBufferQueueIsAtEndOfData](cmbufferqueueisatendofdata%28__%29.md)).

You can install trigger callbacks by calling the [CMBufferQueueInstallTriggerHandler](cmbufferqueueinstalltriggerhandler%28__________%29.md) function to get notifications of various queue state transitions, such as when the duration becomes less than a second. You can inspect a buffer queue during trigger callback, but you can’t modify it. You can test trigger conditions explicitly as well. You can invoke trigger callbacks from any buffer queue API that modifies the total duration of the queue, such as enqueuing, dequeuing, or resetting the queue. The system invokes trigger callbacks synchronously on the thread that called the API.

You can’t modify the state of the queue from within a trigger callback. The operation fails, returning a [kCMBufferQueueError_CannotModifyQueueFromTriggerCallback](kcmbufferqueueerror_cannotmodifyqueuefromtriggercallback.md) error. Attempting to enqueue a buffer when the queue is full, or dequeue from an empty queue, immediately returns an error (or a `NULL` buffer).

Install triggers to observe the queue’s fullness rather than repeatedly polling the queue to get this state.

## Topics

### Creating a Queue

- [CMBufferQueueCreateWithHandlers](cmbufferqueuecreatewithhandlers%28________%29.md): Creates a buffer queue with handlers to inspect buffers.
- [CMBufferHandlers](cmbufferhandlers.md): A structure that stores the handlers that perform buffer operations.
- [CMBufferQueueCreate](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md): Creates a buffer queue with callbacks to inspect buffers.
- [CMBufferCallbacks](cmbuffercallbacks.md): A structure that stores the callbacks that perform buffer operations.

### Managing a Queue

- [CMBufferQueueEnqueue](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeueAndRetain](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueTestTrigger](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.

### Inspecting Duration and Timing

- [CMBufferQueueGetDuration](cmbufferqueuegetduration%28__%29.md): Gets the duration of a buffer queue.
- [CMBufferQueueGetMinDecodeTimeStamp](cmbufferqueuegetmindecodetimestamp%28__%29.md): Gets the earliest decode timestamp of a buffer queue.
- [CMBufferQueueGetFirstDecodeTimeStamp](cmbufferqueuegetfirstdecodetimestamp%28__%29.md): Gets the decode timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetMinPresentationTimeStamp](cmbufferqueuegetminpresentationtimestamp%28__%29.md): Gets the earliest presentation timestamp of a buffer queue.
- [CMBufferQueueGetFirstPresentationTimeStamp](cmbufferqueuegetfirstpresentationtimestamp%28__%29.md): Gets the presentation timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetEndPresentationTimeStamp](cmbufferqueuegetendpresentationtimestamp%28__%29.md): Gets the greatest end presentation timestamp of a buffer queue.
- [CMBufferQueueGetMaxPresentationTimeStamp](cmbufferqueuegetmaxpresentationtimestamp%28__%29.md): Gets the greatest presentation timestamp of a buffer queue.
- [CMBufferQueueGetCallbacksForSampleBuffersSortedByOutputPTS](cmbufferqueuegetcallbacksforsamplebufferssortedbyoutputpts%28%29.md): Returns a pointer to a structure that contains callbacks to sort sample buffers by output presentation timestamp.
- [CMBufferQueueGetCallbacksForUnsortedSampleBuffers](cmbufferqueuegetcallbacksforunsortedsamplebuffers%28%29.md): Returns a pointer to a callback structure for unsorted sample buffers.

### Inspecting a Queue

- [CMBufferQueueIsEmpty](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.

### Validating a Queue

- [CMBufferQueueSetValidationHandler](cmbufferqueuesetvalidationhandler%28____%29.md): A validation handler for the queue to call before enqueuing buffers.
- [CMBufferValidationHandler](cmbuffervalidationhandler.md): A type alias for a handler that tests whether a buffer is in a valid state to add to a queue.
- [CMBufferQueueSetValidationCallback](cmbufferqueuesetvalidationcallback%28__callback_refcon_%29.md): A validation callback for the queue to call before enqueuing buffers.
- [CMBufferValidationCallback](cmbuffervalidationcallback.md): A type alias for a callback that tests whether a buffer is in a valid state to add to a queue.

### Accessing the Type Identifier

- [CMBufferQueueGetTypeID](cmbufferqueuegettypeid%28%29.md): Returns the type identifier of buffer queue objects.

### Data Types

- [CMBufferQueueRef](cmbufferqueue.md): A reference to a buffer queue instance.

### Error Codes

- [Buffer Queue Error Codes](buffer-queue-errors.md): Error codes that framework operations produce.

## See Also

### Queues

- [CMSimpleQueue](cmsimplequeue-api.md): A simple, lockless FIFO queue of elements.
- [CMMemoryPool](cmmemorypool-api.md): An object that optimizes memory allocation when working with large blocks of memory.
