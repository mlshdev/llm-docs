> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportgetname(_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportgetname(_:))

# CFMessagePortGetName(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the name with which a CFMessagePort object is registered.

## Declaration

```swift
func CFMessagePortGetName(_ ms: CFMessagePort!) -> CFString!
```

## Parameters

- `ms`: The message port to examine.

<a id="return-value"></a>

## Return Value

The registered name of `ms`, `NULL` if unnamed. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Message Port

- [CFMessagePortGetContext(\_:\_:)](cfmessageportgetcontext%28____%29.md): Returns the context information for a CFMessagePort object.
- [CFMessagePortGetInvalidationCallBack(\_:)](cfmessageportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMessagePort object.
- [CFMessagePortIsRemote(\_:)](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.
- [CFMessagePortIsValid(\_:)](cfmessageportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.

# CFMessagePortGetName (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the name with which a CFMessagePort object is registered.

## Declaration

```objectivec
extern CFStringRefCFMessagePortGetName(CFMessagePortRef ms);
```

## Parameters

- `ms`: The message port to examine.

<a id="return-value"></a>

## Return Value

The registered name of `ms`, `NULL` if unnamed. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Message Port

- [CFMessagePortGetContext](cfmessageportgetcontext%28____%29.md): Returns the context information for a CFMessagePort object.
- [CFMessagePortGetInvalidationCallBack](cfmessageportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMessagePort object.
- [CFMessagePortIsRemote](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.
- [CFMessagePortIsValid](cfmessageportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.
