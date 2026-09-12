> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/addtarget(_:action:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/addtarget(_:action:))

# addTarget(\_:action:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a target and an action to a gesture-recognizer object.

## Declaration

```swift
func addTarget(_ target: Any, action: Selector)
```

## Parameters

- `target`: An object that is a recipient of action messages sent by the receiver when the represented gesture occurs. `nil` is not a valid value.
- `action`: A selector identifying a method of a target to be invoked by the action message. `NULL` is not a valid value.

<a id="Discussion"></a>

## Discussion

You may call this method multiple times to specify multiple target-action pairs. However, if you request to add a target-action pair that has already been added, then the request is ignored.

## See Also

### Related Documentation

- [init(target:action:)](init%28target_action_%29.md): Creates a gesture recognizer with a target and an action selector.

### Adding and removing targets and actions

- [removeTarget(\_:action:)](removetarget%28__action_%29.md): Removes a target and an action from a gesture-recognizer object.

# addTarget:action: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a target and an action to a gesture-recognizer object.

## Declaration

```objectivec
- (void) addTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: An object that is a recipient of action messages sent by the receiver when the represented gesture occurs. `nil` is not a valid value.
- `action`: A selector identifying a method of a target to be invoked by the action message. `NULL` is not a valid value.

<a id="Discussion"></a>

## Discussion

You may call this method multiple times to specify multiple target-action pairs. However, if you request to add a target-action pair that has already been added, then the request is ignored.

## See Also

### Related Documentation

- [initWithTarget:action:](init%28target_action_%29.md): Creates a gesture recognizer with a target and an action selector.

### Adding and removing targets and actions

- [removeTarget:action:](removetarget%28__action_%29.md): Removes a target and an action from a gesture-recognizer object.
