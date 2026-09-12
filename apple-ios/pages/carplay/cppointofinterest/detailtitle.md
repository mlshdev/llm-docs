> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinterest/detailtitle](https://developer.apple.com/documentation/carplay/cppointofinterest/detailtitle)

# detailTitle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The detail card’s title.

## Declaration

```swift
var detailTitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The template only displays the detail card when a user selects a point of interest. If this property is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), the card displays the point of interest’s [title](title.md) instead.

## See Also

### Managing the Detail Card’s Data

- [detailSubtitle](detailsubtitle.md): The detail card’s subtitle.
- [detailSummary](detailsummary.md): The detail card’s summary.

# detailTitle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The detail card’s title.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * detailTitle;
```

<a id="Discussion"></a>

## Discussion

The template only displays the detail card when a user selects a point of interest. If this property is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), the card displays the point of interest’s [title](title.md) instead.

## See Also

### Managing the Detail Card’s Data

- [detailSubtitle](detailsubtitle.md): The detail card’s subtitle.
- [detailSummary](detailsummary.md): The detail card’s summary.
