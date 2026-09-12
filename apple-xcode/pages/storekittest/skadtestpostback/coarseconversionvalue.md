> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/coarseconversionvalue](https://developer.apple.com/documentation/storekittest/skadtestpostback/coarseconversionvalue)

# coarseConversionValue (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A value that indicates a high, medium, or low conversion value for an ad postback.

## Declaration

```swift
var coarseConversionValue: SKAdNetwork.CoarseConversionValue? { get }
```

<a id="discussion"></a>

## Discussion

A postback in SKAdNetwork version 4 and later provides a [fineConversionValue](fineconversionvalue.md) or this [coarseConversionValue](coarseconversionvalue.md). Earlier versions of SKAdNetwork use a single [conversionValue](conversionvalue.md).

## See Also

### Getting conversion information

- [fidelityType](fidelitytype.md): An integer that indicates the type of ad impression, StoreKit-rendered or view-through.
- [fineConversionValue](fineconversionvalue.md): The specific conversion value of an ad postback.
- [didWin](didwin.md): A Boolean value that indicates whether the postback won the attribution.

# coarseConversionValue (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A value that indicates a high, medium, or low conversion value for an ad postback.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) SKAdNetworkCoarseConversionValue coarseConversionValue;
```

<a id="discussion"></a>

## Discussion

A postback in SKAdNetwork version 4 and later provides a [fineConversionValue](fineconversionvalue.md) or this [coarseConversionValue](coarseconversionvalue.md). Earlier versions of SKAdNetwork use a single [conversionValue](conversionvalue.md).

## See Also

### Getting conversion information

- [fidelityType](fidelitytype.md): An integer that indicates the type of ad impression, StoreKit-rendered or view-through.
- [fineConversionValue](fineconversionvalue.md): The specific conversion value of an ad postback.
- [didWin](didwin.md): A Boolean value that indicates whether the postback won the attribution.
