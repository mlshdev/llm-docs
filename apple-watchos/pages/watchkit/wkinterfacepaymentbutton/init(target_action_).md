> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacepaymentbutton/init(target:action:)](https://developer.apple.com/documentation/watchkit/wkinterfacepaymentbutton/init(target:action:))

# init(target:action:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 6.0+

Creates a payment button for use in SwiftUI.

## Declaration

```swift
init(target: Any?, action: Selector)
```

## Parameters

- `target`: The object whose action method is called.
- `action`: A selector identifying the action method called when the user taps the button.

<a id="Discussion"></a>

## Discussion

When the user taps the button, the system calls the `action` method on the `target`.

Use this initializer to create an instance that you can wrap in a [WKInterfaceObjectRepresentable](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable) view. If you aren’t using SwiftUI, create the control by dragging it from the Object library to your storyboard instead.

# initWithTarget:action: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Creates a payment button for use in SwiftUI.

## Declaration

```objectivec
- (instancetype) initWithTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: The object whose action method is called.
- `action`: A selector identifying the action method called when the user taps the button.

<a id="Discussion"></a>

## Discussion

When the user taps the button, the system calls the `action` method on the `target`.

Use this initializer to create an instance that you can wrap in a [WKInterfaceObjectRepresentable](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable) view. If you aren’t using SwiftUI, create the control by dragging it from the Object library to your storyboard instead.
