> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/sourcedomain](https://developer.apple.com/documentation/storekittest/skadtestpostback/sourcedomain)

# sourceDomain (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The source of a web ad.

## Declaration

```swift
var sourceDomain: String? { get }
```

<a id="discussion"></a>

## Discussion

This postback value indicates the `source_domain` of the corresponding [AdImpressionRequest](https://developer.apple.com/documentation/skadnetworkforwebads/adimpressionrequest).

## See Also

### Getting advertisement information

- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [appStoreItemIdentifier](appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The item identifier of the app that displays the ad.
- [sourceIdentifier](sourceidentifier.md): A string that identifies an ad campaign.

# sourceDomain (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The source of a web ad.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * sourceDomain;
```

<a id="discussion"></a>

## Discussion

This postback value indicates the `source_domain` of the corresponding [AdImpressionRequest](https://developer.apple.com/documentation/skadnetworkforwebads/adimpressionrequest).

## See Also

### Getting advertisement information

- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [appStoreItemIdentifier](appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The item identifier of the app that displays the ad.
- [sourceIdentifier](sourceidentifier.md): A string that identifies an ad campaign.
