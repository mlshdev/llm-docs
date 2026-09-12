> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportgetinvalidationcallback(_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportgetinvalidationcallback(_:))

# CFMessagePortGetInvalidationCallBack(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the invalidation callback function for a CFMessagePort object.

## Declaration

```swift
func CFMessagePortGetInvalidationCallBack(_ ms: CFMessagePort!) -> CFMessagePortInvalidationCallBack!
```

## Parameters

- `ms`: The message port to examine.

<a id="return-value"></a>

## Return Value

The callback function invoked when `ms` is invalidated. `NULL` if no callback has been set with [CFMessagePortSetInvalidationCallBack(\_:\_:)](cfmessageportsetinvalidationcallback%28____%29.md).

## See Also

### Examining a Message Port

- [CFMessagePortGetContext(\_:\_:)](cfmessageportgetcontext%28____%29.md): Returns the context information for a CFMessagePort object.
- [CFMessagePortGetName(\_:)](cfmessageportgetname%28__%29.md): Returns the name with which a CFMessagePort object is registered.
- [CFMessagePortIsRemote(\_:)](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.
- [CFMessagePortIsValid(\_:)](cfmessageportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.

# CFMessagePortGetInvalidationCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the invalidation callback function for a CFMessagePort object.

## Declaration

```objectivec
extern CFMessagePortInvalidationCallBackCFMessagePortGetInvalidationCallBack(CFMessagePortRef ms);
```

## Parameters

- `ms`: The message port to examine.

<a id="return-value"></a>

## Return Value

The callback function invoked when `ms` is invalidated. `NULL` if no callback has been set with [CFMessagePortSetInvalidationCallBack](cfmessageportsetinvalidationcallback%28____%29.md).

## See Also

### Examining a Message Port

- [CFMessagePortGetContext](cfmessageportgetcontext%28____%29.md): Returns the context information for a CFMessagePort object.
- [CFMessagePortGetName](cfmessageportgetname%28__%29.md): Returns the name with which a CFMessagePort object is registered.
- [CFMessagePortIsRemote](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.
- [CFMessagePortIsValid](cfmessageportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.
