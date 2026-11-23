> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmultistopcardconfiguration/buttons

# buttons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An array of text buttons to be displayed at the bottom of the card presented to configure waypoints along a route.

## Declaration

```swift
var buttons: [CPTextButton] { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> The multi-stop card may display a maximum of 2 buttons. Setting more than 2 buttons to this property will only display the first 2 buttons.

## See Also

### Getting the configuration details

- [title](title.md): Title of panel presented to configure waypoints along a route. If no panel is provided, the panel title will default to “Add Stop”.
- [image](image.md): An optional image displayed alongside the @c title in the options panel, serving as an entry point to the multi-stop panel.

# buttons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An array of text buttons to be displayed at the bottom of the card presented to configure waypoints along a route.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CPTextButton *> * buttons;
```

<a id="discussion"></a>

## Discussion

> **Note**

> The multi-stop card may display a maximum of 2 buttons. Setting more than 2 buttons to this property will only display the first 2 buttons.

## See Also

### Getting the configuration details

- [title](title.md): Title of panel presented to configure waypoints along a route. If no panel is provided, the panel title will default to “Add Stop”.
- [image](image.md): An optional image displayed alongside the @c title in the options panel, serving as an entry point to the multi-stop panel.
