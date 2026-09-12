> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/waitsforconnectivity](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/waitsforconnectivity)

# waitsForConnectivity (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.

## Declaration

```swift
var waitsForConnectivity: Bool { get set }
```

## Mentioned In

- [Fetching website data into memory](../fetching-website-data-into-memory.md)

<a id="Discussion"></a>

## Discussion

Connectivity might be temporarily unavailable for several reasons. For example, a device might only have a cellular connection when [allowsCellularAccess](allowscellularaccess.md) is set to `false`, or the device might require a VPN connection but none is available. If the value of this property is `true` and sufficient connectivity is unavailable, the session calls the [urlSession(\_:taskIsWaitingForConnectivity:)](../urlsessiontaskdelegate/urlsession%28__taskiswaitingforconnectivity_%29.md) method of [URLSessionTaskDelegate](../urlsessiontaskdelegate.md) and waits for connectivity. When connectivity becomes available, the task begins its work and ultimately calls the delegate or completion handler as usual.

If the value of the property is `false` and connectivity is unavailable, the connection fails immediately with an error, such as [NSURLErrorNotConnectedToInternet](../nsurlerrornotconnectedtointernet-swift.var.md).

This property is relevant only during the establishment of a connection. If a connection is established and then drops, the completion handler or delegate receives an error, such as [NSURLErrorNetworkConnectionLost](../nsurlerrornetworkconnectionlost-swift.var.md). For help dealing with dropped connections, see [Handling “The network connection was lost” Errors](https://developer.apple.com/library/archive/qa/qa1941/_index.html#//apple_ref/doc/uid/DTS40017602).

This property is ignored by background sessions, which always wait for connectivity.

## See Also

### Setting general properties

- [identifier](identifier.md): The background session identifier of the configuration object.
- [httpAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [sharedContainerIdentifier](sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [usesClassicLoadingMode](usesclassicloadingmode.md)

# waitsForConnectivity (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.

## Declaration

```objectivec
@property BOOL waitsForConnectivity;
```

## Mentioned In

- [Fetching website data into memory](../fetching-website-data-into-memory.md)

<a id="Discussion"></a>

## Discussion

Connectivity might be temporarily unavailable for several reasons. For example, a device might only have a cellular connection when [allowsCellularAccess](allowscellularaccess.md) is set to `false`, or the device might require a VPN connection but none is available. If the value of this property is `true` and sufficient connectivity is unavailable, the session calls the [URLSession:taskIsWaitingForConnectivity:](../urlsessiontaskdelegate/urlsession%28__taskiswaitingforconnectivity_%29.md) method of [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md) and waits for connectivity. When connectivity becomes available, the task begins its work and ultimately calls the delegate or completion handler as usual.

If the value of the property is `false` and connectivity is unavailable, the connection fails immediately with an error, such as [NSURLErrorNotConnectedToInternet](../nsurlerrornotconnectedtointernet-swift.var.md).

This property is relevant only during the establishment of a connection. If a connection is established and then drops, the completion handler or delegate receives an error, such as [NSURLErrorNetworkConnectionLost](../nsurlerrornetworkconnectionlost-swift.var.md). For help dealing with dropped connections, see [Handling “The network connection was lost” Errors](https://developer.apple.com/library/archive/qa/qa1941/_index.html#//apple_ref/doc/uid/DTS40017602).

This property is ignored by background sessions, which always wait for connectivity.

## See Also

### Setting general properties

- [identifier](identifier.md): The background session identifier of the configuration object.
- [HTTPAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [sharedContainerIdentifier](sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [usesClassicLoadingMode](usesclassicloadingmode.md)
