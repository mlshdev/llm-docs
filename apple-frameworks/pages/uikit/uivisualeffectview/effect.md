> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivisualeffectview/effect](https://developer.apple.com/documentation/uikit/uivisualeffectview/effect)

# effect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The visual effect provided by the view.

## Declaration

```swift
@NSCopying var effect: UIVisualEffect? { get set }
```

<a id="Discussion"></a>

## Discussion

The effect is either a [UIBlurEffect](../uiblureffect.md) or a [UIVibrancyEffect](../uivibrancyeffect.md).

## See Also

### Retrieving view information

- [contentView](contentview.md): A view object that can have a visual effect view added to it.

# effect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The visual effect provided by the view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIVisualEffect * effect;
```

<a id="Discussion"></a>

## Discussion

The effect is either a [UIBlurEffect](../uiblureffect.md) or a [UIVibrancyEffect](../uivibrancyeffect.md).

## See Also

### Retrieving view information

- [contentView](contentview.md): A view object that can have a visual effect view added to it.
