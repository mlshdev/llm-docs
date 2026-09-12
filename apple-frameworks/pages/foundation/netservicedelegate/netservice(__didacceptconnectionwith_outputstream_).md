> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicedelegate/netservice(_:didacceptconnectionwith:outputstream:)](https://developer.apple.com/documentation/foundation/netservicedelegate/netservice(_:didacceptconnectionwith:outputstream:))

# netService(\_:didAcceptConnectionWith:outputStream:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Called when a client connects to a service managed by Bonjour.

## Declaration

```swift
optional func netService(_ sender: NetService, didAcceptConnectionWith inputStream: InputStream, outputStream: OutputStream)
```

## Parameters

- `sender`: The net service object that the client connected to.
- `inputStream`: A stream object for receiving data from the client.
- `outputStream`: A stream object for sending data to the client.

<a id="Discussion"></a>

## Discussion

When you publish a service, if you set the [listenForConnections](../netservice/options/listenforconnections.md) flag in the service options, the service object accepts connections on behalf of your app. Later, when a client connects to that service, the service object calls this method to provide the app with a pair of streams for communicating with that client.

# netService:didAcceptConnectionWithInputStream:outputStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Called when a client connects to a service managed by Bonjour.

## Declaration

```objectivec
- (void) netService:(NSNetService *) sender didAcceptConnectionWithInputStream:(NSInputStream *) inputStream outputStream:(NSOutputStream *) outputStream;
```

## Parameters

- `sender`: The net service object that the client connected to.
- `inputStream`: A stream object for receiving data from the client.
- `outputStream`: A stream object for sending data to the client.

<a id="Discussion"></a>

## Discussion

When you publish a service, if you set the [NSNetServiceListenForConnections](../netservice/options/listenforconnections.md) flag in the service options, the service object accepts connections on behalf of your app. Later, when a client connects to that service, the service object calls this method to provide the app with a pair of streams for communicating with that client.
