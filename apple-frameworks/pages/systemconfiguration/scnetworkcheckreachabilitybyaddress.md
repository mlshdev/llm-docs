> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkcheckreachabilitybyaddress](https://developer.apple.com/documentation/systemconfiguration/scnetworkcheckreachabilitybyaddress)

# SCNetworkCheckReachabilityByAddress

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.6)

Determines whether the specified network address is reachable using the current network configuration.

> See the discussion for a coding alternative.

## Declaration

```objectivec
Boolean SCNetworkCheckReachabilityByAddress(const struct sockaddr *address, socklen_t addrlen, SCNetworkConnectionFlags *flags);
```

## Parameters

- `address`: The network address of the desired host.
- `addrlen`: The length, in bytes, of the address.
- `flags`: A pointer to memory that, on output, will be filled with a set of [SCNetworkConnectionFlags](scnetworkconnectionflags.md) values detailing the reachability of the specified address

<a id="return-value"></a>

## Return Value

`TRUE` if the network connection flags are valid; `FALSE` if the status could not be determined.

<a id="Discussion"></a>

## Discussion

This function is deprecated, but you can get equivalent results using the following code:

```objc
SCNetworkReachabilityRef target;
SCNetworkConnectionFlags flags = 0;
Boolean ok;
target = SCNetworkReachabilityCreateWithAddress(NULL, address);
ok = SCNetworkReachabilityGetFlags(target, &flags);
CFRelease(target);
```

## See Also

### Group

- [SCNetworkCheckReachabilityByName](scnetworkcheckreachabilitybyname.md): Deprecated. Determines whether the specified network host or node name is reachable using the current network configuration.
- [SCNetworkInterfaceRefreshConfiguration](scnetworkinterfacerefreshconfiguration.md): Deprecated. Sends a notification to interested configuration agents to have them immediately retry their configuration over a particular network interface.
