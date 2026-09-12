> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportinvalidationcallback](https://developer.apple.com/documentation/corefoundation/cfmachportinvalidationcallback)

# CFMachPortInvalidationCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when a CFMachPort object is invalidated.

## Declaration

```swift
typealias CFMachPortInvalidationCallBack = (CFMachPort?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `port`: The CFMachPort object that has been invalidated.
- `info`: The `info` member of the [CFMachPortContext](cfmachportcontext.md) structure used when creating `port`.

<a id="Discussion"></a>

## Discussion

Your callback should free any resources allocated for `port`.

You specify this callback with [CFMachPortSetInvalidationCallBack(\_:\_:)](cfmachportsetinvalidationcallback%28____%29.md).

## See Also

### Callbacks

- [CFMachPortCallBack](cfmachportcallback.md): Callback invoked to process a message received on a CFMachPort object.

# CFMachPortInvalidationCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when a CFMachPort object is invalidated.

## Declaration

```objectivec
typedef void (*)(struct __CFMachPort *, void *) CFMachPortInvalidationCallBack;
```

## Parameters

- `port`: The CFMachPort object that has been invalidated.
- `info`: The `info` member of the [CFMachPortContext](cfmachportcontext.md) structure used when creating `port`.

<a id="Discussion"></a>

## Discussion

Your callback should free any resources allocated for `port`.

You specify this callback with [CFMachPortSetInvalidationCallBack](cfmachportsetinvalidationcallback%28____%29.md).

## See Also

### Callbacks

- [CFMachPortCallBack](cfmachportcallback.md): Callback invoked to process a message received on a CFMachPort object.
