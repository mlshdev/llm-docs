> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/iseditable](https://developer.apple.com/documentation/uikit/uitextinput/iseditable)

# isEditable (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the text view contains editable text.

## Declaration

```swift
optional var isEditable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Text views are normally editable, and the default value of this property is [true](https://developer.apple.com/documentation/swift/true) if you don’t provide an implementation. When implementing a custom text view, you might implement this property and return [false](https://developer.apple.com/documentation/swift/false) to prevent outside agents from modifying the content of your view. For example, you might disable editing to prevent the system’s writing tools panel from pasting content into your view.

# editable (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the text view contains editable text.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isEditable) BOOL editable;
```

<a id="Discussion"></a>

## Discussion

Text views are normally editable, and the default value of this property is [true](https://developer.apple.com/documentation/swift/true) if you don’t provide an implementation. When implementing a custom text view, you might implement this property and return [false](https://developer.apple.com/documentation/swift/false) to prevent outside agents from modifying the content of your view. For example, you might disable editing to prevent the system’s writing tools panel from pasting content into your view.
