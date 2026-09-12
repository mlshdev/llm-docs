> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_attribution_t](https://developer.apple.com/documentation/network/nw_parameters_attribution_t)

# nw_parameters_attribution_t (Swift)

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The entities that can make a network request.

## Declaration

```swift
enum nw_parameters_attribution_t
```

<a id="overview"></a>

## Overview

Use one of these values when setting the `attribution` parameter of a network request with the [nw_parameters_get_attribution(\_:)](nw_parameters_get_attribution%28__%29.md) method. If you don’t set a value, the system assumes [nw_parameters_attribution_t.developer](nw_parameters_attribution_t/developer.md).

## Topics

### Request Sources

- [nw_parameters_attribution_t.developer](nw_parameters_attribution_t/developer.md): A developer-initiated network request.
- [nw_parameters_attribution_t.user](nw_parameters_attribution_t/user.md): The user explicitly directs the app to make a network request.

### Initializers

- [init(rawValue:)](nw_parameters_attribution_t/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Traffic Attribution

- [Inspecting app activity data](inspecting-app-activity-data.md): Verify that your app accesses only the user data and network resources that you expect it to access.
- [Indicating the source of network activity](indicating-the-source-of-network-activity.md): Control whether the App Privacy Report attributes network traffic to the app or to the user.
- [nw_parameters_set_attribution(\_:\_:)](nw_parameters_set_attribution%28____%29.md): Sets a flag that indicates whether the network request originates from the developer or the user.
- [nw_parameters_get_attribution(\_:)](nw_parameters_get_attribution%28__%29.md): Gets a flag that indicates whether the network request originates from the developer or the user.

# nw_parameters_attribution_t (Objective-C)

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The entities that can make a network request.

## Declaration

```objectivec
enum nw_parameters_attribution_t : uint8_t;
```

<a id="overview"></a>

## Overview

Use one of these values when setting the `attribution` parameter of a network request with the [nw_parameters_get_attribution](nw_parameters_get_attribution%28__%29.md) method. If you don’t set a value, the system assumes [nw_parameters_attribution_developer](nw_parameters_attribution_t/developer.md).

## Topics

### Request Sources

- [nw_parameters_attribution_developer](nw_parameters_attribution_t/developer.md): A developer-initiated network request.
- [nw_parameters_attribution_user](nw_parameters_attribution_t/user.md): The user explicitly directs the app to make a network request.

## See Also

### Traffic Attribution

- [Inspecting app activity data](inspecting-app-activity-data.md): Verify that your app accesses only the user data and network resources that you expect it to access.
- [Indicating the source of network activity](indicating-the-source-of-network-activity.md): Control whether the App Privacy Report attributes network traffic to the app or to the user.
- [nw_parameters_set_attribution](nw_parameters_set_attribution%28____%29.md): Sets a flag that indicates whether the network request originates from the developer or the user.
- [nw_parameters_get_attribution](nw_parameters_get_attribution%28__%29.md): Gets a flag that indicates whether the network request originates from the developer or the user.
