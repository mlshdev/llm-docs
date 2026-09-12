> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/attribution-swift.enum/developer](https://developer.apple.com/documentation/foundation/nsurlrequest/attribution-swift.enum/developer)

# NSURLRequest.Attribution.developer (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A developer-initiated network request.

## Declaration

```swift
case developer
```

<a id="Discussion"></a>

## Discussion

Use this value for the [attribution](../../urlrequest/attribution-swift.property.md) parameter of a URL request that your app makes for any purpose other than when the user explicitly accesses a link. This includes requests that your app makes to get user data. This is the default value.

For cases where the user enters a URL, like in the navigation bar of a web browser, or taps or clicks a URL to load the content it represents, use the [NSURLRequest.Attribution.user](user.md) value instead.

## See Also

### Request sources

- [NSURLRequest.Attribution.user](user.md): The user explicitly directs the app to make a network request.

# NSURLRequestAttributionDeveloper (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A developer-initiated network request.

## Declaration

```objectivec
NSURLRequestAttributionDeveloper
```

<a id="Discussion"></a>

## Discussion

Use this value for the [attribution](../../urlrequest/attribution-swift.property.md) parameter of a URL request that your app makes for any purpose other than when the user explicitly accesses a link. This includes requests that your app makes to get user data. This is the default value.

For cases where the user enters a URL, like in the navigation bar of a web browser, or taps or clicks a URL to load the content it represents, use the [NSURLRequestAttributionUser](user.md) value instead.

## See Also

### Request sources

- [NSURLRequestAttributionUser](user.md): The user explicitly directs the app to make a network request.
