> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/emptyviewtitlevariants

# emptyViewTitleVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of localized title strings to display when the list contains no items.

## Declaration

```swift
var emptyViewTitleVariants: [String] { get set }
```

<a id="discussion"></a>

## Discussion

When the list contains no items in any of its sections, the template displays an empty view with a title and a subtitle string. This property contains the potential strings to display in the title position of the view. CarPlay displays the first string from the array that fits the available space, so arrange your strings in the array from most to least-preferred.

When you update the list and add one or more items, CarPlay removes the empty view.

## See Also

### Managing an empty list

- [showsSpinnerWhileEmpty](showsspinnerwhileempty.md): A Boolean value that indicates whether to display a spinning activity indicator when the list contains no items.
- [emptyViewSubtitleVariants](emptyviewsubtitlevariants.md): An array of localized subtitle strings to display when the list contains no items.

# emptyViewTitleVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of localized title strings to display when the list contains no items.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * emptyViewTitleVariants;
```

<a id="discussion"></a>

## Discussion

When the list contains no items in any of its sections, the template displays an empty view with a title and a subtitle string. This property contains the potential strings to display in the title position of the view. CarPlay displays the first string from the array that fits the available space, so arrange your strings in the array from most to least-preferred.

When you update the list and add one or more items, CarPlay removes the empty view.

## See Also

### Managing an empty list

- [showsSpinnerWhileEmpty](showsspinnerwhileempty.md): A Boolean value that indicates whether to display a spinning activity indicator when the list contains no items.
- [emptyViewSubtitleVariants](emptyviewsubtitlevariants.md): An array of localized subtitle strings to display when the list contains no items.
