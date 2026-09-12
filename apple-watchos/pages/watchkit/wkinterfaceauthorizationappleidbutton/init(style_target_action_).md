> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceauthorizationappleidbutton/init(style:target:action:)](https://developer.apple.com/documentation/watchkit/wkinterfaceauthorizationappleidbutton/init(style:target:action:))

# init(style:target:action:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 6.1+

Creates an authorization button for use in SwiftUI.

## Declaration

```swift
init(style: WKInterfaceAuthorizationAppleIDButton.Style, target: Any?, action: Selector)
```

## Parameters

- `style`: The button’s style. For a list of possible values, see [WKInterfaceAuthorizationAppleIDButton.Style](style.md).
- `target`: The object whose action method is called.
- `action`: A selector identifying the action method called when the user taps the button.

<a id="Discussion"></a>

## Discussion

When the user taps the button, the system calls the `action` method on the target.

Use this initializer to create an instance that you can wrap in a [WKInterfaceObjectRepresentable](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable) view. If you aren’t using SwiftUI, create the control by dragging it from the Object library to your storyboard instead.

## See Also

### Initializing for SwiftUI

- [WKInterfaceAuthorizationAppleIDButton.Style](style.md): Values that define an authorization button’s style.
- [init(target:action:)](init%28target_action_%29.md): Deprecated. Creates an authorization button for use in SwiftUI.

# initWithStyle:target:action: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.1+

Creates an authorization button for use in SwiftUI.

## Declaration

```objectivec
- (instancetype) initWithStyle:(WKInterfaceAuthorizationAppleIDButtonStyle) style target:(id) target action:(SEL) action;
```

## Parameters

- `style`: The button’s style. For a list of possible values, see [WKInterfaceAuthorizationAppleIDButtonStyle](style.md).
- `target`: The object whose action method is called.
- `action`: A selector identifying the action method called when the user taps the button.

<a id="Discussion"></a>

## Discussion

When the user taps the button, the system calls the `action` method on the target.

Use this initializer to create an instance that you can wrap in a [WKInterfaceObjectRepresentable](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable) view. If you aren’t using SwiftUI, create the control by dragging it from the Object library to your storyboard instead.

## See Also

### Initializing for SwiftUI

- [WKInterfaceAuthorizationAppleIDButtonStyle](style.md): Values that define an authorization button’s style.
- [initWithTarget:action:](init%28target_action_%29.md): Deprecated. Creates an authorization button for use in SwiftUI.
