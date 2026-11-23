> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationalert/subtitlevariants

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

### Getting title values

- [titleVariants](titlevariants.md): An array of title strings.
- [updateTitleVariants(\_:subtitleVariants:)](updatetitlevariants%28__subtitlevariants_%29.md): Updates title and subtitle variants.
- [updateTitleVariants(\_:subtitleVariants:avatarImage:alert:actions:duration:)](updatetitlevariants%28__subtitlevariants_avatarimage_alert_actions_duration_%29.md): Update the navigation alert with new title variants, subtitle variants, image, actions, and duration.

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

### Getting title values

- [titleVariants](titlevariants.md): An array of title strings.
- [updateTitleVariants:subtitleVariants:](updatetitlevariants%28__subtitlevariants_%29.md): Updates title and subtitle variants.
- [updateTitleVariants:subtitleVariants:avatarImage:alertImage:actions:duration:](updatetitlevariants%28__subtitlevariants_avatarimage_alert_actions_duration_%29.md): Update the navigation alert with new title variants, subtitle variants, image, actions, and duration.
