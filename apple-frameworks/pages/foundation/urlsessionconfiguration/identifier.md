> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/identifier](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/identifier)

# identifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The background session identifier of the configuration object.

## Declaration

```swift
var identifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set only when you use the [background(withIdentifier:)](background%28withidentifier_%29.md) method to create the configuration object. The string uniquely identifies a background session object. In iOS, you use this string in cases where the app was terminated while transfers were occurring in the background. When the app relaunches, it uses the string to recreate the configuration and session objects associated with the transfers.

## See Also

### Setting general properties

- [httpAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [sharedContainerIdentifier](sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [waitsForConnectivity](waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](usesclassicloadingmode.md)

# identifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The background session identifier of the configuration object.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set only when you use the [backgroundSessionConfigurationWithIdentifier:](background%28withidentifier_%29.md) method to create the configuration object. The string uniquely identifies a background session object. In iOS, you use this string in cases where the app was terminated while transfers were occurring in the background. When the app relaunches, it uses the string to recreate the configuration and session objects associated with the transfers.

## See Also

### Setting general properties

- [HTTPAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [sharedContainerIdentifier](sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [waitsForConnectivity](waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](usesclassicloadingmode.md)
