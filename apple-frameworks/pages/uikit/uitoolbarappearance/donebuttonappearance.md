> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbarappearance/donebuttonappearance](https://developer.apple.com/documentation/uikit/uitoolbarappearance/donebuttonappearance)

# doneButtonAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 26.0) · iPadOS 13.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 13.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The appearance attributes for Done buttons.

## Declaration

```swift
@NSCopying var doneButtonAppearance: UIBarButtonItemAppearance { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to configure the appearance of bar button items that use the [done](../uibarbuttonitem/style-swift.enum/done.md) style, when appropriate. If the toolbar doesn’t have a done button, setting the value of this property has no effect.

# doneButtonAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 26.0) · iPadOS 13.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 13.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The appearance attributes for Done buttons.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) UIBarButtonItemAppearance * doneButtonAppearance;
```

<a id="Discussion"></a>

## Discussion

Use this property to configure the appearance of bar button items that use the [UIBarButtonItemStyleDone](../uibarbuttonitem/style-swift.enum/done.md) style, when appropriate. If the toolbar doesn’t have a done button, setting the value of this property has no effect.
