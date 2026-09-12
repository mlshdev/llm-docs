> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcontroller/uselayouttolayoutnavigationtransitions](https://developer.apple.com/documentation/uikit/uicollectionviewcontroller/uselayouttolayoutnavigationtransitions)

# useLayoutToLayoutNavigationTransitions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean that indicates whether the collection view controller coordinates with a navigation controller for transitions.

## Declaration

```swift
var useLayoutToLayoutNavigationTransitions: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property helps facilitate transitions between two or more collection view controllers using a navigation controller. When configuring your navigation controller, install a collection view controller as the root object on the navigation stack and set its value for this property to [false](https://developer.apple.com/documentation/swift/false). When the user selects an item that would require pushing a new collection view controller on the stack, set the value of this property for the new view controller to [true](https://developer.apple.com/documentation/swift/true). When you do that, the navigation controller performs an animated layout change between the contents of the two collection view controllers instead of the traditional push animation. Similarly, popping the topmost collection view controller off the stack animates back to the previous layout. The navigation controller drives the transition between the view controllers, including the ability to drive the transition interactively.

You must set the value of this property before pushing the collection view controller onto a navigation stack. Do not change the value of this property after the view controller is already on the navigation stack.

# useLayoutToLayoutNavigationTransitions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean that indicates whether the collection view controller coordinates with a navigation controller for transitions.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL useLayoutToLayoutNavigationTransitions;
```

<a id="Discussion"></a>

## Discussion

This property helps facilitate transitions between two or more collection view controllers using a navigation controller. When configuring your navigation controller, install a collection view controller as the root object on the navigation stack and set its value for this property to [false](https://developer.apple.com/documentation/swift/false). When the user selects an item that would require pushing a new collection view controller on the stack, set the value of this property for the new view controller to [true](https://developer.apple.com/documentation/swift/true). When you do that, the navigation controller performs an animated layout change between the contents of the two collection view controllers instead of the traditional push animation. Similarly, popping the topmost collection view controller off the stack animates back to the previous layout. The navigation controller drives the transition between the view controllers, including the ability to drive the transition interactively.

You must set the value of this property before pushing the collection view controller onto a navigation stack. Do not change the value of this property after the view controller is already on the navigation stack.
