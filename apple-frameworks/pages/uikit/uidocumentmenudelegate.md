> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentmenudelegate](https://developer.apple.com/documentation/uikit/uidocumentmenudelegate)

# UIDocumentMenuDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A set of methods that you must implement to track user interactions with a document menu view controller.

> For more information, see [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md).

## Declaration

```swift
@MainActor protocol UIDocumentMenuDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The document menu calls the methods of this protocol when the user selects a document picker or dismisses the menu. If the user selects a document picker, set the picker’s delegate and present it.

## Topics

### Responding to user actions

- [documentMenu(\_:didPickDocumentPicker:)](uidocumentmenudelegate/documentmenu%28__didpickdocumentpicker_%29.md): Deprecated. Tells the delegate that the user has selected a document picker from the menu.
- [documentMenuWasCancelled(\_:)](uidocumentmenudelegate/documentmenuwascancelled%28__%29.md): Deprecated. Tells the delegate that the user dismissed the document menu.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the user-selected document picker

- [delegate](uidocumentmenuviewcontroller/delegate.md): Deprecated. The document menu’s delegate.

# UIDocumentMenuDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A set of methods that you must implement to track user interactions with a document menu view controller.

> For more information, see [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md).

## Declaration

```objectivec
@protocol UIDocumentMenuDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The document menu calls the methods of this protocol when the user selects a document picker or dismisses the menu. If the user selects a document picker, set the picker’s delegate and present it.

## Topics

### Responding to user actions

- [documentMenu:didPickDocumentPicker:](uidocumentmenudelegate/documentmenu%28__didpickdocumentpicker_%29.md): Deprecated. Tells the delegate that the user has selected a document picker from the menu.
- [documentMenuWasCancelled:](uidocumentmenudelegate/documentmenuwascancelled%28__%29.md): Deprecated. Tells the delegate that the user dismissed the document menu.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the user-selected document picker

- [delegate](uidocumentmenuviewcontroller/delegate.md): Deprecated. The document menu’s delegate.
