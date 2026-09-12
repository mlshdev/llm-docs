> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageportsetname(_:_:)](https://developer.apple.com/documentation/corefoundation/cfmessageportsetname(_:_:))

# CFMessagePortSetName(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the name of a local CFMessagePort object.

## Declaration

```swift
func CFMessagePortSetName(_ ms: CFMessagePort!, _ newName: CFString!) -> Bool
```

## Parameters

- `ms`: The local message port to examine.
- `newName`: The new name for `ms`.

<a id="return-value"></a>

## Return Value

`true` if the name change succeeds, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Other threads and processes can connect to a named message port with [CFMessagePortCreateRemote(\_:\_:)](cfmessageportcreateremote%28____%29.md).

## See Also

### Configuring a CFMessagePort Object

- [CFMessagePortCreateRunLoopSource(\_:\_:\_:)](cfmessageportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMessagePort object.
- [CFMessagePortSetInvalidationCallBack(\_:\_:)](cfmessageportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMessagePort object is invalidated.

# CFMessagePortSetName (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the name of a local CFMessagePort object.

## Declaration

```objectivec
extern Boolean CFMessagePortSetName(CFMessagePortRef ms, CFStringRef newName);
```

## Parameters

- `ms`: The local message port to examine.
- `newName`: The new name for `ms`.

<a id="return-value"></a>

## Return Value

`true` if the name change succeeds, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Other threads and processes can connect to a named message port with [CFMessagePortCreateRemote](cfmessageportcreateremote%28____%29.md).

## See Also

### Configuring a CFMessagePort Object

- [CFMessagePortCreateRunLoopSource](cfmessageportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMessagePort object.
- [CFMessagePortSetInvalidationCallBack](cfmessageportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMessagePort object is invalidated.
