> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransition/type](https://developer.apple.com/documentation/quartzcore/catransition/type)

# type (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies the predefined transition type.

## Declaration

```swift
var type: CATransitionType { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values are shown in [Common Transition Types](../common-transition-types.md). This property is ignored if a custom transition is specified in the [filter](filter.md) property. The default is [fade](../catransitiontype/fade.md).

## See Also

### Transition Properties

- [subtype](subtype.md): Specifies an optional subtype that indicates the direction for the predefined motion-based transitions.

# type (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies the predefined transition type.

## Declaration

```objectivec
@property (copy) CATransitionType type;
```

<a id="Discussion"></a>

## Discussion

The possible values are shown in [Common Transition Types](../common-transition-types.md). This property is ignored if a custom transition is specified in the [filter](filter.md) property. The default is [kCATransitionFade](../catransitiontype/fade.md).

## See Also

### Transition Properties

- [subtype](subtype.md): Specifies an optional subtype that indicates the direction for the predefined motion-based transitions.
