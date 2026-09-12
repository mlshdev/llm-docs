> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/fidelitytype](https://developer.apple.com/documentation/storekittest/skadtestpostback/fidelitytype)

# fidelityType (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An integer that indicates the type of ad impression, StoreKit-rendered or view-through.

## Declaration

```swift
var fidelityType: Int { get set }
```

<a id="discussion"></a>

## Discussion

SKAdNetwork versions 2.2 and later require a [fidelityType](fidelitytype.md) parameter for ad validation signatures. For view-through ads, use a fidelity type value of `0`. For StoreKit-rendered ads, use the value `1`.

## See Also

### Getting conversion information

- [fineConversionValue](fineconversionvalue.md): The specific conversion value of an ad postback.
- [coarseConversionValue](coarseconversionvalue.md): A value that indicates a high, medium, or low conversion value for an ad postback.
- [didWin](didwin.md): A Boolean value that indicates whether the postback won the attribution.

# fidelityType (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An integer that indicates the type of ad impression, StoreKit-rendered or view-through.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger fidelityType;
```

<a id="discussion"></a>

## Discussion

SKAdNetwork versions 2.2 and later require a [fidelityType](fidelitytype.md) parameter for ad validation signatures. For view-through ads, use a fidelity type value of `0`. For StoreKit-rendered ads, use the value `1`.

## See Also

### Getting conversion information

- [fineConversionValue](fineconversionvalue.md): The specific conversion value of an ad postback.
- [coarseConversionValue](coarseconversionvalue.md): A value that indicates a high, medium, or low conversion value for an ad postback.
- [didWin](didwin.md): A Boolean value that indicates whether the postback won the attribution.
