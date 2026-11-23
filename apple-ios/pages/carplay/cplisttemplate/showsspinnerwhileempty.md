> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/showsspinnerwhileempty

# showsSpinnerWhileEmpty (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Boolean value that indicates whether to display a spinning activity indicator when the list contains no items.

## Declaration

```swift
var showsSpinnerWhileEmpty: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If the value of this property is `true` and the list contains no items, the list interface displays a spinning activity indicator in addition to content from the [emptyViewTitleVariants](emptyviewtitlevariants.md) and [emptyViewSubtitleVariants](emptyviewsubtitlevariants.md) properties. You might enable this property if you display your list interface first and load its contents asynchronously.

## See Also

### Managing an empty list

- [emptyViewTitleVariants](emptyviewtitlevariants.md): An array of localized title strings to display when the list contains no items.
- [emptyViewSubtitleVariants](emptyviewsubtitlevariants.md): An array of localized subtitle strings to display when the list contains no items.

# showsSpinnerWhileEmpty (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Boolean value that indicates whether to display a spinning activity indicator when the list contains no items.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL showsSpinnerWhileEmpty;
```

<a id="discussion"></a>

## Discussion

If the value of this property is `true` and the list contains no items, the list interface displays a spinning activity indicator in addition to content from the [emptyViewTitleVariants](emptyviewtitlevariants.md) and [emptyViewSubtitleVariants](emptyviewsubtitlevariants.md) properties. You might enable this property if you display your list interface first and load its contents asynchronously.

## See Also

### Managing an empty list

- [emptyViewTitleVariants](emptyviewtitlevariants.md): An array of localized title strings to display when the list contains no items.
- [emptyViewSubtitleVariants](emptyviewsubtitlevariants.md): An array of localized subtitle strings to display when the list contains no items.
