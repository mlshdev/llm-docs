> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportsetinvalidationcallback(_:_:)](https://developer.apple.com/documentation/corefoundation/cfmachportsetinvalidationcallback(_:_:))

# CFMachPortSetInvalidationCallBack(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the callback function invoked when a CFMachPort object is invalidated.

## Declaration

```swift
func CFMachPortSetInvalidationCallBack(_ port: CFMachPort!, _ callout: CFMachPortInvalidationCallBack!)
```

## Parameters

- `port`: The CFMachPort object to modify.
- `callout`: The callback function to invoke when `port` is invalidated. Pass `NULL` to remove a callback.

<a id="Discussion"></a>

## Discussion

If `port` is already invalid, `callout` is invoked immediately.

## See Also

### Configuring a CFMachPort Object

- [CFMachPortInvalidate(\_:)](cfmachportinvalidate%28__%29.md): Invalidates a CFMachPort object, stopping it from receiving any more messages.
- [CFMachPortCreateRunLoopSource(\_:\_:\_:)](cfmachportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMachPort object.

# CFMachPortSetInvalidationCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the callback function invoked when a CFMachPort object is invalidated.

## Declaration

```objectivec
extern void CFMachPortSetInvalidationCallBack(CFMachPortRef port, CFMachPortInvalidationCallBack callout);
```

## Parameters

- `port`: The CFMachPort object to modify.
- `callout`: The callback function to invoke when `port` is invalidated. Pass `NULL` to remove a callback.

<a id="Discussion"></a>

## Discussion

If `port` is already invalid, `callout` is invoked immediately.

## See Also

### Configuring a CFMachPort Object

- [CFMachPortInvalidate](cfmachportinvalidate%28__%29.md): Invalidates a CFMachPort object, stopping it from receiving any more messages.
- [CFMachPortCreateRunLoopSource](cfmachportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMachPort object.
