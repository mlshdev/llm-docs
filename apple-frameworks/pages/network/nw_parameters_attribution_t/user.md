> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_attribution_t/user](https://developer.apple.com/documentation/network/nw_parameters_attribution_t/user)

# nw_parameters_attribution_t.user (Swift)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The user explicitly directs the app to make a network request.

## Declaration

```swift
case user
```

## Mentioned In

- [Indicating the source of network activity](../indicating-the-source-of-network-activity.md)

<a id="Discussion"></a>

## Discussion

Use this value for the `attribution` parameter of a call to the [nw_parameters_get_attribution(\_:)](../nw_parameters_get_attribution%28__%29.md) method when constructing a network request that satisfies a user request to access an explicit, unmodified URL. In all other cases, use the [nw_parameters_attribution_t.developer](developer.md) value instead.

## See Also

### Request Sources

- [nw_parameters_attribution_t.developer](developer.md): A developer-initiated network request.

# nw_parameters_attribution_user (Objective-C)

**Framework:** Network  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The user explicitly directs the app to make a network request.

## Declaration

```objectivec
nw_parameters_attribution_user
```

## Mentioned In

- [Indicating the source of network activity](../indicating-the-source-of-network-activity.md)

<a id="Discussion"></a>

## Discussion

Use this value for the `attribution` parameter of a call to the [nw_parameters_get_attribution](../nw_parameters_get_attribution%28__%29.md) method when constructing a network request that satisfies a user request to access an explicit, unmodified URL. In all other cases, use the [nw_parameters_attribution_developer](developer.md) value instead.

## See Also

### Request Sources

- [nw_parameters_attribution_developer](developer.md): A developer-initiated network request.
