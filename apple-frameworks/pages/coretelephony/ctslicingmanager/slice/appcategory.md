> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager/slice/appcategory](https://developer.apple.com/documentation/coretelephony/ctslicingmanager/slice/appcategory)

# appCategory

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

An application category associated with this network slice.

## Declaration

```swift
let appCategory: CTSlicingManager.AppCategory
```

<a id="discussion"></a>

## Discussion

This property identifies which type of application traffic the slice optimizes for, such as gaming, communication, or streaming.

## See Also

### Representing slice properties

- [trafficClass](trafficclass.md): A traffic class that routes traffic through this network slice.
- [networkInterfaceName](networkinterfacename.md): A network interface name associated with the slice.
