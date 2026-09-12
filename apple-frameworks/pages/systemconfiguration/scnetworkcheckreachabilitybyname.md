> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkcheckreachabilitybyname](https://developer.apple.com/documentation/systemconfiguration/scnetworkcheckreachabilitybyname)

# SCNetworkCheckReachabilityByName

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.6)

Determines whether the specified network host or node name is reachable using the current network configuration.

> See the discussion for a coding alternative.

## Declaration

```objectivec
Boolean SCNetworkCheckReachabilityByName(const char *nodename, SCNetworkConnectionFlags *flags);
```

## Parameters

- `nodename`: The node name of the desired host. This is the same name that would be passed to the gethostbyname(3) or getaddrinfo(3) functions.
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
target = SCNetworkReachabilityCreateWithName(NULL, name);
ok = SCNetworkReachabilityGetFlags(target, &flags);
CFRelease(target);
```

## See Also

### Group

- [SCNetworkCheckReachabilityByAddress](scnetworkcheckreachabilitybyaddress.md): Deprecated. Determines whether the specified network address is reachable using the current network configuration.
- [SCNetworkInterfaceRefreshConfiguration](scnetworkinterfacerefreshconfiguration.md): Deprecated. Sends a notification to interested configuration agents to have them immediately retry their configuration over a particular network interface.
