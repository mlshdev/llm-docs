> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeue-api](https://developer.apple.com/documentation/coremedia/cmsimplequeue-api)

# CMSimpleQueue (Swift)

**Framework:** Core Media  
**Kind:** API Collection

A simple, lockless FIFO queue of elements.

<a id="overview"></a>

## Overview

Simple queues are Core Foundation-based objects that implement a simple, lockless FIFO queue of (`void *`) elements. The elements in the queue can be pointers or simple pointer-sized numeric values (`NULL` or `0` elements aren’t allowed). If the elements are pointers to allocated memory buffers, handle lifetime management externally.

A simple queue can safely handle one enqueueing thread and one dequeueing thread. Simple queues are lockless, so enqueues and dequeues can occur on the Core Audio `ioProc` thread, where the system forbids locking and blocking.

You can query the state of a simple queue to get the current number of elements and the maximum capacity of the queue. You can also determine the queue’s fullness, which the system provides as a percentage of its capacity.

You can reset a simple queue, which returns it to its newly created state, with no elements in the queue (but with the maximum capacity unchanged).

## Topics

### Creating a Queue

- [CMSimpleQueueCreate(allocator:capacity:queueOut:)](cmsimplequeuecreate%28allocator_capacity_queueout_%29.md): Creates a queue that has the specified capacity.

### Managing Queues

- [CMSimpleQueueEnqueue(\_:element:)](cmsimplequeueenqueue%28__element_%29.md): Enqueues an element in the queue.
- [CMSimpleQueueDequeue(\_:)](cmsimplequeuedequeue%28__%29.md): Dequeues an element from the queue.
- [CMSimpleQueueReset(\_:)](cmsimplequeuereset%28__%29.md): Resets the queue.

### Inspecting Queues

- [CMSimpleQueueGetHead(\_:)](cmsimplequeuegethead%28__%29.md): Returns the element at the head of the queue.
- [CMSimpleQueueGetCapacity(\_:)](cmsimplequeuegetcapacity%28__%29.md): Returns the number of elements that the queue can hold.
- [CMSimpleQueueGetCount(\_:)](cmsimplequeuegetcount%28__%29.md): Returns the number of elements currently in the queue.

### Accessing the Type Identifier

- [CMSimpleQueueGetTypeID()](cmsimplequeuegettypeid%28%29.md): Returns the type identifier of sample buffer objects.

### Data Types

- [CMSimpleQueue](cmsimplequeue.md): A reference to an instance that provides a simple lockless queue of elements.

### Errors

- [Simple Queue Error Codes](simple-queue-errors.md): Error codes that simple queue operations generate.

## See Also

### Queues

- [CMBufferQueue](cmbufferqueue-api.md): A queue of timed buffers.
- [CMMemoryPool](cmmemorypool-api.md): An object that optimizes memory allocation when working with large blocks of memory.

# CMSimpleQueue (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

A simple, lockless FIFO queue of elements.

<a id="overview"></a>

## Overview

Simple queues are Core Foundation-based objects that implement a simple, lockless FIFO queue of (`void *`) elements. The elements in the queue can be pointers or simple pointer-sized numeric values (`NULL` or `0` elements aren’t allowed). If the elements are pointers to allocated memory buffers, handle lifetime management externally.

A simple queue can safely handle one enqueueing thread and one dequeueing thread. Simple queues are lockless, so enqueues and dequeues can occur on the Core Audio `ioProc` thread, where the system forbids locking and blocking.

You can query the state of a simple queue to get the current number of elements and the maximum capacity of the queue. You can also determine the queue’s fullness, which the system provides as a percentage of its capacity.

You can reset a simple queue, which returns it to its newly created state, with no elements in the queue (but with the maximum capacity unchanged).

## Topics

### Creating a Queue

- [CMSimpleQueueCreate](cmsimplequeuecreate%28allocator_capacity_queueout_%29.md): Creates a queue that has the specified capacity.

### Managing Queues

- [CMSimpleQueueEnqueue](cmsimplequeueenqueue%28__element_%29.md): Enqueues an element in the queue.
- [CMSimpleQueueDequeue](cmsimplequeuedequeue%28__%29.md): Dequeues an element from the queue.
- [CMSimpleQueueReset](cmsimplequeuereset%28__%29.md): Resets the queue.

### Inspecting Queues

- [CMSimpleQueueGetHead](cmsimplequeuegethead%28__%29.md): Returns the element at the head of the queue.
- [CMSimpleQueueGetCapacity](cmsimplequeuegetcapacity%28__%29.md): Returns the number of elements that the queue can hold.
- [CMSimpleQueueGetCount](cmsimplequeuegetcount%28__%29.md): Returns the number of elements currently in the queue.
- [CMSimpleQueueGetFullness](cmsimplequeuegetfullness.md): A convenience macro that returns a queue’s fullness as a percentage of its capacity.

### Accessing the Type Identifier

- [CMSimpleQueueGetTypeID](cmsimplequeuegettypeid%28%29.md): Returns the type identifier of sample buffer objects.

### Data Types

- [CMSimpleQueueRef](cmsimplequeue.md): A reference to an instance that provides a simple lockless queue of elements.

### Errors

- [Simple Queue Error Codes](simple-queue-errors.md): Error codes that simple queue operations generate.

## See Also

### Queues

- [CMBufferQueue](cmbufferqueue-api.md): A queue of timed buffers.
- [CMMemoryPool](cmmemorypool-api.md): An object that optimizes memory allocation when working with large blocks of memory.
