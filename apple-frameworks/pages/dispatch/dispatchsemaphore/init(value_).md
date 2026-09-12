> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsemaphore/init(value:)](https://developer.apple.com/documentation/dispatch/dispatchsemaphore/init(value:))

# init(value:) (Swift)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates new counting semaphore with an initial value.

## Declaration

```swift
init(value: Int)
```

## Parameters

- `value`: The starting value for the semaphore. Do not pass a value less than zero.

<a id="return-value"></a>

## Return Value

The newly created semaphore.

<a id="Discussion"></a>

## Discussion

Passing zero for the value is useful for when two threads need to reconcile the completion of a particular event. Passing a value greater than zero is useful for managing a finite pool of resources, where the pool size is equal to the value.

> **Important**

>  Calls to [signal()](signal%28%29.md) must be balanced with calls to [wait()](wait%28%29.md). Attempting to dispose of a semaphore with a count lower than `value` causes an `EXC_BAD_INSTRUCTION` exception.

# dispatch_semaphore_create (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates new counting semaphore with an initial value.

## Declaration

```objectivec
extern dispatch_semaphore_tdispatch_semaphore_create(intptr_t value);
```

## Parameters

- `value`: The starting value for the semaphore. Do not pass a value less than zero.

<a id="return-value"></a>

## Return Value

The newly created semaphore.

<a id="Discussion"></a>

## Discussion

Passing zero for the value is useful for when two threads need to reconcile the completion of a particular event. Passing a value greater than zero is useful for managing a finite pool of resources, where the pool size is equal to the value.

> **Important**

>  Calls to [signal()](signal%28%29.md) must be balanced with calls to [wait()](wait%28%29.md). Attempting to dispose of a semaphore with a count lower than `value` causes an `EXC_BAD_INSTRUCTION` exception.
