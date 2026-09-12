> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager/slice/networkinterfacename](https://developer.apple.com/documentation/coretelephony/ctslicingmanager/slice/networkinterfacename)

# networkInterfaceName

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

A network interface name associated with the slice.

## Declaration

```swift
let networkInterfaceName: String
```

<a id="discussion"></a>

## Discussion

This property contains the system name of the network interface that handles traffic for this network slice, such as “pdp_ip0”.

## See Also

### Representing slice properties

- [appCategory](appcategory.md): An application category associated with this network slice.
- [trafficClass](trafficclass.md): A traffic class that routes traffic through this network slice.
