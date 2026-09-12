> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/adnetworkidentifier](https://developer.apple.com/documentation/storekittest/skadtestpostback/adnetworkidentifier)

# adNetworkIdentifier (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A string that represents the advertising network’s unique identifier.

## Declaration

```swift
var adNetworkIdentifier: String { get }
```

<a id="discussion"></a>

## Discussion

Check that the ad network identifier string is lowercased.

## See Also

### Getting advertisement information

- [appStoreItemIdentifier](appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The item identifier of the app that displays the ad.
- [sourceDomain](sourcedomain.md): The source of a web ad.
- [sourceIdentifier](sourceidentifier.md): A string that identifies an ad campaign.

# adNetworkIdentifier (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A string that represents the advertising network’s unique identifier.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * adNetworkIdentifier;
```

<a id="discussion"></a>

## Discussion

Check that the ad network identifier string is lowercased.

## See Also

### Getting advertisement information

- [appStoreItemIdentifier](appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md): The item identifier of the app that displays the ad.
- [sourceDomain](sourcedomain.md): The source of a web ad.
- [sourceIdentifier](sourceidentifier.md): A string that identifies an ad campaign.
