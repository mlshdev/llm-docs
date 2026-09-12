> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beavailability/iseligible(for:completionhandler:)](https://developer.apple.com/documentation/browserkit/beavailability/iseligible(for:completionhandler:))

# isEligible(for:completionHandler:) (Swift)

**Framework:** BrowserKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Tests whether the device is eligible to use an app that contains an alternative browser engine.

## Declaration

```swift
class func isEligible(for context: BEAvailability.Context, completionHandler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
class func isEligible(for context: BEAvailability.Context) async throws -> Bool
```

## Parameters

- `context`: The type of app for which you test eligibility.
- `completionHandler`: A closure that receives the result of the eligibility check, and an error if any occurs.

<a id="Discussion"></a>

## Discussion

The completion handler in the synchronous version of this method receives `true` as its first parameter if the device is eligible to run a version of the app that contains an alternative browser engine; otherwise, it receives `false`. The second parameter that the completion handler receives is an error if any occurs; otherwise, it’s `nil`.

The `async` version of this method returns `true` if the device is eligible to run a version of the app that contains an alternative browser engine; otherwise, it returns `false`. The method throws an error if it encounters one.

To use the [BEAvailability.Context.webBrowser](context/webbrowser.md) context to test whether the device is eligible to use a web browser with an alternative browser engine, your app needs to have the [com.apple.developer.web-browser](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.web-browser) entitlement. For information on adopting the web browser entitlement, see [Preparing your app to be the default web browser](https://developer.apple.com/documentation/xcode/preparing-your-app-to-be-the-default-browser).

# isEligibleForContext:completionHandler: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Tests whether the device is eligible to use an app that contains an alternative browser engine.

## Declaration

```objectivec
+ (void) isEligibleForContext:(BEEligibilityContext) context completionHandler:(void (^)(BOOL eligible, NSError *error)) completionHandler;
```

## Parameters

- `context`: The type of app for which you test eligibility.
- `completionHandler`: A closure that receives the result of the eligibility check, and an error if any occurs.

<a id="Discussion"></a>

## Discussion

The completion handler in the synchronous version of this method receives `true` as its first parameter if the device is eligible to run a version of the app that contains an alternative browser engine; otherwise, it receives `false`. The second parameter that the completion handler receives is an error if any occurs; otherwise, it’s `nil`.

The `async` version of this method returns `true` if the device is eligible to run a version of the app that contains an alternative browser engine; otherwise, it returns `false`. The method throws an error if it encounters one.

To use the [BEEligibilityContextWebBrowser](context/webbrowser.md) context to test whether the device is eligible to use a web browser with an alternative browser engine, your app needs to have the [com.apple.developer.web-browser](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.web-browser) entitlement. For information on adopting the web browser entitlement, see [Preparing your app to be the default web browser](https://developer.apple.com/documentation/xcode/preparing-your-app-to-be-the-default-browser).
