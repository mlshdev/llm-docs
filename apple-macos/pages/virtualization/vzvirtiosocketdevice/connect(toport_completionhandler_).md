> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketdevice/connect(toport:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzvirtiosocketdevice/connect(toport:completionhandler:))

# connect(toPort:completionHandler:)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Initiates a connection to the specified port of the guest operating system.

## Declaration

```swift
func connect(toPort port: UInt32, completionHandler: @escaping (Result<VZVirtioSocketConnection, any Error>) -> Void)
```

## Parameters

- `port`: The destination port number in the guest operating system.
- `completionHandler`: The block to execute with the results of the connection attempt. This block has no return value and takes the following parameter:

  - **result**: The result of the connection attempt. On a successful attempt, this value is the [VZVirtioSocketConnection](../vzvirtiosocketconnection.md) object to use for communications. On an unsuccessful attempt, this value is the error object that indicates why the connection failed.

<a id="Discussion"></a>

## Discussion

This method initiates the connection asynchronously, and executes the completion handler when the results are available. If the guest operating system doesn’t listen for connections to the specifed port, this method does nothing.

For a successful connection, this method sets the [sourcePort](../vzvirtiosocketconnection/sourceport.md) property of the resulting [VZVirtioSocketConnection](../vzvirtiosocketconnection.md) object to a random port number.

## See Also

### Connecting to Guest System Ports

- [connect(toPort:)](connect%28toport_%29.md): Initiates a connection to the specified port of the guest operating system.
