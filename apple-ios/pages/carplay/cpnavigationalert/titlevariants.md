> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/titlevariants](https://developer.apple.com/documentation/carplay/cpnavigationalert/titlevariants)

# titleVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of title strings.

## Declaration

```swift
var titleVariants: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Each title should be localized and ready for display to the user. The system selects the title to display based on the available screen space.

## See Also

### Getting Titles

- [subtitleVariants](subtitlevariants.md): An array of subtitle strings.
- [updateTitleVariants(\_:subtitleVariants:)](updatetitlevariants%28__subtitlevariants_%29.md): Updates title and subtitle variants.

# titleVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of title strings.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * titleVariants;
```

<a id="Discussion"></a>

## Discussion

Each title should be localized and ready for display to the user. The system selects the title to display based on the available screen space.

## See Also

### Getting Titles

- [subtitleVariants](subtitlevariants.md): An array of subtitle strings.
- [updateTitleVariants:subtitleVariants:](updatetitlevariants%28__subtitlevariants_%29.md): Updates title and subtitle variants.
