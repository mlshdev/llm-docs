> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationshouldrequesthealthauthorization(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationshouldrequesthealthauthorization(_:))

# applicationShouldRequestHealthAuthorization(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate when your app should ask the user for access to his or her HealthKit data.

## Declaration

```swift
optional func applicationShouldRequestHealthAuthorization(_ application: UIApplication)
```

## Parameters

- `application`: Your singleton app object.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, call the [handleAuthorizationForExtension(completion:)](../../healthkit/hkhealthstore/handleauthorizationforextension%28completion_%29.md) method of the [HKHealthStore](../../healthkit/hkhealthstore.md) object.

# applicationShouldRequestHealthAuthorization: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate when your app should ask the user for access to his or her HealthKit data.

## Declaration

```objectivec
- (void) applicationShouldRequestHealthAuthorization:(UIApplication *) application;
```

## Parameters

- `application`: Your singleton app object.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, call the [handleAuthorizationForExtensionWithCompletion:](../../healthkit/hkhealthstore/handleauthorizationforextension%28completion_%29.md) method of the [HKHealthStore](../../healthkit/hkhealthstore.md) object.
