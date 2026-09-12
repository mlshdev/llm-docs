> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/categorydefaulterror/code/ratelimited](https://developer.apple.com/documentation/uikit/uiapplication/categorydefaulterror/code/ratelimited)

# UIApplication.CategoryDefaultError.Code.rateLimited (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+

The system didn’t determine if your app is the default in a category because the app made the request too many times.

## Declaration

```swift
case rateLimited
```

<a id="Discussion"></a>

## Discussion

When you receive an error with this code, the error’s user info dictionary contains these keys:

- **[statusLastProvidedDateErrorKey](../statuslastprovideddateerrorkey.md)**: The date at which the app most recently received a result indicating whether it’s the default app in a category.
- **[retryAvailableDateErrorKey](../retryavailabledateerrorkey.md)**: The date at which the app can next request an updated response.

# UIApplicationCategoryDefaultErrorRateLimited (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+

The system didn’t determine if your app is the default in a category because the app made the request too many times.

## Declaration

```objectivec
UIApplicationCategoryDefaultErrorRateLimited
```

<a id="Discussion"></a>

## Discussion

When you receive an error with this code, the error’s user info dictionary contains these keys:

- **[statusLastProvidedDateErrorKey](../statuslastprovideddateerrorkey.md)**: The date at which the app most recently received a result indicating whether it’s the default app in a category.
- **[retryAvailableDateErrorKey](../retryavailabledateerrorkey.md)**: The date at which the app can next request an updated response.
