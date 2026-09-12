> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextualaction/init(style:title:handler:)](https://developer.apple.com/documentation/uikit/uicontextualaction/init(style:title:handler:))

# init(style:title:handler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new contextual action with the specified title and handler.

## Declaration

```swift
convenience init(style: UIContextualAction.Style, title: String?, handler: @escaping UIContextualAction.Handler)
```

## Parameters

- `style`: The style information to apply to the action button.
- `title`: The title of the action button.
- `handler`: The handler to execute when the user selects the action.

<a id="return-value"></a>

## Return Value

An initialized contextual action object.

# contextualActionWithStyle:title:handler: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new contextual action with the specified title and handler.

## Declaration

```objectivec
+ (instancetype) contextualActionWithStyle:(UIContextualActionStyle) style title:(NSString *) title handler:(UIContextualActionHandler) handler;
```

## Parameters

- `style`: The style information to apply to the action button.
- `title`: The title of the action button.
- `handler`: The handler to execute when the user selects the action.

<a id="return-value"></a>

## Return Value

An initialized contextual action object.
