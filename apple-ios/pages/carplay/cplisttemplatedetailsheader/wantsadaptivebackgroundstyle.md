> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/wantsadaptivebackgroundstyle

# wantsAdaptiveBackgroundStyle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Boolean value that indicates whether to apply a custom background style to the header.

## Declaration

```swift
var wantsAdaptiveBackgroundStyle: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the system uses perceptually aware color transformations to create a background from the header’s thumbnail image. The background adapts to the current interface style preferences and adjusts automatically to light and dark interfaces. When the value of this property is `false`, CarPlay displays the standard background. The default value of this property is `false`.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [title](title.md): The primary text to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.

# adaptiveBackgroundStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Boolean value that indicates whether to apply a custom background style to the header.

## Declaration

```objectivec
@property (nonatomic, assign, getter=wantsAdaptiveBackgroundStyle) BOOL adaptiveBackgroundStyle;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the system uses perceptually aware color transformations to create a background from the header’s thumbnail image. The background adapts to the current interface style preferences and adjusts automatically to light and dark interfaces. When the value of this property is `false`, CarPlay displays the standard background. The default value of this property is `false`.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [title](title.md): The primary text to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.
