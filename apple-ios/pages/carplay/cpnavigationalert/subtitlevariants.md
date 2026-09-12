> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/subtitlevariants](https://developer.apple.com/documentation/carplay/cpnavigationalert/subtitlevariants)

# subtitleVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of subtitle strings.

## Declaration

```swift
var subtitleVariants: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Each subtitle should be localized and ready for display to the user. The system selects the subtitle to display based on the available screen space.

## See Also

### Getting Titles

- [titleVariants](titlevariants.md): An array of title strings.
- [updateTitleVariants(\_:subtitleVariants:)](updatetitlevariants%28__subtitlevariants_%29.md): Updates title and subtitle variants.

# subtitleVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of subtitle strings.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * subtitleVariants;
```

<a id="Discussion"></a>

## Discussion

Each subtitle should be localized and ready for display to the user. The system selects the subtitle to display based on the available screen space.

## See Also

### Getting Titles

- [titleVariants](titlevariants.md): An array of title strings.
- [updateTitleVariants:subtitleVariants:](updatetitlevariants%28__subtitlevariants_%29.md): Updates title and subtitle variants.
