> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscribbleinteraction/ispencilinputexpected](https://developer.apple.com/documentation/uikit/uiscribbleinteraction/ispencilinputexpected)

# isPencilInputExpected (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates the user is likely to use Apple Pencil and handwriting instead of the keyboard to enter text.

## Declaration

```swift
class var isPencilInputExpected: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If set to [true](https://developer.apple.com/documentation/swift/true), adjust the layout of UI elements that aren’t optimal for direct handwriting input. This allows more room for interaction with Apple Pencil. For example, small or resizable text fields can temporarily change their height to receive input from Apple Pencil, while preserving padding along the bottom of the text field.

# pencilInputExpected (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates the user is likely to use Apple Pencil and handwriting instead of the keyboard to enter text.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isPencilInputExpected) BOOL pencilInputExpected;
```

<a id="Discussion"></a>

## Discussion

If set to [true](https://developer.apple.com/documentation/swift/true), adjust the layout of UI elements that aren’t optimal for direct handwriting input. This allows more room for interaction with Apple Pencil. For example, small or resizable text fields can temporarily change their height to receive input from Apple Pencil, while preserving padding along the bottom of the text field.
