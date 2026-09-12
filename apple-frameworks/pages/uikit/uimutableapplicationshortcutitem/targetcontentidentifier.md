> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableapplicationshortcutitem/targetcontentidentifier](https://developer.apple.com/documentation/uikit/uimutableapplicationshortcutitem/targetcontentidentifier)

# targetContentIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that determines which scene handles the quick action.

## Declaration

```swift
var targetContentIdentifier: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an object to this property when you want a specific scene of your app to handle quick actions. UIKit applies the value in this property to the activation conditions defined by the [UISceneActivationConditions](../uisceneactivationconditions.md) objects of the available scenes. Based on the predicates you specify, UIKit selects the most appropriate scene for handling the action.

# targetContentIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that determines which scene handles the quick action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) id targetContentIdentifier;
```

<a id="Discussion"></a>

## Discussion

Assign an object to this property when you want a specific scene of your app to handle quick actions. UIKit applies the value in this property to the activation conditions defined by the [UISceneActivationConditions](../uisceneactivationconditions.md) objects of the available scenes. Based on the predicates you specify, UIKit selects the most appropriate scene for handling the action.
