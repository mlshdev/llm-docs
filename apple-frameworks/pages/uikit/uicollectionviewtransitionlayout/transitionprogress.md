> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewtransitionlayout/transitionprogress](https://developer.apple.com/documentation/uikit/uicollectionviewtransitionlayout/transitionprogress)

# transitionProgress (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The completion percentage of the transition.

## Declaration

```swift
var transitionProgress: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

During the transition, you should set the value of this property periodically and call [invalidateLayout()](../uicollectionviewlayout/invalidatelayout%28%29.md) to force the collection view to update item positions. If you are driving the transition with a gesture recognizer, you would likely set this property from the handler method of your gesture recognizer.

## See Also

### Updating the transition information

- [updateValue(\_:forAnimatedKey:)](updatevalue%28__foranimatedkey_%29.md): Sets the value for an animatable key.
- [value(forAnimatedKey:)](value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.

# transitionProgress (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The completion percentage of the transition.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat transitionProgress;
```

<a id="Discussion"></a>

## Discussion

During the transition, you should set the value of this property periodically and call [invalidateLayout](../uicollectionviewlayout/invalidatelayout%28%29.md) to force the collection view to update item positions. If you are driving the transition with a gesture recognizer, you would likely set this property from the handler method of your gesture recognizer.

## See Also

### Updating the transition information

- [updateValue:forAnimatedKey:](updatevalue%28__foranimatedkey_%29.md): Sets the value for an animatable key.
- [valueForAnimatedKey:](value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.
