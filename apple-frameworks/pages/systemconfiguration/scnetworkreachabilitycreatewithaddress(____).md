> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilitycreatewithaddress(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitycreatewithaddress(_:_:))

# SCNetworkReachabilityCreateWithAddress(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Creates a reachability reference to the specified network address.

## Declaration

```swift
func SCNetworkReachabilityCreateWithAddress(_ allocator: CFAllocator?, _ address: UnsafePointer<sockaddr>) -> SCNetworkReachability?
```

## Parameters

- `allocator`: The allocator to use. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `address`: The address of the desired host. The value of this parameter is copied into the new object.

<a id="return-value"></a>

## Return Value

A new immutable reachability reference. You must release the returned value.

<a id="Discussion"></a>

## Discussion

You can use the reachability reference returned by this function to monitor the reachability of the target host.

## See Also

### Creating a Reachability Reference

- [SCNetworkReachabilityCreateWithAddressPair(\_:\_:\_:)](scnetworkreachabilitycreatewithaddresspair%28______%29.md): Deprecated. Creates a reachability reference to the specified network address.
- [SCNetworkReachabilityCreateWithName(\_:\_:)](scnetworkreachabilitycreatewithname%28____%29.md): Deprecated. Creates a reachability reference to the specified network host or node name.

# SCNetworkReachabilityCreateWithAddress (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Creates a reachability reference to the specified network address.

## Declaration

```objectivec
SCNetworkReachabilityRefSCNetworkReachabilityCreateWithAddress(CFAllocatorRef allocator, const struct sockaddr *address);
```

## Parameters

- `allocator`: The allocator to use. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `address`: The address of the desired host. The value of this parameter is copied into the new object.

<a id="return-value"></a>

## Return Value

A new immutable reachability reference. You must release the returned value.

<a id="Discussion"></a>

## Discussion

You can use the reachability reference returned by this function to monitor the reachability of the target host.

## See Also

### Creating a Reachability Reference

- [SCNetworkReachabilityCreateWithAddressPair](scnetworkreachabilitycreatewithaddresspair%28______%29.md): Deprecated. Creates a reachability reference to the specified network address.
- [SCNetworkReachabilityCreateWithName](scnetworkreachabilitycreatewithname%28____%29.md): Deprecated. Creates a reachability reference to the specified network host or node name.
