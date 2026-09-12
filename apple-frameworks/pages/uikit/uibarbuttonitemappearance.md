> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemappearance](https://developer.apple.com/documentation/uikit/uibarbuttonitemappearance)

# UIBarButtonItemAppearance (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the appearance of bar button items.

## Declaration

```swift
@MainActor class UIBarButtonItemAppearance
```

<a id="overview"></a>

## Overview

Use a [UIBarButtonItemAppearance](uibarbuttonitemappearance.md) object to customize the appearance of a bar button item in each of its possible states. You can customize the appearance differently for different states. For example, you might apply different colors to the button’s title in the [normal](uibarbuttonitemappearance/normal.md) and [highlighted](uibarbuttonitemappearance/highlighted.md) states.

## Topics

### Creating a bar button item appearance object

- [init(style:)](uibarbuttonitemappearance/init%28style_%29.md): Creates an appearance with default values that are appropriate for the specified button style.
- [init()](uibarbuttonitemappearance/init%28%29.md): Creates an appearance object with default values that are appropriate for a plain button.
- [init(coder:)](uibarbuttonitemappearance/init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

### Copying a bar button item bar appearance object

- [copy()](uibarbuttonitemappearance/copy%28%29.md): Creates a copy of the appearance object.

### Resetting the appearance properties

- [configureWithDefault(for:)](uibarbuttonitemappearance/configurewithdefault%28for_%29.md): Configures the bar button item appearance object with appropriate values for the specified button style.

### Configuring attributes for different button states

- [normal](uibarbuttonitemappearance/normal.md): The appearance data to apply to the button when it’s in the normal state.
- [disabled](uibarbuttonitemappearance/disabled.md): The appearance data to apply to the button when it’s in the disabled state.
- [highlighted](uibarbuttonitemappearance/highlighted.md): The appearance data to apply to the button when it’s in the highlighted state.
- [focused](uibarbuttonitemappearance/focused.md): The appearance data to apply to the button when it’s focused.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Shared appearance

- [UIBarAppearance](uibarappearance.md): An object for customizing the basic appearance of system bars.
- [UIBarButtonItemStateAppearance](uibarbuttonitemstateappearance.md): A data object containing the specific customizations for a bar button item in a particular state.

# UIBarButtonItemAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the appearance of bar button items.

## Declaration

```objectivec
@interface UIBarButtonItemAppearance : NSObject
```

<a id="overview"></a>

## Overview

Use a [UIBarButtonItemAppearance](uibarbuttonitemappearance.md) object to customize the appearance of a bar button item in each of its possible states. You can customize the appearance differently for different states. For example, you might apply different colors to the button’s title in the [normal](uibarbuttonitemappearance/normal.md) and [highlighted](uibarbuttonitemappearance/highlighted.md) states.

## Topics

### Creating a bar button item appearance object

- [initWithStyle:](uibarbuttonitemappearance/init%28style_%29.md): Creates an appearance with default values that are appropriate for the specified button style.
- [init](uibarbuttonitemappearance/init%28%29.md): Creates an appearance object with default values that are appropriate for a plain button.
- [initWithCoder:](uibarbuttonitemappearance/init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

### Copying a bar button item bar appearance object

- [copy](uibarbuttonitemappearance/copy%28%29.md): Creates a copy of the appearance object.

### Resetting the appearance properties

- [configureWithDefaultForStyle:](uibarbuttonitemappearance/configurewithdefault%28for_%29.md): Configures the bar button item appearance object with appropriate values for the specified button style.

### Configuring attributes for different button states

- [normal](uibarbuttonitemappearance/normal.md): The appearance data to apply to the button when it’s in the normal state.
- [disabled](uibarbuttonitemappearance/disabled.md): The appearance data to apply to the button when it’s in the disabled state.
- [highlighted](uibarbuttonitemappearance/highlighted.md): The appearance data to apply to the button when it’s in the highlighted state.
- [focused](uibarbuttonitemappearance/focused.md): The appearance data to apply to the button when it’s focused.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shared appearance

- [UIBarAppearance](uibarappearance.md): An object for customizing the basic appearance of system bars.
- [UIBarButtonItemStateAppearance](uibarbuttonitemstateappearance.md): A data object containing the specific customizations for a bar button item in a particular state.
