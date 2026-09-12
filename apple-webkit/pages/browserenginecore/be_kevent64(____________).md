> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginecore/be_kevent64(_:_:_:_:_:_:)](https://developer.apple.com/documentation/browserenginecore/be_kevent64(_:_:_:_:_:_:))

# be_kevent64(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** BrowserEngineCore  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 64-bit data types.

## Declaration

```swift
func be_kevent64(_ kq: Int32, _ changelist: UnsafePointer<kevent64_s>!, _ nchanges: Int32, _ eventlist: UnsafeMutablePointer<kevent64_s>!, _ nevents: Int32, _ flags: UInt32) -> Int32
```

## Parameters

- `kq`: A file descriptor that identifies a kernel queue.
- `changelist`: An array of changes to make to the kernel queue.
- `nchanges`: The number of items in the `changelist` array.
- `eventlist`: An array of kernel events that this function fills on return, if any matching events are on the queue.
- `nevents`: The number of items in the `eventlist` array.
- `flags`: Configuration flags that control how `be_kevent64` waits for kernel events.

<a id="return-value"></a>

## Return Value

The number of events or errors that the function places in `eventlist`, up to `nevents`. If an error occurs and there isn’t space in `eventlist` to write the error, `be_kevent` returns `-1` and sets `errno` to indicate the error.

<a id="Discussion"></a>

## Discussion

> **Important**

> To use 32-bit data types, call `be_kevent`.

Call `kqueue()` to create a kernel queue file descriptor that you pass to this function in the `kq` parameter. `kqueue()` returns a file descriptor on success; otherwise, it returns `-1` and sets `errno` to indicate the error.

Use the `EV_SET64` macro to fill out `struct kevent64_s` structures with information about the events you want to receive, that you store in the `changelist` array.

If `be_kevent64` encounters an error when there are fewer than `nevents` events written to the `eventlist` array, it adds an event that has the `EV_ERROR` flag set in its `flags` field, and the error information in its `data` field. The `be_kevent64` function only returns `-1` if it encounters an error that there isn’t space for it to record in `eventlist`.

You can poll for events on `kq` by passing [BE_KEVENT_RETURN_IMMEDIATELY](be_kevent_return_immediately.md) in the `be_flags` argument. Otherwise, `be_kevent64` waits until `nevents` matching events occur on the queue.

## See Also

### Kernel events

- [be_kevent(\_:\_:\_:\_:\_:\_:)](be_kevent%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 32-bit data types.
- [BE_KEVENT_NO_FLAGS](be_kevent_no_flags.md): Indicates that no flags are set in a request to receive kernel events.
- [BE_KEVENT_RETURN_IMMEDIATELY](be_kevent_return_immediately.md): Indicates that a request to receive kernel events needs to return without waiting for events.

# be_kevent64 (Objective-C)

**Framework:** BrowserEngineCore  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 64-bit data types.

## Declaration

```objectivec
extern int be_kevent64(int kq, const struct kevent64_s *changelist, int nchanges, struct kevent64_s *eventlist, int nevents, unsigned int flags);
```

## Parameters

- `kq`: A file descriptor that identifies a kernel queue.
- `changelist`: An array of changes to make to the kernel queue.
- `nchanges`: The number of items in the `changelist` array.
- `eventlist`: An array of kernel events that this function fills on return, if any matching events are on the queue.
- `nevents`: The number of items in the `eventlist` array.
- `flags`: Configuration flags that control how `be_kevent64` waits for kernel events.

<a id="return-value"></a>

## Return Value

The number of events or errors that the function places in `eventlist`, up to `nevents`. If an error occurs and there isn’t space in `eventlist` to write the error, `be_kevent` returns `-1` and sets `errno` to indicate the error.

<a id="Discussion"></a>

## Discussion

> **Important**

> To use 32-bit data types, call `be_kevent`.

Call `kqueue()` to create a kernel queue file descriptor that you pass to this function in the `kq` parameter. `kqueue()` returns a file descriptor on success; otherwise, it returns `-1` and sets `errno` to indicate the error.

Use the `EV_SET64` macro to fill out `struct kevent64_s` structures with information about the events you want to receive, that you store in the `changelist` array.

If `be_kevent64` encounters an error when there are fewer than `nevents` events written to the `eventlist` array, it adds an event that has the `EV_ERROR` flag set in its `flags` field, and the error information in its `data` field. The `be_kevent64` function only returns `-1` if it encounters an error that there isn’t space for it to record in `eventlist`.

You can poll for events on `kq` by passing [BE_KEVENT_RETURN_IMMEDIATELY](be_kevent_return_immediately.md) in the `be_flags` argument. Otherwise, `be_kevent64` waits until `nevents` matching events occur on the queue.

## See Also

### Kernel events

- [be_kevent](be_kevent%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 32-bit data types.
- [BE_KEVENT_NO_FLAGS](be_kevent_no_flags.md): Indicates that no flags are set in a request to receive kernel events.
- [BE_KEVENT_RETURN_IMMEDIATELY](be_kevent_return_immediately.md): Indicates that a request to receive kernel events needs to return without waiting for events.
