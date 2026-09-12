> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeuecreate(allocator:capacity:queueout:)](https://developer.apple.com/documentation/coremedia/cmsimplequeuecreate(allocator:capacity:queueout:))

# CMSimpleQueueCreate(allocator:capacity:queueOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a queue that has the specified capacity.

## Declaration

```swift
func CMSimpleQueueCreate(allocator: CFAllocator?, capacity: Int32, queueOut: UnsafeMutablePointer<CMSimpleQueue?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator used to allocate storage for the queue.
- `capacity`: Capacity of the queue (maximum number of elements holdable at any given time). Required (must not be `0`). Must be a positive value.
- `queueOut`: On output, a reference to the newly created queue. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

A result code. See [Simple Queue Error Codes](simple-queue-errors.md).

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned `CMSimpleQueue`, and must release it when done with it.

# CMSimpleQueueCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a queue that has the specified capacity.

## Declaration

```objectivec
extern OSStatus CMSimpleQueueCreate(CFAllocatorRef allocator, int32_t capacity, CMSimpleQueueRef*queueOut);
```

## Parameters

- `allocator`: Allocator used to allocate storage for the queue.
- `capacity`: Capacity of the queue (maximum number of elements holdable at any given time). Required (must not be `0`). Must be a positive value.
- `queueOut`: On output, a reference to the newly created queue. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

A result code. See [Simple Queue Error Codes](simple-queue-errors.md).

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned `CMSimpleQueue`, and must release it when done with it.
