> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilitycallback](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitycallback)

# SCNetworkReachabilityCallBack (Swift)

**Framework:** System Configuration  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Type of callback function used when the reachability of a network address or name changes.

## Declaration

```swift
typealias SCNetworkReachabilityCallBack = (SCNetworkReachability, SCNetworkReachabilityFlags, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `target`: The network target being monitored for changes.
- `flags`: The flags representing the reachability status of the network address or name (see [SCNetworkReachabilityFlags](scnetworkreachabilityflags.md) for information about these flags).
- `info`: A C pointer to a user-specified block of data.

# SCNetworkReachabilityCallBack (Objective-C)

**Framework:** System Configuration  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Type of callback function used when the reachability of a network address or name changes.

## Declaration

```objectivec
typedef void (*)(const struct __SCNetworkReachability *, enum SCNetworkReachabilityFlags, void *) SCNetworkReachabilityCallBack;
```

## Parameters

- `target`: The network target being monitored for changes.
- `flags`: The flags representing the reachability status of the network address or name (see [SCNetworkReachabilityFlags](scnetworkreachabilityflags.md) for information about these flags).
- `info`: A C pointer to a user-specified block of data.
