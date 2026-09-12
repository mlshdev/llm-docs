> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinterest/detailsubtitle](https://developer.apple.com/documentation/carplay/cppointofinterest/detailsubtitle)

# detailSubtitle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The detail card’s subtitle.

## Declaration

```swift
var detailSubtitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The template only displays a detail card when the user selects a point of interest. If this property is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), the card displays the point of interest’s [subtitle](subtitle.md) instead.

## See Also

### Managing the Detail Card’s Data

- [detailTitle](detailtitle.md): The detail card’s title.
- [detailSummary](detailsummary.md): The detail card’s summary.

# detailSubtitle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The detail card’s subtitle.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * detailSubtitle;
```

<a id="Discussion"></a>

## Discussion

The template only displays a detail card when the user selects a point of interest. If this property is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), the card displays the point of interest’s [subtitle](subtitle.md) instead.

## See Also

### Managing the Detail Card’s Data

- [detailTitle](detailtitle.md): The detail card’s title.
- [detailSummary](detailsummary.md): The detail card’s summary.
