> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfstreampropertyallowexpensivenetworkaccess](https://developer.apple.com/documentation/cfnetwork/kcfstreampropertyallowexpensivenetworkaccess)

# kCFStreamPropertyAllowExpensiveNetworkAccess (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether connections may use a network interface that the system considers expensive.

## Declaration

```swift
let kCFStreamPropertyAllowExpensiveNetworkAccess: CFString
```

<a id="Discussion"></a>

## Discussion

The default value is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) and allows the use of expensive network interfaces. Set this property to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) to disallow the use of expensive network interfaces. For more information about expensive network interfaces, see [allowsExpensiveNetworkAccess](../foundation/urlsessionconfiguration/allowsexpensivenetworkaccess.md).

## See Also

### Constants

- [kCFHTTPVersion3_0](kcfhttpversion3_0.md): HTTP version 3.0.
- [kCFStreamNetworkServiceTypeAVStreaming](kcfstreamnetworkservicetypeavstreaming.md): A multimedia audio and video streaming service.
- [kCFStreamNetworkServiceTypeResponsiveAV](kcfstreamnetworkservicetyperesponsiveav.md): A responsive, time-sensitive, multimedia audio and video service.
- [kCFStreamNetworkServiceTypeResponsiveData](kcfstreamnetworkservicetyperesponsivedata.md): A responsive, time-sensitive data service.
- [kCFStreamPropertyAllowConstrainedNetworkAccess](kcfstreampropertyallowconstrainednetworkaccess.md): A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.
- [kCFStreamPropertyConnectionIsExpensive](kcfstreampropertyconnectionisexpensive.md): A Boolean value that indicates if the connection is using a network interface that the system considers expensive.

# kCFStreamPropertyAllowExpensiveNetworkAccess (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether connections may use a network interface that the system considers expensive.

## Declaration

```objectivec
extern CFStringRef const kCFStreamPropertyAllowExpensiveNetworkAccess;
```

<a id="Discussion"></a>

## Discussion

The default value is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) and allows the use of expensive network interfaces. Set this property to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) to disallow the use of expensive network interfaces. For more information about expensive network interfaces, see [allowsExpensiveNetworkAccess](../foundation/urlsessionconfiguration/allowsexpensivenetworkaccess.md).

## See Also

### Constants

- [kCFHTTPVersion3_0](kcfhttpversion3_0.md): HTTP version 3.0.
- [kCFStreamNetworkServiceTypeAVStreaming](kcfstreamnetworkservicetypeavstreaming.md): A multimedia audio and video streaming service.
- [kCFStreamNetworkServiceTypeResponsiveAV](kcfstreamnetworkservicetyperesponsiveav.md): A responsive, time-sensitive, multimedia audio and video service.
- [kCFStreamNetworkServiceTypeResponsiveData](kcfstreamnetworkservicetyperesponsivedata.md): A responsive, time-sensitive data service.
- [kCFStreamPropertyAllowConstrainedNetworkAccess](kcfstreampropertyallowconstrainednetworkaccess.md): A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.
- [kCFStreamPropertyConnectionIsExpensive](kcfstreampropertyconnectionisexpensive.md): A Boolean value that indicates if the connection is using a network interface that the system considers expensive.
