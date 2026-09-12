> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionprocess/makexpcconnection()](https://developer.apple.com/documentation/extensionfoundation/appextensionprocess/makexpcconnection())

# makeXPCConnection()

**Framework:** ExtensionFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Connect to the app extension process using the XPC types of the Foundation framework.

## Declaration

```swift
func makeXPCConnection() throws -> NSXPCConnection
```

<a id="return-value"></a>

## Return Value

The connection object your app uses to communicate with the app extension.

<a id="discussion"></a>

## Discussion

Call this method to create a connection between your host app and an app extension using the types of the Foundation framework. If the app extension accepts the connection request, the returned connection object contains the proxy information you need to communicate with it. If the app extension refuses the request or doesn’t support this connection type, this method throws an error.

## See Also

### Connecting to the app extension

- [makeXPCSession()](makexpcsession%28%29.md): Connect to the app extension process using an XPC session.
