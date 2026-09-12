> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/currentnavigationalert](https://developer.apple.com/documentation/carplay/cpmaptemplate/currentnavigationalert)

# currentNavigationAlert (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The visible navigation alert.

## Declaration

```swift
var currentNavigationAlert: CPNavigationAlert? { get }
```

<a id="Discussion"></a>

## Discussion

If a navigation alert isn’t visible, the property returns [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Displaying a Navigation Alert

- [present(navigationAlert:animated:)](present%28navigationalert_animated_%29.md): Displays a navigation alert on the map template.
- [dismissNavigationAlert(animated:completion:)](dismissnavigationalert%28animated_completion_%29.md): Tells the map template to dismiss the visable navigation alert.
- [CPNavigationAlert](../cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.

# currentNavigationAlert (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The visible navigation alert.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CPNavigationAlert * currentNavigationAlert;
```

<a id="Discussion"></a>

## Discussion

If a navigation alert isn’t visible, the property returns [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Displaying a Navigation Alert

- [presentNavigationAlert:animated:](present%28navigationalert_animated_%29.md): Displays a navigation alert on the map template.
- [dismissNavigationAlertAnimated:completion:](dismissnavigationalert%28animated_completion_%29.md): Tells the map template to dismiss the visable navigation alert.
- [CPNavigationAlert](../cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.
