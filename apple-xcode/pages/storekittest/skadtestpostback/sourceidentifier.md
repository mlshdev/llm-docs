> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/sourceidentifier](https://developer.apple.com/documentation/storekittest/skadtestpostback/sourceidentifier)

# sourceIdentifier (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A string that identifies an ad campaign.

## Declaration

```swift
var sourceIdentifier: String? { get }
```

<a id="discussion"></a>

## Discussion

The source identifier in a winning postback may contain two, three, or all four digits of the [sourceIdentifier](https://developer.apple.com/documentation/storekit/skadimpression/sourceidentifier) in the corresponding ad impression. For more information about the value you may get in the postback, see [Receiving postbacks in multiple conversion windows](https://developer.apple.com/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows).

## See Also

### Getting advertisement information

- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [appStoreItemIdentifier](appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The item identifier of the app that displays the ad.
- [sourceDomain](sourcedomain.md): The source of a web ad.

# sourceIdentifier (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A string that identifies an ad campaign.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * sourceIdentifier;
```

<a id="discussion"></a>

## Discussion

The source identifier in a winning postback may contain two, three, or all four digits of the [sourceIdentifier](https://developer.apple.com/documentation/storekit/skadimpression/sourceidentifier) in the corresponding ad impression. For more information about the value you may get in the postback, see [Receiving postbacks in multiple conversion windows](https://developer.apple.com/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows).

## See Also

### Getting advertisement information

- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [appStoreItemIdentifier](appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The item identifier of the app that displays the ad.
- [sourceDomain](sourcedomain.md): The source of a web ad.
