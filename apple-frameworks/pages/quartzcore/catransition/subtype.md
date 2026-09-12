> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransition/subtype](https://developer.apple.com/documentation/quartzcore/catransition/subtype)

# subtype (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies an optional subtype that indicates the direction for the predefined motion-based transitions.

## Declaration

```swift
var subtype: CATransitionSubtype? { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values are shown in  [Common Transition Subtypes](../common-transition-subtypes.md). The default is `nil`.

This property is ignored if a custom transition is specified in the [filter](filter.md) property.

## See Also

### Transition Properties

- [type](type.md): Specifies the predefined transition type.

# subtype (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies an optional subtype that indicates the direction for the predefined motion-based transitions.

## Declaration

```objectivec
@property (copy, nullable) CATransitionSubtype subtype;
```

<a id="Discussion"></a>

## Discussion

The possible values are shown in  [Common Transition Subtypes](../common-transition-subtypes.md). The default is `nil`.

This property is ignored if a custom transition is specified in the [filter](filter.md) property.

## See Also

### Transition Properties

- [type](type.md): Specifies the predefined transition type.
