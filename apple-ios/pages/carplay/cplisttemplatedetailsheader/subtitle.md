> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/subtitle

# subtitle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The text to display in the header below the title.

## Declaration

```swift
var subtitle: String? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to specify additional metadata or contextual information about the content. For example, you might specify the name of an artist or a description of an episode. The text from this property appears below the title, and it displays with reduced visual prominence.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [title](title.md): The primary text to display in the header.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.
- [wantsAdaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.

# subtitle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The text to display in the header below the title.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * subtitle;
```

<a id="discussion"></a>

## Discussion

Use this property to specify additional metadata or contextual information about the content. For example, you might specify the name of an artist or a description of an episode. The text from this property appears below the title, and it displays with reduced visual prominence.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [title](title.md): The primary text to display in the header.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.
- [adaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.
