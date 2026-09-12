> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinterest/detailsummary](https://developer.apple.com/documentation/carplay/cppointofinterest/detailsummary)

# detailSummary (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The detail card’s summary.

## Declaration

```swift
var detailSummary: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The template only displays a detail card when the user selects a point of interest. If this property is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), the card displays the point of interest’s [summary](summary.md) instead.

## See Also

### Managing the Detail Card’s Data

- [detailTitle](detailtitle.md): The detail card’s title.
- [detailSubtitle](detailsubtitle.md): The detail card’s subtitle.

# detailSummary (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The detail card’s summary.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * detailSummary;
```

<a id="Discussion"></a>

## Discussion

The template only displays a detail card when the user selects a point of interest. If this property is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), the card displays the point of interest’s [summary](summary.md) instead.

## See Also

### Managing the Detail Card’s Data

- [detailTitle](detailtitle.md): The detail card’s title.
- [detailSubtitle](detailsubtitle.md): The detail card’s subtitle.
