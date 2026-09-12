> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beextensionprocess/makelibxpcconnectionerror()](https://developer.apple.com/documentation/browserenginekit/beextensionprocess/makelibxpcconnectionerror())

# makeLibXPCConnectionError() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+

Creates a new libXPC connection to the extension process.

## Declaration

```swift
func makeLibXPCConnectionError() throws -> xpc_connection_t
```

<a id="return-value"></a>

## Return Value

The connection object representing the created libXPC connection or `nil`.

<a id="discussion"></a>

## Discussion

This method creates a connection to the extension process and returns it. If it isn’t possible to make an XPC connection, this method returns `nil` and populates the `error` parameter.

## See Also

- [invalidate()](invalidate%28%29.md): Stops the extension process.

# makeLibXPCConnectionError: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+

Creates a new libXPC connection to the extension process.

## Declaration

```objectivec
- (xpc_connection_t) makeLibXPCConnectionError:(NSError **) error;
```

## Parameters

- `error`: A pointer to an error object that describes why the method failed, or `nil` if no error occurred. Pass `nil` to ignore the error.

<a id="return-value"></a>

## Return Value

The connection object representing the created libXPC connection or `nil`.

<a id="discussion"></a>

## Discussion

This method creates a connection to the extension process and returns it. If it isn’t possible to make an XPC connection, this method returns `nil` and populates the `error` parameter.

## See Also

- [invalidate](invalidate%28%29.md): Stops the extension process.
