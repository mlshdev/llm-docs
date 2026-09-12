> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/sharedcontaineridentifier](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/sharedcontaineridentifier)

# sharedContainerIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the shared container into which files in background URL sessions should be downloaded.

## Declaration

```swift
var sharedContainerIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

To create a URL session for use by an app extension, set this property to a valid identifier for a container shared between the app extension and its containing app.

> **Important**

>  If you try to create a URL session from your app extension but fail to set this property to a valid value, the URL session is invalidated upon creation.

For information about app extensions, see [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## See Also

### Related Documentation

- [NSURLErrorBackgroundSessionRequiresSharedContainer](../nsurlerrorbackgroundsessionrequiressharedcontainer-swift.var.md): The shared container identifier of the URL session configuration is needed but hasn’t been set.

### Setting general properties

- [identifier](identifier.md): The background session identifier of the configuration object.
- [httpAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [waitsForConnectivity](waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](usesclassicloadingmode.md)

# sharedContainerIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the shared container into which files in background URL sessions should be downloaded.

## Declaration

```objectivec
@property (copy, nullable) NSString * sharedContainerIdentifier;
```

<a id="Discussion"></a>

## Discussion

To create a URL session for use by an app extension, set this property to a valid identifier for a container shared between the app extension and its containing app.

> **Important**

>  If you try to create a URL session from your app extension but fail to set this property to a valid value, the URL session is invalidated upon creation.

For information about app extensions, see [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## See Also

### Related Documentation

- [NSURLErrorBackgroundSessionRequiresSharedContainer](../nsurlerrorbackgroundsessionrequiressharedcontainer-c.enum.case.md): The shared container identifier of the URL session configuration is needed but hasn’t been set.

### Setting general properties

- [identifier](identifier.md): The background session identifier of the configuration object.
- [HTTPAdditionalHeaders](httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [waitsForConnectivity](waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](usesclassicloadingmode.md)
