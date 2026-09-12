> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneclosureconfirmation/init(title:message:actions:)](https://developer.apple.com/documentation/uikit/uisceneclosureconfirmation/init(title:message:actions:))

# init(title:message:actions:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a scene closure confirmation with the provided parameters.

## Declaration

```swift
convenience init(title: String?, message: String?, actions: [UIAlertAction])
```

## Parameters

- `title`: The title of the confirmation. If not provided, defaults to a generic localized title.
- `message`: Optional descriptive text that provides more details.
- `actions`: Actions to be included in the confirmation dialog. Close and Cancel are shown by default.

# confirmationWithTitle:message:actions: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a scene closure confirmation with the provided parameters.

## Declaration

```objectivec
+ (instancetype) confirmationWithTitle:(NSString *) title message:(NSString *) message actions:(NSArray<UIAlertAction *> *) actions;
```

## Parameters

- `title`: The title of the confirmation. If not provided, defaults to a generic localized title.
- `message`: Optional descriptive text that provides more details.
- `actions`: Actions to be included in the confirmation dialog. Close and Cancel are shown by default.
