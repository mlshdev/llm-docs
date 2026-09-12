> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewaction/style](https://developer.apple.com/documentation/uikit/uipreviewaction/style)

# UIPreviewAction.Style (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 17.1) · iPadOS 9.0+ (deprecated in 17.1) · Mac Catalyst 13.1+ (deprecated in 17.1) · tvOS 9.0+ (deprecated in 17.1)

The style for a peek quick action.

> For more information, see [UIPreviewAction](../uipreviewaction.md).

## Declaration

```swift
enum Style
```

<a id="overview"></a>

## Overview

Use these styles with instances of the [UIPreviewAction](../uipreviewaction.md) and [UIPreviewActionGroup](../uipreviewactiongroup.md) classes.

## Topics

### Constants

- [UIPreviewAction.Style.default](style/default.md): Deprecated. The default style.
- [UIPreviewAction.Style.selected](style/selected.md): Deprecated. The style for a selected peek quick action.
- [UIPreviewAction.Style.destructive](style/destructive.md): Deprecated. The style for a peek quick action that changes or deletes data.

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a peek quick action

- [init(title:style:handler:)](init%28title_style_handler_%29.md): Deprecated. Creates a peek quick action using a specified title, style, and handler.
- [handler](handler.md): Deprecated. The block called when the peek quick action is selected by the user.

# UIPreviewActionStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 17.1) · iPadOS 9.0+ (deprecated in 17.1) · Mac Catalyst 13.1+ (deprecated in 17.1) · tvOS 9.0+ (deprecated in 17.1) · visionOS 1.0+ (deprecated in 1.0)

The style for a peek quick action.

> For more information, see [UIPreviewAction](../uipreviewaction.md).

## Declaration

```objectivec
enum UIPreviewActionStyle : NSInteger;
```

<a id="overview"></a>

## Overview

Use these styles with instances of the [UIPreviewAction](../uipreviewaction.md) and [UIPreviewActionGroup](../uipreviewactiongroup.md) classes.

## Topics

### Constants

- [UIPreviewActionStyleDefault](style/default.md): Deprecated. The default style.
- [UIPreviewActionStyleSelected](style/selected.md): Deprecated. The style for a selected peek quick action.
- [UIPreviewActionStyleDestructive](style/destructive.md): Deprecated. The style for a peek quick action that changes or deletes data.

## See Also

### Creating a peek quick action

- [actionWithTitle:style:handler:](init%28title_style_handler_%29.md): Deprecated. Creates a peek quick action using a specified title, style, and handler.
- [handler](handler.md): Deprecated. The block called when the peek quick action is selected by the user.
