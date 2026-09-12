> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/adcampaignidentifier](https://developer.apple.com/documentation/storekittest/skadtestpostback/adcampaignidentifier)

# adCampaignIdentifier (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A number that represents the advertising network’s campaign.

## Declaration

```swift
var adCampaignIdentifier: Int { get }
```

<a id="discussion"></a>

## Discussion

Ad networks set their own campaign identifiers, which must be an integer between 1 and 100.

## See Also

### Getting information in earlier versions

- [conversionValue](conversionvalue.md): An unsigned 6-bit value that the app or ad network controls.

# adCampaignIdentifier (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A number that represents the advertising network’s campaign.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger adCampaignIdentifier;
```

<a id="discussion"></a>

## Discussion

Ad networks set their own campaign identifiers, which must be an integer between 1 and 100.

## See Also

### Getting information in earlier versions

- [conversionValue](conversionvalue.md): An unsigned 6-bit value that the app or ad network controls.
