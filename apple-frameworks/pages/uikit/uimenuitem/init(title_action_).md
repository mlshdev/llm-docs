> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuitem/init(title:action:)](https://developer.apple.com/documentation/uikit/uimenuitem/init(title:action:))

# init(title:action:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Creates and returns a menu-item object initialized with the given title and action.

> For more information, see [UIMenuItem](../uimenuitem.md).

## Declaration

```swift
init(title: String, action: Selector)
```

## Parameters

- `title`: The title of the menu item.
- `action`: A selector identifying the method of the responder object to invoke for handling the command represented by the menu item.

<a id="return-value"></a>

## Return Value

An initialized `UIMenuItem` object, or `nil` if there was a problem creating the object.

# initWithTitle:action: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Creates and returns a menu-item object initialized with the given title and action.

> For more information, see [UIMenuItem](../uimenuitem.md).

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title action:(SEL) action;
```

## Parameters

- `title`: The title of the menu item.
- `action`: A selector identifying the method of the responder object to invoke for handling the command represented by the menu item.

<a id="return-value"></a>

## Return Value

An initialized `UIMenuItem` object, or `nil` if there was a problem creating the object.
