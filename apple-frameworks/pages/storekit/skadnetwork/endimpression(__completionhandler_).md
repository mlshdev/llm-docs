> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadnetwork/endimpression(_:completionhandler:)](https://developer.apple.com/documentation/storekit/skadnetwork/endimpression(_:completionhandler:))

# endImpression(\_:completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

Indicates that your app is no longer presenting a view-through ad to the user.

## Declaration

```swift
class func endImpression(_ impression: SKAdImpression, completionHandler completion: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func endImpression(_ impression: SKAdImpression) async throws
```

## Parameters

- `impression`: An instance of [SKAdImpression](../skadimpression.md) with the properties set for the view-through ad that you presented. This must be the same instance you provide in [startImpression(\_:completionHandler:)](startimpression%28__completionhandler_%29.md).
- `completion`: The callback handler you provide to handle any tasks relevant to concluding the ad impression.

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Signing and providing ads](../signing-and-providing-ads.md)
- [SKAdNetwork 2.2 release notes](../skadnetwork-2-2-release-notes.md)

<a id="Discussion"></a>

## Discussion

Call this method when you end the presentation of a view-through ad and it’s no longer visible to the user. To help ensure it’s a valid impression, StoreKit only records the impression if the ad displays for a minimum amount of time. That minimum is 2 seconds on devices running iOS 15.4 and iPadOS 15.4 and later, and 3 seconds on devices running earlier versions of iOS and iPadOS. If the app displays the ad for fewer than the minimum number of seconds, StoreKit doesn’t record the ad impression for attribution.

> **Note**

>  To ensure that SKAdNetwork records the impression, call [endImpression(\_:completionHandler:)](endimpression%28__completionhandler_%29.md) after the impression ends, regardless of whether [startImpression(\_:completionHandler:)](startimpression%28__completionhandler_%29.md) returns an error in the completion handler.

StoreKit records a maximum of 15 view-through ad impressions per source app for various products before discarding the oldest-recorded impression.

For more information about ad impressions and attributions, see [Receiving ad attributions and postbacks](../receiving-ad-attributions-and-postbacks.md).

## See Also

### Signing view-through ads

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md): Initiate install validation by displaying a view-through ad with signed parameters.
- [SKAdImpression](../skadimpression.md): A class that defines an ad impression for a view-through ad.
- [startImpression(\_:completionHandler:)](startimpression%28__completionhandler_%29.md): Indicates that your app is presenting a view-through ad to the user.

# endImpression:completionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

Indicates that your app is no longer presenting a view-through ad to the user.

## Declaration

```objectivec
+ (void) endImpression:(SKAdImpression *) impression completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `impression`: An instance of [SKAdImpression](../skadimpression.md) with the properties set for the view-through ad that you presented. This must be the same instance you provide in [startImpression:completionHandler:](startimpression%28__completionhandler_%29.md).
- `completion`: The callback handler you provide to handle any tasks relevant to concluding the ad impression.

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Signing and providing ads](../signing-and-providing-ads.md)
- [SKAdNetwork 2.2 release notes](../skadnetwork-2-2-release-notes.md)

<a id="Discussion"></a>

## Discussion

Call this method when you end the presentation of a view-through ad and it’s no longer visible to the user. To help ensure it’s a valid impression, StoreKit only records the impression if the ad displays for a minimum amount of time. That minimum is 2 seconds on devices running iOS 15.4 and iPadOS 15.4 and later, and 3 seconds on devices running earlier versions of iOS and iPadOS. If the app displays the ad for fewer than the minimum number of seconds, StoreKit doesn’t record the ad impression for attribution.

> **Note**

>  To ensure that SKAdNetwork records the impression, call [endImpression:completionHandler:](endimpression%28__completionhandler_%29.md) after the impression ends, regardless of whether [startImpression:completionHandler:](startimpression%28__completionhandler_%29.md) returns an error in the completion handler.

StoreKit records a maximum of 15 view-through ad impressions per source app for various products before discarding the oldest-recorded impression.

For more information about ad impressions and attributions, see [Receiving ad attributions and postbacks](../receiving-ad-attributions-and-postbacks.md).

## See Also

### Signing view-through ads

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md): Initiate install validation by displaying a view-through ad with signed parameters.
- [SKAdImpression](../skadimpression.md): A class that defines an ad impression for a view-through ad.
- [startImpression:completionHandler:](startimpression%28__completionhandler_%29.md): Indicates that your app is presenting a view-through ad to the user.
