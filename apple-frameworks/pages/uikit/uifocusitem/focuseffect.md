> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uifocusitem/focuseffect

# focusEffect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The visual effect to apply when the item becomes focused.

## Declaration

```swift
@NSCopying optional var focusEffect: UIFocusEffect? { get }
```

<a id="Discussion"></a>

## Discussion

A `nil` value indicates that the system shouldn’t apply any visual effects when the item becomes focused.

If you don’t implement this property, its value is `nil`.

# focusEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The visual effect to apply when the item becomes focused.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIFocusEffect * focusEffect;
```

<a id="Discussion"></a>

## Discussion

A `nil` value indicates that the system shouldn’t apply any visual effects when the item becomes focused.

If you don’t implement this property, its value is `nil`.
