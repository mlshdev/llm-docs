> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmultistopcardconfiguration/buttons](https://developer.apple.com/documentation/carplay/cpmultistopcardconfiguration/buttons)

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
