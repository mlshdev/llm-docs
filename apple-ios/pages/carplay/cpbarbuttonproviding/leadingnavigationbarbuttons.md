> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbarbuttonproviding/leadingnavigationbarbuttons](https://developer.apple.com/documentation/carplay/cpbarbuttonproviding/leadingnavigationbarbuttons)

# leadingNavigationBarButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of bar buttons to display on the leading side of the navigation bar.

## Declaration

```swift
var leadingNavigationBarButtons: [CPBarButton] { get set }
```

<a id="Discussion"></a>

## Discussion

The navigation bar displays up to two buttons in the leading space. When including more than two buttons in the array, the system displays only the first two buttons.

## See Also

### Providing Navigation Bar Buttons

- [backButton](backbutton.md): A button to display as the Back button on the navigation bar.
- [trailingNavigationBarButtons](trailingnavigationbarbuttons.md): An array of bar buttons to display on the trailing side of the navigation bar.
- [CPBarButton](../cpbarbutton.md): A button for placement in a navigation bar.
- [CPMessageComposeBarButton](../cpmessagecomposebarbutton.md): A button that activates Siri and initiates the compose message flow.

# leadingNavigationBarButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of bar buttons to display on the leading side of the navigation bar.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<CPBarButton *> * leadingNavigationBarButtons;
```

<a id="Discussion"></a>

## Discussion

The navigation bar displays up to two buttons in the leading space. When including more than two buttons in the array, the system displays only the first two buttons.

## See Also

### Providing Navigation Bar Buttons

- [backButton](backbutton.md): A button to display as the Back button on the navigation bar.
- [trailingNavigationBarButtons](trailingnavigationbarbuttons.md): An array of bar buttons to display on the trailing side of the navigation bar.
- [CPBarButton](../cpbarbutton.md): A button for placement in a navigation bar.
- [CPMessageComposeBarButton](../cpmessagecomposebarbutton.md): A button that activates Siri and initiates the compose message flow.
