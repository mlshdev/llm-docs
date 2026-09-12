> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportcallback](https://developer.apple.com/documentation/corefoundation/cfmessageportcallback)

# CFMessagePortCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked to process a message received on a CFMessagePort object.

## Declaration

```swift
typealias CFMessagePortCallBack = (CFMessagePort?, Int32, CFData?, UnsafeMutableRawPointer?) -> Unmanaged<CFData>?
```

## Parameters

- `local`: The local message port that received the message.
- `msgid`: An arbitrary integer value assigned to the message by the sender.
- `data`: The message data.
- `info`: The `info` member of the [CFMessagePortContext](cfmessageportcontext.md) structure that was used when creating `local`.

<a id="return-value"></a>

## Return Value

Data to send back to the sender of the message. The system releases the returned CFData object. Return `NULL` if you want an empty reply returned to the sender.

<a id="Discussion"></a>

## Discussion

If you want the message data to persist beyond this callback, you must explicitly create a copy of `data` rather than merely retain it; the contents of `data` will be deallocated after the callback exits.

## See Also

### Callbacks

- [CFMessagePortInvalidationCallBack](cfmessageportinvalidationcallback.md): Callback invoked when a CFMessagePort object is invalidated.

# CFMessagePortCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked to process a message received on a CFMessagePort object.

## Declaration

```objectivec
typedef const struct __CFData *(*)(struct __CFMessagePort *, int, const struct __CFData *, void *) CFMessagePortCallBack;
```

## Parameters

- `local`: The local message port that received the message.
- `msgid`: An arbitrary integer value assigned to the message by the sender.
- `data`: The message data.
- `info`: The `info` member of the [CFMessagePortContext](cfmessageportcontext.md) structure that was used when creating `local`.

<a id="return-value"></a>

## Return Value

Data to send back to the sender of the message. The system releases the returned CFData object. Return `NULL` if you want an empty reply returned to the sender.

<a id="Discussion"></a>

## Discussion

If you want the message data to persist beyond this callback, you must explicitly create a copy of `data` rather than merely retain it; the contents of `data` will be deallocated after the callback exits.

## See Also

### Callbacks

- [CFMessagePortInvalidationCallBack](cfmessageportinvalidationcallback.md): Callback invoked when a CFMessagePort object is invalidated.
