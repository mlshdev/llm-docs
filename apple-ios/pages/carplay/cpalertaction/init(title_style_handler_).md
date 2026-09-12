> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpalertaction/init(title:style:handler:)](https://developer.apple.com/documentation/carplay/cpalertaction/init(title:style:handler:))

# init(title:style:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates an alert action with a title, style, and action handler.

## Declaration

```swift
init(title: String, style: CPAlertAction.Style, handler: @escaping CPAlertActionHandler)
```

## Parameters

- `title`: The title displayed on the action button.
- `style`: The display style for the action button.
- `handler`: The block invoked after the user taps the action button.

<a id="return-value"></a>

## Return Value

A newly initialized alert action.

# initWithTitle:style:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates an alert action with a title, style, and action handler.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title style:(CPAlertActionStyle) style handler:(CPAlertActionHandler) handler;
```

## Parameters

- `title`: The title displayed on the action button.
- `style`: The display style for the action button.
- `handler`: The block invoked after the user taps the action button.

<a id="return-value"></a>

## Return Value

A newly initialized alert action.
