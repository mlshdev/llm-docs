> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingviewcontrollerdelegate/textformattingviewcontroller:didchangevalue:](https://developer.apple.com/documentation/uikit/uitextformattingviewcontrollerdelegate/textformattingviewcontroller:didchangevalue:)

# textFormattingViewController:didChangeValue:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

Delegate method that will be invoked on any text formatting changes.

## Declaration

```objectivec
- (void) textFormattingViewController:(UITextFormattingViewController *) viewController didChangeValue:(UITextFormattingViewControllerChangeValue *) changeValue;
```

## Parameters

- `viewController`: Text formatting controller in which action was performed.
- `changeValue`: Object describing the change made via view controller.
