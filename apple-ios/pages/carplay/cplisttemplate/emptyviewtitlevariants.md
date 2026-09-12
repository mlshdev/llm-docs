> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/emptyviewtitlevariants](https://developer.apple.com/documentation/carplay/cplisttemplate/emptyviewtitlevariants)

# emptyViewTitleVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of title variants for the template’s empty view.

## Declaration

```swift
var emptyViewTitleVariants: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

When the list contains zero items, the template displays an empty view with a title and a subtitle. The template removes the empty view if you update the list and provide items.

Provide at least one nonzero length title variant. The view displays the first title variant that fits into the available screen space, so arrange your variants array from most- to least-preferred. Provide the strings as localized displayable content.

## See Also

### Managing an Empty List

- [emptyViewSubtitleVariants](emptyviewsubtitlevariants.md): An array of subtitle variants for the template’s empty view.

# emptyViewTitleVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of title variants for the template’s empty view.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * emptyViewTitleVariants;
```

<a id="Discussion"></a>

## Discussion

When the list contains zero items, the template displays an empty view with a title and a subtitle. The template removes the empty view if you update the list and provide items.

Provide at least one nonzero length title variant. The view displays the first title variant that fits into the available screen space, so arrange your variants array from most- to least-preferred. Provide the strings as localized displayable content.

## See Also

### Managing an Empty List

- [emptyViewSubtitleVariants](emptyviewsubtitlevariants.md): An array of subtitle variants for the template’s empty view.
