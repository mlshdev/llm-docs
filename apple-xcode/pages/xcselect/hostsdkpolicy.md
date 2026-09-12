> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcselect/hostsdkpolicy](https://developer.apple.com/documentation/xcselect/hostsdkpolicy)

# HostSDKPolicy (Swift)

**Framework:** xcselect  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

Describe the preferred policy for locating an SDK appropriate for building host content.

## Declaration

```swift
enum HostSDKPolicy
```

## Topics

### Enumeration Cases

- [HostSDKPolicy.latest](hostsdkpolicy/latest.md): Return the latest macOS SDK available.
- [HostSDKPolicy.matchingOnly](hostsdkpolicy/matchingonly.md): Return an SDK that matches the host’s major OS version.
- [HostSDKPolicy.matchingPreferred](hostsdkpolicy/matchingpreferred.md): Return an SDK that matches the host’s major OS version if it is available, otherwise return the latest macOS SDK available.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/xcselect/hostsdkpolicy/init%28rawvalue:%29)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# xcselect_host_sdk_policy_t (Objective-C)

**Framework:** xcselect  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

Describe the preferred policy for locating an SDK appropriate for building host content.

## Declaration

```objectivec
enum xcselect_host_sdk_policy_t : uint32_t;
```

## Topics

### Enumeration Cases

- [XCSELECT_HOST_SDK_POLICY_LATEST](hostsdkpolicy/latest.md): Return the latest macOS SDK available.
- [XCSELECT_HOST_SDK_POLICY_MATCHING_ONLY](hostsdkpolicy/matchingonly.md): Return an SDK that matches the host’s major OS version.
- [XCSELECT_HOST_SDK_POLICY_MATCHING_PREFERRED](hostsdkpolicy/matchingpreferred.md): Return an SDK that matches the host’s major OS version if it is available, otherwise return the latest macOS SDK available.
