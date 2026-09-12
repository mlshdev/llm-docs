> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportisvalid(_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportisvalid(_:))

# CFMessagePortIsValid(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.

## Declaration

```swift
func CFMessagePortIsValid(_ ms: CFMessagePort!) -> Bool
```

## Parameters

- `ms`: The message port to examine.

<a id="return-value"></a>

## Return Value

`true` if `ms` can be used for communication, otherwise `false`.

## See Also

### Examining a Message Port

- [CFMessagePortGetContext(\_:\_:)](cfmessageportgetcontext%28____%29.md): Returns the context information for a CFMessagePort object.
- [CFMessagePortGetInvalidationCallBack(\_:)](cfmessageportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMessagePort object.
- [CFMessagePortGetName(\_:)](cfmessageportgetname%28__%29.md): Returns the name with which a CFMessagePort object is registered.
- [CFMessagePortIsRemote(\_:)](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.

# CFMessagePortIsValid (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.

## Declaration

```objectivec
extern Boolean CFMessagePortIsValid(CFMessagePortRef ms);
```

## Parameters

- `ms`: The message port to examine.

<a id="return-value"></a>

## Return Value

`true` if `ms` can be used for communication, otherwise `false`.

## See Also

### Examining a Message Port

- [CFMessagePortGetContext](cfmessageportgetcontext%28____%29.md): Returns the context information for a CFMessagePort object.
- [CFMessagePortGetInvalidationCallBack](cfmessageportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMessagePort object.
- [CFMessagePortGetName](cfmessageportgetname%28__%29.md): Returns the name with which a CFMessagePort object is registered.
- [CFMessagePortIsRemote](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.
