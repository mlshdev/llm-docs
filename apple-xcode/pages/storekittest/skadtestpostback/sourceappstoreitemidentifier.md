> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/sourceappstoreitemidentifier](https://developer.apple.com/documentation/storekittest/skadtestpostback/sourceappstoreitemidentifier)

# sourceAppStoreItemIdentifier (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The item identifier of the app that displays the ad.

## Declaration

```swift
var sourceAppStoreItemIdentifier: Int { get }
```

<a id="discussion"></a>

## Discussion

In the testing environment, the [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md) is always `0`.

## See Also

### Getting advertisement information

- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [appStoreItemIdentifier](appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceDomain](sourcedomain.md): The source of a web ad.
- [sourceIdentifier](sourceidentifier.md): A string that identifies an ad campaign.

# sourceAppStoreItemIdentifier (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The item identifier of the app that displays the ad.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger sourceAppStoreItemIdentifier;
```

<a id="discussion"></a>

## Discussion

In the testing environment, the [sourceAppStoreItemIdentifier](sourceappstoreitemidentifier.md) is always `0`.

## See Also

### Getting advertisement information

- [adNetworkIdentifier](adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [appStoreItemIdentifier](appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceDomain](sourcedomain.md): The source of a web ad.
- [sourceIdentifier](sourceidentifier.md): A string that identifies an ad campaign.
