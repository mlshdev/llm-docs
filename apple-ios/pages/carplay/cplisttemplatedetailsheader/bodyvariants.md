> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/bodyvariants

# bodyVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An optional array of localized strings to display beneath the subtitle.

## Declaration

```swift
var bodyVariants: [NSAttributedString] { get set }
```

<a id="discussion"></a>

## Discussion

Specify strings in the array from most to least preferred. The system chooses the first string that fits the available space and displays it below the subtitle.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [title](title.md): The primary text to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.
- [wantsAdaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.

# bodyVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An optional array of localized strings to display beneath the subtitle.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSAttributedString *> * bodyVariants;
```

<a id="discussion"></a>

## Discussion

Specify strings in the array from most to least preferred. The system chooses the first string that fits the available space and displays it below the subtitle.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [title](title.md): The primary text to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.
- [adaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.
