> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/init(text:detailtext:image:showsdisclosureindicator:)

# init(text:detailText:image:showsDisclosureIndicator:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Initialize a list item with text, detailtext, an image, and a disclosure indicator.

## Declaration

```swift
init(text: String?, detailText: String?, image: UIImage?, showsDisclosureIndicator: Bool)
```

<a id="discussion"></a>

## Discussion

> **Note**

> The maximum size of the image is given by +\[CPListItem maximumImageSize\].

To properly size your list images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

## See Also

### Deprecated

- [showsDisclosureIndicator](showsdisclosureindicator.md): Deprecated. If YES, a cell displaying this list item will render with a disclosure indicator in the trailing side of the cell.
- [showsExplicitLabel](showsexplicitlabel.md): Deprecated. If YES, a cell displaying this list item will render with an explicit label to the trailing edge of the text

# initWithText:detailText:image:showsDisclosureIndicator: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Initialize a list item with text, detailtext, an image, and a disclosure indicator.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text detailText:(NSString *) detailText image:(UIImage *) image showsDisclosureIndicator:(BOOL) showsDisclosureIndicator;
```

<a id="discussion"></a>

## Discussion

> **Note**

> The maximum size of the image is given by +\[CPListItem maximumImageSize\].

To properly size your list images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

## See Also

### Deprecated

- [showsDisclosureIndicator](showsdisclosureindicator.md): Deprecated. If YES, a cell displaying this list item will render with a disclosure indicator in the trailing side of the cell.
- [showsExplicitLabel](showsexplicitlabel.md): Deprecated. If YES, a cell displaying this list item will render with an explicit label to the trailing edge of the text
