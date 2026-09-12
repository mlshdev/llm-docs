> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkinterfacerefreshconfiguration](https://developer.apple.com/documentation/systemconfiguration/scnetworkinterfacerefreshconfiguration)

# SCNetworkInterfaceRefreshConfiguration

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.5)

Sends a notification to interested configuration agents to have them immediately retry their configuration over a particular network interface.

> Use the [SCNetworkInterfaceForceConfigurationRefresh](scnetworkinterfaceforceconfigurationrefresh%28__%29.md) function instead.

## Declaration

```objectivec
Boolean SCNetworkInterfaceRefreshConfiguration(CFStringRef ifName);
```

## Parameters

- `ifName`: The BSD name of the network interface, such as `CFSTR("en0")`.

<a id="return-value"></a>

## Return Value

`TRUE` if the notification was sent; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

This function must be invoked by root (in other words, the user with uid equal to `0`).

## See Also

### Group

- [SCNetworkCheckReachabilityByAddress](scnetworkcheckreachabilitybyaddress.md): Deprecated. Determines whether the specified network address is reachable using the current network configuration.
- [SCNetworkCheckReachabilityByName](scnetworkcheckreachabilitybyname.md): Deprecated. Determines whether the specified network host or node name is reachable using the current network configuration.
