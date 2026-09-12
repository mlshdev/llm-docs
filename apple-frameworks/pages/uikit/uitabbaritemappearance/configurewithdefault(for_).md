> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritemappearance/configurewithdefault(for:)](https://developer.apple.com/documentation/uikit/uitabbaritemappearance/configurewithdefault(for:))

# configureWithDefault(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Configures the tab bar item appearance object with appropriate values for the specified style.

## Declaration

```swift
func configureWithDefault(for style: UITabBarItemAppearance.Style)
```

## Parameters

- `style`: The layout style for the appearance attributes. UIKit configures the object with the default appearance attributes for the specified style. For a list of possible values, see [UITabBarItemAppearance.Style](style.md).

## See Also

### Resetting the appearance properties

- [UITabBarItemAppearance.Style](style.md): Constants indicating the layout of a tab bar item’s content.

# configureWithDefaultForStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Configures the tab bar item appearance object with appropriate values for the specified style.

## Declaration

```objectivec
- (void) configureWithDefaultForStyle:(UITabBarItemAppearanceStyle) style;
```

## Parameters

- `style`: The layout style for the appearance attributes. UIKit configures the object with the default appearance attributes for the specified style. For a list of possible values, see [UITabBarItemAppearanceStyle](style.md).

## See Also

### Resetting the appearance properties

- [UITabBarItemAppearanceStyle](style.md): Constants indicating the layout of a tab bar item’s content.
