> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/init(target:action:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/init(target:action:))

# init(target:action:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a gesture recognizer with a target and an action selector.

## Declaration

```swift
init(target: Any?, action: Selector?)
```

## Parameters

- `target`: An object that is the recipient of action messages sent by the receiver when it recognizes a gesture. `nil` isn’t a valid value.
- `action`: A selector that identifies the method implemented by the target to handle the gesture recognized by the receiver. The action selector must conform to the signature described in the class overview. `nil` isn’t a valid value.

<a id="return-value"></a>

## Return Value

An initialized instance of a concrete [UIGestureRecognizer](../uigesturerecognizer.md) subclass.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer. After creating the gesture recognizer, you may associate other target-action pairs with it by calling [addTarget(\_:action:)](addtarget%28__action_%29.md).

## See Also

### Related Documentation

- [removeTarget(\_:action:)](removetarget%28__action_%29.md): Removes a target and an action from a gesture-recognizer object.
- [addTarget(\_:action:)](addtarget%28__action_%29.md): Adds a target and an action to a gesture-recognizer object.

### Initializing a gesture recognizer

- [init(coder:)](init%28coder_%29.md): Creates a gesture recognizer from data in an unarchiver.
- [init()](init%28%29.md): Creates a gesture recognizer.

# initWithTarget:action: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a gesture recognizer with a target and an action selector.

## Declaration

```objectivec
- (instancetype) initWithTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: An object that is the recipient of action messages sent by the receiver when it recognizes a gesture. `nil` isn’t a valid value.
- `action`: A selector that identifies the method implemented by the target to handle the gesture recognized by the receiver. The action selector must conform to the signature described in the class overview. `nil` isn’t a valid value.

<a id="return-value"></a>

## Return Value

An initialized instance of a concrete [UIGestureRecognizer](../uigesturerecognizer.md) subclass.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer. After creating the gesture recognizer, you may associate other target-action pairs with it by calling [addTarget:action:](addtarget%28__action_%29.md).

## See Also

### Related Documentation

- [removeTarget:action:](removetarget%28__action_%29.md): Removes a target and an action from a gesture-recognizer object.
- [addTarget:action:](addtarget%28__action_%29.md): Adds a target and an action to a gesture-recognizer object.

### Initializing a gesture recognizer

- [initWithCoder:](init%28coder_%29.md): Creates a gesture recognizer from data in an unarchiver.
- [init](init%28%29.md): Creates a gesture recognizer.
