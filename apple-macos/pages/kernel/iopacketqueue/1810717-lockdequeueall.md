> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopacketqueue/1810717-lockdequeueall](https://developer.apple.com/documentation/kernel/iopacketqueue/1810717-lockdequeueall)

# lockDequeueAll

**Interface language:** Objective-C

**Framework:** Kernel

Removes all packets from a synchronized queue and returns the head of the packet chain.

## Declaration

```objectivec
virtual mbuf_t lockDequeueAll(); 
```

<a id="return_value"></a>

## Return Value

Returns the head of a packet chain linking all packets that were held in the queue, or NULL if the queue was empty.

<a id="overview"></a>

## Overview

The size of the queue is cleared to zero. A spinlock is used to synchronize access to the queue.

## See Also

### Miscellaneous

- [dequeue](1810464-dequeue.md): Removes a single packet from the head of the queue.
- [dequeueAll](1810493-dequeueall.md): Removes all packets from the queue and returns the head of the packet chain.
- [enqueue(IOPacketQueue \*)](1810512-enqueue.md): Removes all packets from the specified queue, and adds them to the tail of this queue.
- [enqueue(mbuf_t)](1810538-enqueue.md): Adds a chain of packets to the tail of the queue.
- [enqueueWithDrop](1810567-enqueuewithdrop.md): Adds a chain of packets to the tail of the queue.
- [flush](1810584-flush.md): Frees all packets currently held in the queue and releases them back to the free mbuf pool.
- [free](1810608-free.md): Frees the IOPacketQueue object.
- [getCapacity](1810646-getcapacity.md): Gets the current capacity of the queue.
- [getSize](1810665-getsize.md): Gets the size of the queue.
- [initWithCapacity](1810679-initwithcapacity.md): Initializes an IOPacketQueue object.
- [lockDequeue](1810698-lockdequeue.md): Removes a single packet from the head of a synchronized queue.
- [lockEnqueue](1810734-lockenqueue.md): Adds a chain of packets to the tail of a synchronized queue.
- [lockEnqueueWithDrop](1810758-lockenqueuewithdrop.md): Adds a chain of packets to the tail of a synchronized queue.
- [lockFlush](1810785-lockflush.md): Frees all packets currently held in a synchronized queue and releases them back to the free mbuf pool.
- [lockPrepend](1810813-lockprepend.md): Adds a chain of packets to the head of a synchronized queue.
- [peek](1810837-peek.md): Examines the packet at the head of the queue without removing it from the queue.
- [prepend(IOPacketQueue \*)](1810853-prepend.md): Removes all packets from the specified queue, and adds them to the head of this queue.
- [prepend(mbuf_t)](1810881-prepend.md): Adds a chain of packets to the head of the queue.
- [setCapacity](1810899-setcapacity.md): Changes the capacity of the queue.
- [withCapacity](1810920-withcapacity.md): Factory method that constructs and initializes an IOPacketQueue object.
