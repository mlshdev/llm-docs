> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/conversionvalue](https://developer.apple.com/documentation/storekittest/skadtestpostback/conversionvalue)

# conversionValue (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An unsigned 6-bit value that the app or ad network controls.

## Declaration

```swift
var conversionValue: Int { get }
```

<a id="discussion"></a>

## Discussion

A postback in SKAdNetwork 3 or earlier uses a single [conversionValue](conversionvalue.md). A postback in SKAdNetwork 4 or later may contain either a [fineConversionValue](fineconversionvalue.md) or a [coarseConversionValue](coarseconversionvalue.md).

## See Also

### Getting information in earlier versions

- [adCampaignIdentifier](adcampaignidentifier.md): A number that represents the advertising network’s campaign.

# conversionValue (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An unsigned 6-bit value that the app or ad network controls.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger conversionValue;
```

<a id="discussion"></a>

## Discussion

A postback in SKAdNetwork 3 or earlier uses a single [conversionValue](conversionvalue.md). A postback in SKAdNetwork 4 or later may contain either a [fineConversionValue](fineconversionvalue.md) or a [coarseConversionValue](coarseconversionvalue.md).

## See Also

### Getting information in earlier versions

- [adCampaignIdentifier](adcampaignidentifier.md): A number that represents the advertising network’s campaign.
