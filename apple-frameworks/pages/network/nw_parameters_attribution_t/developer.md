> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_attribution_t/developer](https://developer.apple.com/documentation/network/nw_parameters_attribution_t/developer)

# nw_parameters_attribution_t.developer (Swift)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A developer-initiated network request.

## Declaration

```swift
case developer
```

<a id="Discussion"></a>

## Discussion

Use this value for the `attribution` parameter of a call to the [nw_parameters_get_attribution(\_:)](../nw_parameters_get_attribution%28__%29.md) method when creating a network request for any purpose other than when the user explicitly accesses a link. This includes requests that your app makes to get user data. This is the default value.

For cases where the user enters a URL, like in the navigation bar of a web browser, or taps or clicks a URL to load the content it represents, use the [nw_parameters_attribution_t.user](user.md) value instead.

## See Also

### Request Sources

- [nw_parameters_attribution_t.user](user.md): The user explicitly directs the app to make a network request.

# nw_parameters_attribution_developer (Objective-C)

**Framework:** Network  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A developer-initiated network request.

## Declaration

```objectivec
nw_parameters_attribution_developer
```

<a id="Discussion"></a>

## Discussion

Use this value for the `attribution` parameter of a call to the [nw_parameters_get_attribution](../nw_parameters_get_attribution%28__%29.md) method when creating a network request for any purpose other than when the user explicitly accesses a link. This includes requests that your app makes to get user data. This is the default value.

For cases where the user enters a URL, like in the navigation bar of a web browser, or taps or clicks a URL to load the content it represents, use the [nw_parameters_attribution_user](user.md) value instead.

## See Also

### Request Sources

- [nw_parameters_attribution_user](user.md): The user explicitly directs the app to make a network request.
