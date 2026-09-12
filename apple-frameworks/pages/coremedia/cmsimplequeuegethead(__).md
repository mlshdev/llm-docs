> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeuegethead(_:)](https://developer.apple.com/documentation/coremedia/cmsimplequeuegethead(_:))

# CMSimpleQueueGetHead(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the element at the head of the queue.

## Declaration

```swift
func CMSimpleQueueGetHead(_ queue: CMSimpleQueue) -> UnsafeRawPointer?
```

## Parameters

- `queue`: The queue from which to get the head element. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

The head element.  `NULL` if the queue was empty, or if there was some other error.

<a id="Discussion"></a>

## Discussion

If the queue is empty, the function returns `NULL`.

## See Also

### Inspecting Queues

- [CMSimpleQueueGetCapacity(\_:)](cmsimplequeuegetcapacity%28__%29.md): Returns the number of elements that the queue can hold.
- [CMSimpleQueueGetCount(\_:)](cmsimplequeuegetcount%28__%29.md): Returns the number of elements currently in the queue.

# CMSimpleQueueGetHead (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the element at the head of the queue.

## Declaration

```objectivec
extern const void *CMSimpleQueueGetHead(CMSimpleQueueRef queue);
```

## Parameters

- `queue`: The queue from which to get the head element. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

The head element.  `NULL` if the queue was empty, or if there was some other error.

<a id="Discussion"></a>

## Discussion

If the queue is empty, the function returns `NULL`.

## See Also

### Inspecting Queues

- [CMSimpleQueueGetCapacity](cmsimplequeuegetcapacity%28__%29.md): Returns the number of elements that the queue can hold.
- [CMSimpleQueueGetCount](cmsimplequeuegetcount%28__%29.md): Returns the number of elements currently in the queue.
- [CMSimpleQueueGetFullness](cmsimplequeuegetfullness.md): A convenience macro that returns a queue’s fullness as a percentage of its capacity.
