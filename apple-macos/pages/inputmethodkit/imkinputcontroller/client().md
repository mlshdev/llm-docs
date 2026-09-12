> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/client()](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/client())

# client() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the client object associated with the input controller.

## Declaration

```swift
func client() -> (any IMKTextInput & NSObjectProtocol)!
```

<a id="return-value"></a>

## Return Value

The client object.

<a id="Discussion"></a>

## Discussion

The client object conforms to the `IMKTextInput` protocol.

## See Also

### Getting the Client and Server Objects

- [server()](server%28%29.md): Returns the server object that manages the input controller.

# client (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the client object associated with the input controller.

## Declaration

```objectivec
- (id<IMKTextInput,NSObject>) client;
```

<a id="return-value"></a>

## Return Value

The client object.

<a id="Discussion"></a>

## Discussion

The client object conforms to the `IMKTextInput` protocol.

## See Also

### Getting the Client and Server Objects

- [server](server%28%29.md): Returns the server object that manages the input controller.
