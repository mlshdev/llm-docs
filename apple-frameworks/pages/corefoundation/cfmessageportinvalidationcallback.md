> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportinvalidationcallback](https://developer.apple.com/documentation/corefoundation/cfmessageportinvalidationcallback)

# CFMessagePortInvalidationCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when a CFMessagePort object is invalidated.

## Declaration

```swift
typealias CFMessagePortInvalidationCallBack = (CFMessagePort?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `ms`: The message port that has been invalidated.
- `info`: The `info` member of the [CFMessagePortContext](cfmessageportcontext.md) structure that was used when creating `ms`, if `ms` is a local port; `NULL` if `ms` is a remote port.

<a id="Discussion"></a>

## Discussion

Your callback should free any resources allocated for `ms`.

You specify this callback with [CFMessagePortSetInvalidationCallBack(\_:\_:)](cfmessageportsetinvalidationcallback%28____%29.md).

## See Also

### Callbacks

- [CFMessagePortCallBack](cfmessageportcallback.md): Callback invoked to process a message received on a CFMessagePort object.

# CFMessagePortInvalidationCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when a CFMessagePort object is invalidated.

## Declaration

```objectivec
typedef void (*)(struct __CFMessagePort *, void *) CFMessagePortInvalidationCallBack;
```

## Parameters

- `ms`: The message port that has been invalidated.
- `info`: The `info` member of the [CFMessagePortContext](cfmessageportcontext.md) structure that was used when creating `ms`, if `ms` is a local port; `NULL` if `ms` is a remote port.

<a id="Discussion"></a>

## Discussion

Your callback should free any resources allocated for `ms`.

You specify this callback with [CFMessagePortSetInvalidationCallBack](cfmessageportsetinvalidationcallback%28____%29.md).

## See Also

### Callbacks

- [CFMessagePortCallBack](cfmessageportcallback.md): Callback invoked to process a message received on a CFMessagePort object.
