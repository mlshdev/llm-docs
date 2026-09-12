> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/updatetitlevariants(_:subtitlevariants:)](https://developer.apple.com/documentation/carplay/cpnavigationalert/updatetitlevariants(_:subtitlevariants:))

# updateTitleVariants(\_:subtitleVariants:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Updates title and subtitle variants.

## Declaration

```swift
func updateTitleVariants(_ newTitleVariants: [String], subtitleVariants newSubtitleVariants: [String])
```

## Parameters

- `newTitleVariants`: An array of localized, displayable titles. The system selects the title that fits in the available display space.
- `newSubtitleVariants`: An array of localized, displayable subtitles. The system selects the title that fits in the available display space.

<a id="Discussion"></a>

## Discussion

You can update the navigation alert with new title and subtitle variants before presenting the alert or after displaying it. Updating a dismissed alert has no effect.

## See Also

### Getting Titles

- [titleVariants](titlevariants.md): An array of title strings.
- [subtitleVariants](subtitlevariants.md): An array of subtitle strings.

# updateTitleVariants:subtitleVariants: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Updates title and subtitle variants.

## Declaration

```objectivec
- (void) updateTitleVariants:(NSArray<NSString *> *) newTitleVariants subtitleVariants:(NSArray<NSString *> *) newSubtitleVariants;
```

## Parameters

- `newTitleVariants`: An array of localized, displayable titles. The system selects the title that fits in the available display space.
- `newSubtitleVariants`: An array of localized, displayable subtitles. The system selects the title that fits in the available display space.

<a id="Discussion"></a>

## Discussion

You can update the navigation alert with new title and subtitle variants before presenting the alert or after displaying it. Updating a dismissed alert has no effect.

## See Also

### Getting Titles

- [titleVariants](titlevariants.md): An array of title strings.
- [subtitleVariants](subtitlevariants.md): An array of subtitle strings.
