> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmultistopcardconfiguration/title

# title (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Title of panel presented to configure waypoints along a route. If no panel is provided, the panel title will default to “Add Stop”.

## Declaration

```swift
var title: String? { get }
```

## See Also

### Getting the configuration details

- [image](image.md): An optional image displayed alongside the @c title in the options panel, serving as an entry point to the multi-stop panel.
- [buttons](buttons.md): An array of text buttons to be displayed at the bottom of the card presented to configure waypoints along a route.

# title (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Title of panel presented to configure waypoints along a route. If no panel is provided, the panel title will default to “Add Stop”.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * title;
```

## See Also

### Getting the configuration details

- [image](image.md): An optional image displayed alongside the @c title in the options panel, serving as an entry point to the multi-stop panel.
- [buttons](buttons.md): An array of text buttons to be displayed at the bottom of the card presented to configure waypoints along a route.
