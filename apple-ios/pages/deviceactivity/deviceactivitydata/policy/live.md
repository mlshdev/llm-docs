> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitydata/policy/live](https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/policy/live)

# DeviceActivityData.Policy.live

**Framework:** Device Activity  
**Kind:** Case  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A policy that fetches live device activity data.

## Declaration

```swift
case live
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  A request to fetch live data may return cached data if the system updated the cache recently.

## See Also

### Fetching policies

- [DeviceActivityData.Policy.cached](cached.md): A policy that fetches device activity data from the cache.
