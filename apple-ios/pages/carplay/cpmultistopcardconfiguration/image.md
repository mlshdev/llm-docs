> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmultistopcardconfiguration/image

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An optional image displayed alongside the @c title in the options panel, serving as an entry point to the multi-stop panel.

## Declaration

```swift
@NSCopying var image: UIImage? { get }
```

## See Also

### Getting the configuration details

- [title](title.md): Title of panel presented to configure waypoints along a route. If no panel is provided, the panel title will default to “Add Stop”.
- [buttons](buttons.md): An array of text buttons to be displayed at the bottom of the card presented to configure waypoints along a route.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An optional image displayed alongside the @c title in the options panel, serving as an entry point to the multi-stop panel.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIImage * image;
```

## See Also

### Getting the configuration details

- [title](title.md): Title of panel presented to configure waypoints along a route. If no panel is provided, the panel title will default to “Add Stop”.
- [buttons](buttons.md): An array of text buttons to be displayed at the bottom of the card presented to configure waypoints along a route.
