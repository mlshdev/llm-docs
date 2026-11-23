> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/showsdisclosureindicator

# showsDisclosureIndicator (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

If YES, a cell displaying this list item will render with a disclosure indicator in the trailing side of the cell.

## Declaration

```swift
var showsDisclosureIndicator: Bool { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> If set, this property takes precedence over showsCloudLabel.

Defaults to NO.

## See Also

### Deprecated

- [init(text:detailText:image:showsDisclosureIndicator:)](init%28text_detailtext_image_showsdisclosureindicator_%29.md): Deprecated. Initialize a list item with text, detailtext, an image, and a disclosure indicator.
- [showsExplicitLabel](showsexplicitlabel.md): Deprecated. If YES, a cell displaying this list item will render with an explicit label to the trailing edge of the text

# showsDisclosureIndicator (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

If YES, a cell displaying this list item will render with a disclosure indicator in the trailing side of the cell.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL showsDisclosureIndicator;
```

<a id="discussion"></a>

## Discussion

> **Note**

> If set, this property takes precedence over showsCloudLabel.

Defaults to NO.

## See Also

### Deprecated

- [initWithText:detailText:image:showsDisclosureIndicator:](init%28text_detailtext_image_showsdisclosureindicator_%29.md): Deprecated. Initialize a list item with text, detailtext, an image, and a disclosure indicator.
- [showsExplicitLabel](showsexplicitlabel.md): Deprecated. If YES, a cell displaying this list item will render with an explicit label to the trailing edge of the text
