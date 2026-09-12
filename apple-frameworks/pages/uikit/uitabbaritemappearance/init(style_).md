> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritemappearance/init(style:)](https://developer.apple.com/documentation/uikit/uitabbaritemappearance/init(style:))

# init(style:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates an appearance object with appropriate default values for a tab bar, displaying its items with the specified layout style.

## Declaration

```swift
init(style: UITabBarItemAppearance.Style)
```

## Parameters

- `style`: The layout style for the appearance attributes. UIKit uses this value to configure the default appearance attributes. For a list of possible values, see [UITabBarItemAppearance.Style](style.md).

<a id="return-value"></a>

## Return Value

A new appearance object containing appropriate default values for the specified layout style.

## See Also

### Creating a tab bar item appearance object

- [init()](init%28%29.md): Creates an appearance object with default values for a stacked tab bar item.
- [init(coder:)](init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

# initWithStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates an appearance object with appropriate default values for a tab bar, displaying its items with the specified layout style.

## Declaration

```objectivec
- (instancetype) initWithStyle:(UITabBarItemAppearanceStyle) style;
```

## Parameters

- `style`: The layout style for the appearance attributes. UIKit uses this value to configure the default appearance attributes. For a list of possible values, see [UITabBarItemAppearanceStyle](style.md).

<a id="return-value"></a>

## Return Value

A new appearance object containing appropriate default values for the specified layout style.

## See Also

### Creating a tab bar item appearance object

- [init](init%28%29.md): Creates an appearance object with default values for a stacked tab bar item.
- [initWithCoder:](init%28coder_%29.md): Creates an appearance object from data in an unarchiver.
