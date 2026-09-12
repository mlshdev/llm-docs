> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketdevice/connect(toport:)](https://developer.apple.com/documentation/virtualization/vzvirtiosocketdevice/connect(toport:))

# connect(toPort:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Initiates a connection to the specified port of the guest operating system.

## Declaration

```swift
func connect(toPort port: UInt32) async throws -> VZVirtioSocketConnection
```

## Parameters

- `port`: The destination port number in the guest operating system.

<a id="Discussion"></a>

## Discussion

This method initiates the connection asynchronously, and executes the completion handler when the results are available. If the guest operating system doesn’t listen for connections to the specifed port, this method does nothing.

For a successful connection, this method sets the [sourcePort](../vzvirtiosocketconnection/sourceport.md) property of the resulting [VZVirtioSocketConnection](../vzvirtiosocketconnection.md) object to a random port number.

## See Also

### Connecting to Guest System Ports

- [connect(toPort:completionHandler:)](connect%28toport_completionhandler_%29.md): Initiates a connection to the specified port of the guest operating system.

# connectToPort:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Initiates a connection to the specified port of the guest operating system.

## Declaration

```objectivec
- (void) connectToPort:(uint32_t) port completionHandler:(void (^)(VZVirtioSocketConnection *connection, NSError *error)) completionHandler;
```

## Parameters

- `port`: The destination port number in the guest operating system.
- `completionHandler`: The block to execute with the results of the connection attempt. This block has no return value and takes the following parameter:

  - **connection**: On a successful attempt, this value is the [VZVirtioSocketConnection](../vzvirtiosocketconnection.md) object to use for communications. On an unsuccessful attempt, this value `nil`.
  - **error**: On a successful attempt, this value is nil. On an unsuccessful attempt, this value is the error object that indicates why the connection failed.

<a id="Discussion"></a>

## Discussion

This method initiates the connection asynchronously, and executes the completion handler when the results are available. If the guest operating system doesn’t listen for connections to the specifed port, this method does nothing.

For a successful connection, this method sets the [sourcePort](../vzvirtiosocketconnection/sourceport.md) property of the resulting [VZVirtioSocketConnection](../vzvirtiosocketconnection.md) object to a random port number.
