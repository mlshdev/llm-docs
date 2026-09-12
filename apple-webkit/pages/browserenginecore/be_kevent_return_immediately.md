> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginecore/be_kevent_return_immediately](https://developer.apple.com/documentation/browserenginecore/be_kevent_return_immediately)

# BE_KEVENT_RETURN_IMMEDIATELY (Swift)

**Framework:** BrowserEngineCore  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Indicates that a request to receive kernel events needs to return without waiting for events.

## Declaration

```swift
var BE_KEVENT_RETURN_IMMEDIATELY: Int32 { get }
```

<a id="Overview"></a>

## Overview

Use this constant in the `be_flags` parameter of [be_kevent(\_:\_:\_:\_:\_:\_:)](be_kevent%28____________%29.md), or the `flags` parameter of [be_kevent64(\_:\_:\_:\_:\_:\_:)](be_kevent64%28____________%29.md), to poll for kernel events.

## See Also

### Kernel events

- [be_kevent(\_:\_:\_:\_:\_:\_:)](be_kevent%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 32-bit data types.
- [be_kevent64(\_:\_:\_:\_:\_:\_:)](be_kevent64%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 64-bit data types.
- [BE_KEVENT_NO_FLAGS](be_kevent_no_flags.md): Indicates that no flags are set in a request to receive kernel events.

# BE_KEVENT_RETURN_IMMEDIATELY (Objective-C)

**Framework:** BrowserEngineCore  
**Kind:** Macro  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Indicates that a request to receive kernel events needs to return without waiting for events.

## Declaration

```objectivec
#define BE_KEVENT_RETURN_IMMEDIATELY
```

<a id="Overview"></a>

## Overview

Use this constant in the `be_flags` parameter of [be_kevent](be_kevent%28____________%29.md), or the `flags` parameter of [be_kevent64](be_kevent64%28____________%29.md), to poll for kernel events.

## See Also

### Kernel events

- [be_kevent](be_kevent%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 32-bit data types.
- [be_kevent64](be_kevent64%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 64-bit data types.
- [BE_KEVENT_NO_FLAGS](be_kevent_no_flags.md): Indicates that no flags are set in a request to receive kernel events.
