> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/attribution](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/attribution)

# attribution (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The entity that initiates the network request.

## Declaration

```swift
var attribution: NSURLRequest.Attribution { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t set this value, the system assumes a value of [NSURLRequest.Attribution.developer](../nsurlrequest/attribution-swift.enum/developer.md). Use this default value for any network request that your app makes that isn’t explicitly from the user. This includes requests that you make to your own server, even when you load user data. It also includes links that the user selects, but that you modify in any way — including by adding HTTP headers — before loading the content.

Set this value to [NSURLRequest.Attribution.user](../nsurlrequest/attribution-swift.enum/user.md) only for requests that the user explicitly makes, like when the user enters a URL or taps or clicks a URL that they can read, and only if your app loads and displays the data without altering the request.

## See Also

### Indicating the source of the request

- [NSURLRequest.Attribution](../nsurlrequest/attribution-swift.enum.md): The entities that can make a network request.

# attribution (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The entity that initiates the network request.

## Declaration

```objectivec
@property NSURLRequestAttribution attribution;
```

<a id="Discussion"></a>

## Discussion

If you don’t set this value, the system assumes a value of [NSURLRequestAttributionDeveloper](../nsurlrequest/attribution-swift.enum/developer.md). Use this default value for any network request that your app makes that isn’t explicitly from the user. This includes requests that you make to your own server, even when you load user data. It also includes links that the user selects, but that you modify in any way — including by adding HTTP headers — before loading the content.

Set this value to [NSURLRequestAttributionUser](../nsurlrequest/attribution-swift.enum/user.md) only for requests that the user explicitly makes, like when the user enters a URL or taps or clicks a URL that they can read, and only if your app loads and displays the data without altering the request.

## See Also

### Indicating the source of the request

- [NSURLRequestAttribution](../nsurlrequest/attribution-swift.enum.md): The entities that can make a network request.
