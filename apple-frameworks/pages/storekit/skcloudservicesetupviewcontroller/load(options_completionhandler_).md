> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicesetupviewcontroller/load(options:completionhandler:)](https://developer.apple.com/documentation/storekit/skcloudservicesetupviewcontroller/load(options:completionhandler:))

# load(options:completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0)

Loads the cloud service setup view with the specified options.

> Use the musicSubscriptionOffer(isPresented:options:onLoadCompletion:) SwiftUI View Modifier from MusicKit.

## Declaration

```swift
func load(options: [SKCloudServiceSetupOptionsKey : Any] = [:], completionHandler: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func load(options: [SKCloudServiceSetupOptionsKey : Any] = [:]) async throws -> Bool
```

## Parameters

- `options`: A key that identifies the type of setup the user needs to do. See [SKCloudServiceSetupOptionsKey](../skcloudservicesetupoptionskey.md) for possible values.
- `completionHandler`: A block that is called when the setup view has loaded. The block takes the following parameters:

  `result`

  A Boolean value that indicates whether the view controller has loaded the view and can be presented.

  `error`

  An error value that indicates the reason for failure. Possible values are [SKError.Code.unknown](../skerror/code/unknown.md), [SKError.Code.cloudServicePermissionDenied](../skerror/code/cloudservicepermissiondenied.md), and [SKError.Code.cloudServiceNetworkConnectionFailed](../skerror/code/cloudservicenetworkconnectionfailed.md).

## Mentioned In

- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)

<a id="Discussion"></a>

## Discussion

## See Also

### Loading the setup view

- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md): Allow eligible customers to subscribe to Apple Music.
- [SKCloudServiceSetupOptionsKey](../skcloudservicesetupoptionskey.md): Keys to specify the types of setup options for a cloud service.
- [SKArcadeService](../skarcadeservice.md)

# loadWithOptions:completionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0)

Loads the cloud service setup view with the specified options.

> Use the musicSubscriptionOffer(isPresented:options:onLoadCompletion:) SwiftUI View Modifier from MusicKit.

## Declaration

```objectivec
- (void) loadWithOptions:(NSDictionary<NSString *,id> *) options completionHandler:(void (^)(BOOL result, NSError *error)) completionHandler;
```

## Parameters

- `options`: A key that identifies the type of setup the user needs to do. See [SKCloudServiceSetupOptionsKey](../skcloudservicesetupoptionskey.md) for possible values.
- `completionHandler`: A block that is called when the setup view has loaded. The block takes the following parameters:

  `result`

  A Boolean value that indicates whether the view controller has loaded the view and can be presented.

  `error`

  An error value that indicates the reason for failure. Possible values are [SKErrorUnknown](../skerror/code/unknown.md), [SKErrorCloudServicePermissionDenied](../skerror/code/cloudservicepermissiondenied.md), and [SKErrorCloudServiceNetworkConnectionFailed](../skerror/code/cloudservicenetworkconnectionfailed.md).

## Mentioned In

- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)

<a id="Discussion"></a>

## Discussion

## See Also

### Loading the setup view

- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md): Allow eligible customers to subscribe to Apple Music.
- [SKCloudServiceSetupOptionsKey](../skcloudservicesetupoptionskey.md): Keys to specify the types of setup options for a cloud service.
- [SKArcadeService](../skarcadeservice.md)
