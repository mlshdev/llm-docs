> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilitygetflags(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitygetflags(_:_:))

# SCNetworkReachabilityGetFlags(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Determines if the specified network target is reachable using the current network configuration.

## Declaration

```swift
func SCNetworkReachabilityGetFlags(_ target: SCNetworkReachability, _ flags: UnsafeMutablePointer<SCNetworkReachabilityFlags>) -> Bool
```

## Parameters

- `target`: The network reference associated with the address or name to be checked for reachability.
- `flags`: A pointer to memory that, on output, is filled with flags that describe the reachability of the specified target. (See [SCNetworkReachabilityFlags](scnetworkreachabilityflags.md) for possible values.)

<a id="return-value"></a>

## Return Value

`TRUE` if the flags are valid; `FALSE` if the status could not be determined.

# SCNetworkReachabilityGetFlags (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Determines if the specified network target is reachable using the current network configuration.

## Declaration

```objectivec
Boolean SCNetworkReachabilityGetFlags(SCNetworkReachabilityRef target, SCNetworkReachabilityFlags *flags);
```

## Parameters

- `target`: The network reference associated with the address or name to be checked for reachability.
- `flags`: A pointer to memory that, on output, is filled with flags that describe the reachability of the specified target. (See [SCNetworkReachabilityFlags](scnetworkreachabilityflags.md) for possible values.)

<a id="return-value"></a>

## Return Value

`TRUE` if the flags are valid; `FALSE` if the status could not be determined.
