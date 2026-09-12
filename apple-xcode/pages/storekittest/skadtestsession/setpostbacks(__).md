> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestsession/setpostbacks(_:)](https://developer.apple.com/documentation/storekittest/skadtestsession/setpostbacks(_:))

# setPostbacks(\_:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Add test postbacks to the test session.

## Declaration

```swift
func setPostbacks(_ postbacks: [SKAdTestPostback]) throws
```

## Parameters

- `postbacks`: An array of one to six test postbacks you add to a test session. The first postback must always be the winning postback with a `didWin` value of `true`. There must be only one winning postback.

<a id="discussion"></a>

## Discussion

An error occurs if any of the test postbacks are invalid or if there’s an issue with the set of test postbacks. Otherwise, the test passes.

Create postbacks using the initializer for [SKAdTestPostback](../skadtestpostback.md), [init(version:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:)](../skadtestpostback/init%28version_adnetworkidentifier_adcampaignidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_conversionvalue_fidelitytype_isredownload_didwin_postbackurl_%29.md). Add the postbacks to the test session by calling [setPostbacks(\_:)](setpostbacks%28__%29.md).

Calling [setPostbacks(\_:)](setpostbacks%28__%29.md) overwrites previous postbacks in the test session, if any exist.

Include up to six test postbacks in your test session if you want to mimic the behavior of postbacks when users experience multiple ad impressions for the same app. For more information about attributions when there are multiple ad impressions, see [Receiving ad attributions and postbacks](https://developer.apple.com/documentation/storekit/receiving-ad-attributions-and-postbacks).

The array of test postbacks in the test session need to follow the same rules that SKAdNetwork uses for postbacks, including:

- The `postbacks` array can only contain up to six postbacks.
- The first postback in the array must be the only winning postback in the array, with a `didWin` value of `true`.
- All postbacks, except the first postback in the array, have a `didWin` value of `false`.

## See Also

### Adding and sending postbacks

- [postbacks](postbacks.md): An array of test postbacks you set in the testing environment.
- [flushPostbacks(responses:)](flushpostbacks%28responses_%29.md): Sends the test postbacks and handles the responses.
- [SKANTestPostbackResponseHandler](../skantestpostbackresponsehandler.md): A type that represents the test postback response handler.

# setPostbacks:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Add test postbacks to the test session.

## Declaration

```objectivec
- (BOOL) setPostbacks:(NSArray<SKAdTestPostback *> *) postbacks error:(NSError **) error;
```

## Parameters

- `postbacks`: An array of one to six test postbacks you add to a test session. The first postback must always be the winning postback with a `didWin` value of `true`. There must be only one winning postback.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

Returns `true` if the test postbacks are valid and this method successfully adds them to the test session. If any of the test postbacks are invalid, or if there’s another issue with the set of test postbacks, it returns `false` and sets an [SKAdTestError](../skadtesterror.md) error in the `error` pointer.

<a id="discussion"></a>

## Discussion

An error occurs if any of the test postbacks are invalid or if there’s an issue with the set of test postbacks. Otherwise, the test passes.

Create postbacks using the initializer for [SKAdTestPostback](../skadtestpostback.md), [initWithVersion:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:](../skadtestpostback/init%28version_adnetworkidentifier_adcampaignidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_conversionvalue_fidelitytype_isredownload_didwin_postbackurl_%29.md). Add the postbacks to the test session by calling [setPostbacks:error:](setpostbacks%28__%29.md).

Calling [setPostbacks:error:](setpostbacks%28__%29.md) overwrites previous postbacks in the test session, if any exist.

Include up to six test postbacks in your test session if you want to mimic the behavior of postbacks when users experience multiple ad impressions for the same app. For more information about attributions when there are multiple ad impressions, see [Receiving ad attributions and postbacks](https://developer.apple.com/documentation/storekit/receiving-ad-attributions-and-postbacks).

The array of test postbacks in the test session need to follow the same rules that SKAdNetwork uses for postbacks, including:

- The `postbacks` array can only contain up to six postbacks.
- The first postback in the array must be the only winning postback in the array, with a `didWin` value of `true`.
- All postbacks, except the first postback in the array, have a `didWin` value of `false`.

## See Also

### Adding and sending postbacks

- [postbacks](postbacks.md): An array of test postbacks you set in the testing environment.
- [flushPostbacksWithResponses:](flushpostbacks%28responses_%29.md): Sends the test postbacks and handles the responses.
- [SKANTestPostbackResponseHandler](../skantestpostbackresponsehandler.md): A type that represents the test postback response handler.
