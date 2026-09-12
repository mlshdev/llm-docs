> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/present(navigationalert:animated:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/present(navigationalert:animated:))

# present(navigationAlert:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Displays a navigation alert on the map template.

## Declaration

```swift
func present(navigationAlert: CPNavigationAlert, animated: Bool)
```

## Parameters

- `navigationAlert`: The navigation alert to display.
- `animated`: To animate the display of the alert, set to [true](https://developer.apple.com/documentation/swift/true); otherwise, set to [false](https://developer.apple.com/documentation/swift/false) to immediately display the alert.

<a id="Discussion"></a>

## Discussion

This method has no effect when the map template is already displaying a navigation alert. Dismiss the current alert before presenting a new one.

## See Also

### Displaying a Navigation Alert

- [dismissNavigationAlert(animated:completion:)](dismissnavigationalert%28animated_completion_%29.md): Tells the map template to dismiss the visable navigation alert.
- [currentNavigationAlert](currentnavigationalert.md): The visible navigation alert.
- [CPNavigationAlert](../cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.

# presentNavigationAlert:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Displays a navigation alert on the map template.

## Declaration

```objectivec
- (void) presentNavigationAlert:(CPNavigationAlert *) navigationAlert animated:(BOOL) animated;
```

## Parameters

- `navigationAlert`: The navigation alert to display.
- `animated`: To animate the display of the alert, set to [true](https://developer.apple.com/documentation/swift/true); otherwise, set to [false](https://developer.apple.com/documentation/swift/false) to immediately display the alert.

<a id="Discussion"></a>

## Discussion

This method has no effect when the map template is already displaying a navigation alert. Dismiss the current alert before presenting a new one.

## See Also

### Displaying a Navigation Alert

- [dismissNavigationAlertAnimated:completion:](dismissnavigationalert%28animated_completion_%29.md): Tells the map template to dismiss the visable navigation alert.
- [currentNavigationAlert](currentnavigationalert.md): The visible navigation alert.
- [CPNavigationAlert](../cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.
