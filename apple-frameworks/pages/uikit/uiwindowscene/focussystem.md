> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/focussystem](https://developer.apple.com/documentation/uikit/uiwindowscene/focussystem)

# focusSystem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The focus system that’s responsible for the window scene.

## Declaration

```swift
var focusSystem: UIFocusSystem? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the window scene doesn’t support focus.

# focusSystem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The focus system that’s responsible for the window scene.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIFocusSystem * focusSystem;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the window scene doesn’t support focus.
