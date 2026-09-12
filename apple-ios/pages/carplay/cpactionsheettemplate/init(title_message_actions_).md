> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpactionsheettemplate/init(title:message:actions:)](https://developer.apple.com/documentation/carplay/cpactionsheettemplate/init(title:message:actions:))

# init(title:message:actions:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates an action sheet template.

## Declaration

```swift
init(title: String?, message: String?, actions: [CPAlertAction])
```

## Parameters

- `title`: The title of the action sheet.
- `message`: A descriptive message providing details about the reason for displaying the action sheet.
- `actions`: A list of actions available on the action sheet. The array must contain at least one action.

<a id="return-value"></a>

## Return Value

A newly initialized action sheet template.

# initWithTitle:message:actions: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates an action sheet template.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title message:(NSString *) message actions:(NSArray<CPAlertAction *> *) actions;
```

## Parameters

- `title`: The title of the action sheet.
- `message`: A descriptive message providing details about the reason for displaying the action sheet.
- `actions`: A list of actions available on the action sheet. The array must contain at least one action.

<a id="return-value"></a>

## Return Value

A newly initialized action sheet template.
