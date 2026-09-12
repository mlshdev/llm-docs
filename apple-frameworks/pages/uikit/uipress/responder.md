> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/responder](https://developer.apple.com/documentation/uikit/uipress/responder)

# responder (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A responder object.

## Declaration

```swift
var responder: UIResponder? { get }
```

<a id="Discussion"></a>

## Discussion

This property is a [UIResponder](../uiresponder.md) object that either is focused or is the [isFirstResponder](../uiresponder/isfirstresponder.md) object in the window when [UIApplication](../uiapplication.md) originally dispatched the press event.

# responder (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A responder object.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIResponder * responder;
```

<a id="Discussion"></a>

## Discussion

This property is a [UIResponder](../uiresponder.md) object that either is focused or is the [isFirstResponder](../uiresponder/isfirstresponder.md) object in the window when [UIApplication](../uiapplication.md) originally dispatched the press event.
