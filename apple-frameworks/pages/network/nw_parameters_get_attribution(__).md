> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_get_attribution(_:)](https://developer.apple.com/documentation/network/nw_parameters_get_attribution(_:))

# nw_parameters_get_attribution(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Gets a flag that indicates whether the network request originates from the developer or the user.

## Declaration

```swift
func nw_parameters_get_attribution(_ parameters: nw_parameters_t) -> nw_parameters_attribution_t
```

## Parameters

- `parameters`: The network parameters to read from.

<a id="return-value"></a>

## Return Value

An indication of whether the network request comes from the developer or from the user.

## See Also

### Traffic Attribution

- [Inspecting app activity data](inspecting-app-activity-data.md): Verify that your app accesses only the user data and network resources that you expect it to access.
- [Indicating the source of network activity](indicating-the-source-of-network-activity.md): Control whether the App Privacy Report attributes network traffic to the app or to the user.
- [nw_parameters_set_attribution(\_:\_:)](nw_parameters_set_attribution%28____%29.md): Sets a flag that indicates whether the network request originates from the developer or the user.
- [nw_parameters_attribution_t](nw_parameters_attribution_t.md): The entities that can make a network request.

# nw_parameters_get_attribution (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Gets a flag that indicates whether the network request originates from the developer or the user.

## Declaration

```objectivec
nw_parameters_attribution_t nw_parameters_get_attribution(nw_parameters_t parameters);
```

## Parameters

- `parameters`: The network parameters to read from.

<a id="return-value"></a>

## Return Value

An indication of whether the network request comes from the developer or from the user.

## See Also

### Traffic Attribution

- [Inspecting app activity data](inspecting-app-activity-data.md): Verify that your app accesses only the user data and network resources that you expect it to access.
- [Indicating the source of network activity](indicating-the-source-of-network-activity.md): Control whether the App Privacy Report attributes network traffic to the app or to the user.
- [nw_parameters_set_attribution](nw_parameters_set_attribution%28____%29.md): Sets a flag that indicates whether the network request originates from the developer or the user.
- [nw_parameters_attribution_t](nw_parameters_attribution_t.md): The entities that can make a network request.
