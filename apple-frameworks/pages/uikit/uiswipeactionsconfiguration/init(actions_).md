> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswipeactionsconfiguration/init(actions:)](https://developer.apple.com/documentation/uikit/uiswipeactionsconfiguration/init(actions:))

# init(actions:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a swipe action configuration object with the specified set of actions.

## Declaration

```swift
convenience init(actions: [UIContextualAction])
```

## Parameters

- `actions`: The swipe actions to display. The first item in the array represents the outermost action. For example, when the user swipes from right-to-left, the first action is rightmost. The first action is also the default action.

<a id="return-value"></a>

## Return Value

A newly initialized swipe action configuration object.

# configurationWithActions: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a swipe action configuration object with the specified set of actions.

## Declaration

```objectivec
+ (instancetype) configurationWithActions:(NSArray<UIContextualAction *> *) actions;
```

## Parameters

- `actions`: The swipe actions to display. The first item in the array represents the outermost action. For example, when the user swipes from right-to-left, the first action is rightmost. The first action is also the default action.

<a id="return-value"></a>

## Return Value

A newly initialized swipe action configuration object.
