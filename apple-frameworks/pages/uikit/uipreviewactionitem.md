> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewactionitem](https://developer.apple.com/documentation/uikit/uipreviewactionitem)

# UIPreviewActionItem (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A set of methods that defines the styles you can apply to peek quick actions and peek quick action groups, and defines a read-only accessor for the user-visible title of a peek quick action.

## Declaration

```swift
@MainActor protocol UIPreviewActionItem : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Important**

>  Don’t adopt this protocol in custom classes.

The [UIPreviewActionItem](uipreviewactionitem.md) protocol is adopted by the [UIPreviewAction](uipreviewaction.md) and [UIPreviewActionGroup](uipreviewactiongroup.md) classes.

## Topics

### Accessing peek quick action properties

- [title](uipreviewactionitem/title.md): The peek quick action item’s title.

### Constants

- [UIPreviewAction.Style](uipreviewaction/style.md): Deprecated. The style for a peek quick action.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIPreviewAction](uipreviewaction.md)
- [UIPreviewActionGroup](uipreviewactiongroup.md)

## See Also

### 3D Touch interactions

- [UIPreviewInteraction](uipreviewinteraction.md): A class that registers a view to provide a custom user experience in response to 3D Touch interactions.
- [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md): A set of methods for communicating the progress of a preview interaction.

# UIPreviewActionItem (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A set of methods that defines the styles you can apply to peek quick actions and peek quick action groups, and defines a read-only accessor for the user-visible title of a peek quick action.

## Declaration

```objectivec
@protocol UIPreviewActionItem <NSObject>
```

<a id="overview"></a>

## Overview

> **Important**

>  Don’t adopt this protocol in custom classes.

The [UIPreviewActionItem](uipreviewactionitem.md) protocol is adopted by the [UIPreviewAction](uipreviewaction.md) and [UIPreviewActionGroup](uipreviewactiongroup.md) classes.

## Topics

### Accessing peek quick action properties

- [title](uipreviewactionitem/title.md): The peek quick action item’s title.

### Constants

- [UIPreviewActionStyle](uipreviewaction/style.md): Deprecated. The style for a peek quick action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIPreviewAction](uipreviewaction.md)
- [UIPreviewActionGroup](uipreviewactiongroup.md)

## See Also

### 3D Touch interactions

- [UIPreviewInteraction](uipreviewinteraction.md): A class that registers a view to provide a custom user experience in response to 3D Touch interactions.
- [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md): A set of methods for communicating the progress of a preview interaction.
