> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportgetcontext(_:_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportgetcontext(_:_:))

# CFMessagePortGetContext(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context information for a CFMessagePort object.

## Declaration

```swift
func CFMessagePortGetContext(_ ms: CFMessagePort!, _ context: UnsafeMutablePointer<CFMessagePortContext>!)
```

## Parameters

- `ms`: The message port to examine.
- `context`: A pointer to the structure into which the context information for `ms` is to be copied. The information being returned is usually the same information you passed to [CFMessagePortCreateLocal(\_:\_:\_:\_:\_:)](cfmessageportcreatelocal%28__________%29.md) when creating `ms`. However, if [CFMessagePortCreateLocal(\_:\_:\_:\_:\_:)](cfmessageportcreatelocal%28__________%29.md) returned a cached object instead of creating a new object, `context` is filled with information from the original message port instead of the information you passed to the function.

<a id="Discussion"></a>

## Discussion

The context version number for message ports is currently `0`. Before calling this function, you need to initialize the `version` member of `context` to `0`.

## See Also

### Examining a Message Port

- [CFMessagePortGetInvalidationCallBack(\_:)](cfmessageportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMessagePort object.
- [CFMessagePortGetName(\_:)](cfmessageportgetname%28__%29.md): Returns the name with which a CFMessagePort object is registered.
- [CFMessagePortIsRemote(\_:)](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.
- [CFMessagePortIsValid(\_:)](cfmessageportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.

# CFMessagePortGetContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context information for a CFMessagePort object.

## Declaration

```objectivec
extern void CFMessagePortGetContext(CFMessagePortRef ms, CFMessagePortContext *context);
```

## Parameters

- `ms`: The message port to examine.
- `context`: A pointer to the structure into which the context information for `ms` is to be copied. The information being returned is usually the same information you passed to [CFMessagePortCreateLocal](cfmessageportcreatelocal%28__________%29.md) when creating `ms`. However, if [CFMessagePortCreateLocal](cfmessageportcreatelocal%28__________%29.md) returned a cached object instead of creating a new object, `context` is filled with information from the original message port instead of the information you passed to the function.

<a id="Discussion"></a>

## Discussion

The context version number for message ports is currently `0`. Before calling this function, you need to initialize the `version` member of `context` to `0`.

## See Also

### Examining a Message Port

- [CFMessagePortGetInvalidationCallBack](cfmessageportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMessagePort object.
- [CFMessagePortGetName](cfmessageportgetname%28__%29.md): Returns the name with which a CFMessagePort object is registered.
- [CFMessagePortIsRemote](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.
- [CFMessagePortIsValid](cfmessageportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.
