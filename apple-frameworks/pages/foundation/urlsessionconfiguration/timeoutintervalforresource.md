> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/timeoutintervalforresource](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/timeoutintervalforresource)

# timeoutIntervalForResource (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum amount of time that a resource request should be allowed to take.

## Declaration

```swift
var timeoutIntervalForResource: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the resource timeout interval for all tasks within sessions based on this configuration. The resource timeout interval controls how long (in seconds) to wait for an entire resource to transfer before giving up. The resource timer starts when the request is initiated and counts until either the request completes or this timeout interval is reached, whichever comes first.

The default value is 7 days.

## See Also

### Setting general properties

- [identifier](identifier.md): The background session identifier of the configuration object.
- [httpAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [sharedContainerIdentifier](sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [waitsForConnectivity](waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](usesclassicloadingmode.md)

# timeoutIntervalForResource (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum amount of time that a resource request should be allowed to take.

## Declaration

```objectivec
@property NSTimeInterval timeoutIntervalForResource;
```

<a id="Discussion"></a>

## Discussion

This property determines the resource timeout interval for all tasks within sessions based on this configuration. The resource timeout interval controls how long (in seconds) to wait for an entire resource to transfer before giving up. The resource timer starts when the request is initiated and counts until either the request completes or this timeout interval is reached, whichever comes first.

The default value is 7 days.

## See Also

### Setting general properties

- [identifier](identifier.md): The background session identifier of the configuration object.
- [HTTPAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [sharedContainerIdentifier](sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [waitsForConnectivity](waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](usesclassicloadingmode.md)
