> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadnetwork/startimpression(_:completionhandler:)](https://developer.apple.com/documentation/storekit/skadnetwork/startimpression(_:completionhandler:))

# startImpression(\_:completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

Indicates that your app is presenting a view-through ad to the user.

## Declaration

```swift
class func startImpression(_ impression: SKAdImpression, completionHandler completion: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func startImpression(_ impression: SKAdImpression) async throws
```

## Parameters

- `impression`: An instance of [SKAdImpression](../skadimpression.md) with the properties set for the view-through ad that you’re presenting.
- `completion`: The callback handler you provide to handle any tasks relevant to the start of the ad impression.

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Signing and providing ads](../signing-and-providing-ads.md)
- [SKAdNetwork 2.2 release notes](../skadnetwork-2-2-release-notes.md)

<a id="Discussion"></a>

## Discussion

Call this method when you start presenting the view-through ad to the user. If you call [startImpression(\_:completionHandler:)](startimpression%28__completionhandler_%29.md) more than once for the same advertised app before calling [endImpression(\_:completionHandler:)](endimpression%28__completionhandler_%29.md), the latest impression overwrites the earlier impression.

Call [endImpression(\_:completionHandler:)](endimpression%28__completionhandler_%29.md) when the impression ends and is no longer visible to the user.

> **Note**

>  To ensure that SKAdNetwork records the impression, call [endImpression(\_:completionHandler:)](endimpression%28__completionhandler_%29.md) after the impression ends, regardless of whether [startImpression(\_:completionHandler:)](startimpression%28__completionhandler_%29.md) returns an error in the completion handler.

## See Also

### Signing view-through ads

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md): Initiate install validation by displaying a view-through ad with signed parameters.
- [SKAdImpression](../skadimpression.md): A class that defines an ad impression for a view-through ad.
- [endImpression(\_:completionHandler:)](endimpression%28__completionhandler_%29.md): Indicates that your app is no longer presenting a view-through ad to the user.

# startImpression:completionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

Indicates that your app is presenting a view-through ad to the user.

## Declaration

```objectivec
+ (void) startImpression:(SKAdImpression *) impression completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `impression`: An instance of [SKAdImpression](../skadimpression.md) with the properties set for the view-through ad that you’re presenting.
- `completion`: The callback handler you provide to handle any tasks relevant to the start of the ad impression.

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Signing and providing ads](../signing-and-providing-ads.md)
- [SKAdNetwork 2.2 release notes](../skadnetwork-2-2-release-notes.md)

<a id="Discussion"></a>

## Discussion

Call this method when you start presenting the view-through ad to the user. If you call [startImpression:completionHandler:](startimpression%28__completionhandler_%29.md) more than once for the same advertised app before calling [endImpression:completionHandler:](endimpression%28__completionhandler_%29.md), the latest impression overwrites the earlier impression.

Call [endImpression:completionHandler:](endimpression%28__completionhandler_%29.md) when the impression ends and is no longer visible to the user.

> **Note**

>  To ensure that SKAdNetwork records the impression, call [endImpression:completionHandler:](endimpression%28__completionhandler_%29.md) after the impression ends, regardless of whether [startImpression:completionHandler:](startimpression%28__completionhandler_%29.md) returns an error in the completion handler.

## See Also

### Signing view-through ads

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md): Initiate install validation by displaying a view-through ad with signed parameters.
- [SKAdImpression](../skadimpression.md): A class that defines an ad impression for a view-through ad.
- [endImpression:completionHandler:](endimpression%28__completionhandler_%29.md): Indicates that your app is no longer presenting a view-through ad to the user.
