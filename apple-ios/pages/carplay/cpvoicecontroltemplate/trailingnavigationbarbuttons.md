> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontroltemplate/trailingnavigationbarbuttons](https://developer.apple.com/documentation/carplay/cpvoicecontroltemplate/trailingnavigationbarbuttons)

# trailingNavigationBarButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An array of bar buttons to be displayed on the trailing side of the navigation bar.

## Declaration

```swift
var trailingNavigationBarButtons: [CPBarButton] { get set }
```

<a id="discussion"></a>

## Discussion

> **Note**

> The navigation bar may display a maximum of 2 buttons in the trailing space. Setting more than 2 buttons to this property will only display the first 2 buttons.

# trailingNavigationBarButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An array of bar buttons to be displayed on the trailing side of the navigation bar.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<CPBarButton *> * trailingNavigationBarButtons;
```

<a id="discussion"></a>

## Discussion

> **Note**

> The navigation bar may display a maximum of 2 buttons in the trailing space. Setting more than 2 buttons to this property will only display the first 2 buttons.
