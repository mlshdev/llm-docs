> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiblureffect/init(style:)](https://developer.apple.com/documentation/uikit/uiblureffect/init(style:))

# init(style:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a blur effect with the designated style.

## Declaration

```swift
init(style: UIBlurEffect.Style)
```

## Parameters

- `style`: The intensity of the blur effect. See [UIBlurEffect.Style](style.md) for valid options.

<a id="return-value"></a>

## Return Value

The blur effect to be used by a UIVisualEffectView object.

# effectWithStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a blur effect with the designated style.

## Declaration

```objectivec
+ (UIBlurEffect *) effectWithStyle:(UIBlurEffectStyle) style;
```

## Parameters

- `style`: The intensity of the blur effect. See [UIBlurEffectStyle](style.md) for valid options.

<a id="return-value"></a>

## Return Value

The blur effect to be used by a UIVisualEffectView object.
