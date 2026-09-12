> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuitem/action](https://developer.apple.com/documentation/uikit/uimenuitem/action)

# action (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A selector identifying the method of the responder object to invoke for handling of the menu command.

> For more information, see [UIMenuItem](../uimenuitem.md).

## Declaration

```swift
var action: Selector { get set }
```

<a id="Discussion"></a>

## Discussion

The action selector cannot be `NULL`.

## See Also

### Accessing menu-item attributes

- [title](title.md): Deprecated. The title of the menu item.

# action (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A selector identifying the method of the responder object to invoke for handling of the menu command.

> For more information, see [UIMenuItem](../uimenuitem.md).

## Declaration

```objectivec
@property (nonatomic) SEL action;
```

<a id="Discussion"></a>

## Discussion

The action selector cannot be `NULL`.

## See Also

### Accessing menu-item attributes

- [title](title.md): Deprecated. The title of the menu item.
