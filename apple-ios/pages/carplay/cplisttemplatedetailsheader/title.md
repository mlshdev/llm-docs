> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/title

# title (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The primary text to display in the header.

## Declaration

```swift
var title: String? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to specify song titles, show names, or primary content descriptions. The text from this property appears prominently below or alongside the thumbnail image in the header area.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.
- [wantsAdaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.

# title (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The primary text to display in the header.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * title;
```

<a id="discussion"></a>

## Discussion

Use this property to specify song titles, show names, or primary content descriptions. The text from this property appears prominently below or alongside the thumbnail image in the header area.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.
- [adaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.
