> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilitycreatewithaddresspair(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitycreatewithaddresspair(_:_:_:))

# SCNetworkReachabilityCreateWithAddressPair(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Creates a reachability reference to the specified network address.

## Declaration

```swift
func SCNetworkReachabilityCreateWithAddressPair(_ allocator: CFAllocator?, _ localAddress: UnsafePointer<sockaddr>?, _ remoteAddress: UnsafePointer<sockaddr>?) -> SCNetworkReachability?
```

## Parameters

- `allocator`: The allocator to use. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `localAddress`: The local address associated with a network connection. If `NULL`, only the remote address is of interest. The value of this parameter is copied into the new object.
- `remoteAddress`: The remote address associated with a network connection. If `NULL`, only the local address is of interest. The value of this parameter is copied into the new object.

<a id="return-value"></a>

## Return Value

A new immutable reachability reference. You must release the returned value.

<a id="Discussion"></a>

## Discussion

You can use the reachability reference returned by this function to monitor the reachability of the target host.

## See Also

### Creating a Reachability Reference

- [SCNetworkReachabilityCreateWithAddress(\_:\_:)](scnetworkreachabilitycreatewithaddress%28____%29.md): Deprecated. Creates a reachability reference to the specified network address.
- [SCNetworkReachabilityCreateWithName(\_:\_:)](scnetworkreachabilitycreatewithname%28____%29.md): Deprecated. Creates a reachability reference to the specified network host or node name.

# SCNetworkReachabilityCreateWithAddressPair (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Creates a reachability reference to the specified network address.

## Declaration

```objectivec
SCNetworkReachabilityRefSCNetworkReachabilityCreateWithAddressPair(CFAllocatorRef allocator, const struct sockaddr *localAddress, const struct sockaddr *remoteAddress);
```

## Parameters

- `allocator`: The allocator to use. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `localAddress`: The local address associated with a network connection. If `NULL`, only the remote address is of interest. The value of this parameter is copied into the new object.
- `remoteAddress`: The remote address associated with a network connection. If `NULL`, only the local address is of interest. The value of this parameter is copied into the new object.

<a id="return-value"></a>

## Return Value

A new immutable reachability reference. You must release the returned value.

<a id="Discussion"></a>

## Discussion

You can use the reachability reference returned by this function to monitor the reachability of the target host.

## See Also

### Creating a Reachability Reference

- [SCNetworkReachabilityCreateWithAddress](scnetworkreachabilitycreatewithaddress%28____%29.md): Deprecated. Creates a reachability reference to the specified network address.
- [SCNetworkReachabilityCreateWithName](scnetworkreachabilitycreatewithname%28____%29.md): Deprecated. Creates a reachability reference to the specified network host or node name.
