> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeuegetcount(_:)](https://developer.apple.com/documentation/coremedia/cmsimplequeuegetcount(_:))

# CMSimpleQueueGetCount(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the number of elements currently in the queue.

## Declaration

```swift
func CMSimpleQueueGetCount(_ queue: CMSimpleQueue) -> Int32
```

## Parameters

- `queue`: The queue the function is interrogating. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

The number of elements currently in the queue. Returns `0` if there is an error.

## See Also

### Inspecting Queues

- [CMSimpleQueueGetHead(\_:)](cmsimplequeuegethead%28__%29.md): Returns the element at the head of the queue.
- [CMSimpleQueueGetCapacity(\_:)](cmsimplequeuegetcapacity%28__%29.md): Returns the number of elements that the queue can hold.

# CMSimpleQueueGetCount (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the number of elements currently in the queue.

## Declaration

```objectivec
extern int32_t CMSimpleQueueGetCount(CMSimpleQueueRef queue);
```

## Parameters

- `queue`: The queue the function is interrogating. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

The number of elements currently in the queue. Returns `0` if there is an error.

## See Also

### Inspecting Queues

- [CMSimpleQueueGetHead](cmsimplequeuegethead%28__%29.md): Returns the element at the head of the queue.
- [CMSimpleQueueGetCapacity](cmsimplequeuegetcapacity%28__%29.md): Returns the number of elements that the queue can hold.
- [CMSimpleQueueGetFullness](cmsimplequeuegetfullness.md): A convenience macro that returns a queue’s fullness as a percentage of its capacity.
