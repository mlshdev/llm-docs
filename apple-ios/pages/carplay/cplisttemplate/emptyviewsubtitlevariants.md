> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/emptyviewsubtitlevariants](https://developer.apple.com/documentation/carplay/cplisttemplate/emptyviewsubtitlevariants)

# emptyViewSubtitleVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of subtitle variants for the template’s empty view.

## Declaration

```swift
var emptyViewSubtitleVariants: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

When the list contains zero items, the template displays an empty view with a title and a subtitle. The template removes the empty view if you update the list and provide items.

Provide at least one nonzero length subtitle variant. The view displays the first subtitle variant that fits into the available screen space, so arrange your variants array from most- to least-preferred. Provide the strings as localized displayable content.

## See Also

### Managing an Empty List

- [emptyViewTitleVariants](emptyviewtitlevariants.md): An array of title variants for the template’s empty view.

# emptyViewSubtitleVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of subtitle variants for the template’s empty view.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * emptyViewSubtitleVariants;
```

<a id="Discussion"></a>

## Discussion

When the list contains zero items, the template displays an empty view with a title and a subtitle. The template removes the empty view if you update the list and provide items.

Provide at least one nonzero length subtitle variant. The view displays the first subtitle variant that fits into the available screen space, so arrange your variants array from most- to least-preferred. Provide the strings as localized displayable content.

## See Also

### Managing an Empty List

- [emptyViewTitleVariants](emptyviewtitlevariants.md): An array of title variants for the template’s empty view.
