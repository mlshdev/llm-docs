> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/networkservicetype](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/networkservicetype)

# networkServiceType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type of network service for all tasks within network sessions to enable Cellular Network Slicing.

## Declaration

```swift
var networkServiceType: NSURLRequest.NetworkServiceType { get set }
```

<a id="Discussion"></a>

## Discussion

To enable Cellular Network Slicing, you need to set the appropriate entitlements and properties.

Set the entitlements in your property list for [5G Network Slicing App Category](../../bundleresources/entitlements/com.apple.developer.networking.slicing.appcategory.md) and [5G Network Slicing Traffic Category](../../bundleresources/entitlements/com.apple.developer.networking.slicing.trafficcategory.md). If you don’t entitle your app by specifying both these entitlements, your apps network connections won’t be using Cellular Network Slicing, even if supported by the carrier.

At the time of network flow creation, set this to the appropriate [NSURLRequest.NetworkServiceType](../nsurlrequest/networkservicetype-swift.enum.md) for your application type.

## See Also

### Setting general properties

- [identifier](identifier.md): The background session identifier of the configuration object.
- [httpAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [sharedContainerIdentifier](sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [waitsForConnectivity](waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](usesclassicloadingmode.md)

# networkServiceType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type of network service for all tasks within network sessions to enable Cellular Network Slicing.

## Declaration

```objectivec
@property NSURLRequestNetworkServiceType networkServiceType;
```

<a id="Discussion"></a>

## Discussion

To enable Cellular Network Slicing, you need to set the appropriate entitlements and properties.

Set the entitlements in your property list for [5G Network Slicing App Category](../../bundleresources/entitlements/com.apple.developer.networking.slicing.appcategory.md) and [5G Network Slicing Traffic Category](../../bundleresources/entitlements/com.apple.developer.networking.slicing.trafficcategory.md). If you don’t entitle your app by specifying both these entitlements, your apps network connections won’t be using Cellular Network Slicing, even if supported by the carrier.

At the time of network flow creation, set this to the appropriate [NSURLRequestNetworkServiceType](../nsurlrequest/networkservicetype-swift.enum.md) for your application type.

## See Also

### Setting general properties

- [identifier](identifier.md): The background session identifier of the configuration object.
- [HTTPAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [sharedContainerIdentifier](sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [waitsForConnectivity](waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](usesclassicloadingmode.md)
