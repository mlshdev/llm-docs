> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivisualeffectview/init(effect:)](https://developer.apple.com/documentation/uikit/uivisualeffectview/init(effect:))

# init(effect:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a new visual effect view with the designated visual effect.

## Declaration

```swift
init(effect: UIVisualEffect?)
```

## Parameters

- `effect`: The [UIVisualEffect](../uivisualeffect.md) you provide for the view. This can be a [UIBlurEffect](../uiblureffect.md) or a [UIVibrancyEffect](../uivibrancyeffect.md).

<a id="return-value"></a>

## Return Value

The new view containing the designated visual effect.

## See Also

### Creating a visual effect view

- [init(coder:)](init%28coder_%29.md): Creates a visual effect view from data in an unarchiver.

# initWithEffect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a new visual effect view with the designated visual effect.

## Declaration

```objectivec
- (instancetype) initWithEffect:(UIVisualEffect *) effect;
```

## Parameters

- `effect`: The [UIVisualEffect](../uivisualeffect.md) you provide for the view. This can be a [UIBlurEffect](../uiblureffect.md) or a [UIVibrancyEffect](../uivibrancyeffect.md).

<a id="return-value"></a>

## Return Value

The new view containing the designated visual effect.

## See Also

### Creating a visual effect view

- [initWithCoder:](init%28coder_%29.md): Creates a visual effect view from data in an unarchiver.
