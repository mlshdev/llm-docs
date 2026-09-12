> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceauthorizationappleidbutton/init(target:action:)](https://developer.apple.com/documentation/watchkit/wkinterfaceauthorizationappleidbutton/init(target:action:))

# init(target:action:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 6.0+ (deprecated in 6.1)

Creates an authorization button for use in SwiftUI.

> Use [init(style:target:action:)](init%28style_target_action_%29.md) instead.

## Declaration

```swift
init(target: Any?, action: Selector)
```

## Parameters

- `target`: The object whose action method is called.
- `action`: A selector identifying the action method called when the user taps the button.

<a id="Discussion"></a>

## Discussion

When the user taps the button, the system calls the `action` method on the target.

Use this initializer to create an instance that you can wrap in a [WKInterfaceObjectRepresentable](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable) view. If you aren’t using SwiftUI, create the control by dragging it from the Object library to your storyboard instead.

## See Also

### Initializing for SwiftUI

- [init(style:target:action:)](init%28style_target_action_%29.md): Creates an authorization button for use in SwiftUI.
- [WKInterfaceAuthorizationAppleIDButton.Style](style.md): Values that define an authorization button’s style.

# initWithTarget:action: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+ (deprecated in 6.1)

Creates an authorization button for use in SwiftUI.

> Use [initWithStyle:target:action:](init%28style_target_action_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: The object whose action method is called.
- `action`: A selector identifying the action method called when the user taps the button.

<a id="Discussion"></a>

## Discussion

When the user taps the button, the system calls the `action` method on the target.

Use this initializer to create an instance that you can wrap in a [WKInterfaceObjectRepresentable](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable) view. If you aren’t using SwiftUI, create the control by dragging it from the Object library to your storyboard instead.

## See Also

### Initializing for SwiftUI

- [initWithStyle:target:action:](init%28style_target_action_%29.md): Creates an authorization button for use in SwiftUI.
- [WKInterfaceAuthorizationAppleIDButtonStyle](style.md): Values that define an authorization button’s style.
