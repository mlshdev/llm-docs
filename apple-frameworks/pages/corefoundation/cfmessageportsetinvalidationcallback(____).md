> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportsetinvalidationcallback(_:_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportsetinvalidationcallback(_:_:))

# CFMessagePortSetInvalidationCallBack(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the callback function invoked when a CFMessagePort object is invalidated.

## Declaration

```swift
func CFMessagePortSetInvalidationCallBack(_ ms: CFMessagePort!, _ callout: CFMessagePortInvalidationCallBack!)
```

## Parameters

- `ms`: The message port to examine.
- `callout`: The callback function to invoke when `ms` is invalidated. Pass `NULL` to remove a callback.

<a id="Discussion"></a>

## Discussion

If `ms` is already invalid, `callout` is invoked immediately.

## See Also

### Configuring a CFMessagePort Object

- [CFMessagePortCreateRunLoopSource(\_:\_:\_:)](cfmessageportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMessagePort object.
- [CFMessagePortSetName(\_:\_:)](cfmessageportsetname%28____%29.md): Sets the name of a local CFMessagePort object.

# CFMessagePortSetInvalidationCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the callback function invoked when a CFMessagePort object is invalidated.

## Declaration

```objectivec
extern void CFMessagePortSetInvalidationCallBack(CFMessagePortRef ms, CFMessagePortInvalidationCallBack callout);
```

## Parameters

- `ms`: The message port to examine.
- `callout`: The callback function to invoke when `ms` is invalidated. Pass `NULL` to remove a callback.

<a id="Discussion"></a>

## Discussion

If `ms` is already invalid, `callout` is invoked immediately.

## See Also

### Configuring a CFMessagePort Object

- [CFMessagePortCreateRunLoopSource](cfmessageportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMessagePort object.
- [CFMessagePortSetName](cfmessageportsetname%28____%29.md): Sets the name of a local CFMessagePort object.
