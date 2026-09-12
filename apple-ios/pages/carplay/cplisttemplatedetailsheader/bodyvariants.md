> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplatedetailsheader/bodyvariants](https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/bodyvariants)

# bodyVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An optional array of strings, ordered from most to least preferred.

## Declaration

```swift
var bodyVariants: [NSAttributedString] { get set }
```

<a id="discussion"></a>

## Discussion

The variant strings should be provided as localized, displayable content. The system will select the first variant that fits the available space.

# bodyVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An optional array of strings, ordered from most to least preferred.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSAttributedString *> * bodyVariants;
```

<a id="discussion"></a>

## Discussion

The variant strings should be provided as localized, displayable content. The system will select the first variant that fits the available space.
