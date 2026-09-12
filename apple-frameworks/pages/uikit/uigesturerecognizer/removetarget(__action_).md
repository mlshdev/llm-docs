> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/removetarget(_:action:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/removetarget(_:action:))

# removeTarget(\_:action:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes a target and an action from a gesture-recognizer object.

## Declaration

```swift
func removeTarget(_ target: Any?, action: Selector?)
```

## Parameters

- `target`: An object that currently is a recipient of action messages sent by the receiver when the represented gesture occurs. Specify `nil` if you want to remove all targets from the receiver.
- `action`: A selector identifying a method of a target to be invoked by the action message. Specify `NULL` if you want to remove all actions from the receiver.

<a id="Discussion"></a>

## Discussion

Calling this method removes the specified target-action pair. Passing `nil` for `target` matches all targets and passing `NULL` for `action` matches all actions.

## See Also

### Related Documentation

- [init(target:action:)](init%28target_action_%29.md): Creates a gesture recognizer with a target and an action selector.

### Adding and removing targets and actions

- [addTarget(\_:action:)](addtarget%28__action_%29.md): Adds a target and an action to a gesture-recognizer object.

# removeTarget:action: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes a target and an action from a gesture-recognizer object.

## Declaration

```objectivec
- (void) removeTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: An object that currently is a recipient of action messages sent by the receiver when the represented gesture occurs. Specify `nil` if you want to remove all targets from the receiver.
- `action`: A selector identifying a method of a target to be invoked by the action message. Specify `NULL` if you want to remove all actions from the receiver.

<a id="Discussion"></a>

## Discussion

Calling this method removes the specified target-action pair. Passing `nil` for `target` matches all targets and passing `NULL` for `action` matches all actions.

## See Also

### Related Documentation

- [initWithTarget:action:](init%28target_action_%29.md): Creates a gesture recognizer with a target and an action selector.

### Adding and removing targets and actions

- [addTarget:action:](addtarget%28__action_%29.md): Adds a target and an action to a gesture-recognizer object.
