> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfieldpasteitem](https://developer.apple.com/documentation/uikit/uisearchtextfieldpasteitem)

# UISearchTextFieldPasteItem (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A protocol that supports pasting tokens.

## Declaration

```swift
@MainActor protocol UISearchTextFieldPasteItem : UITextPasteItem
```

<a id="overview"></a>

## Overview

When implementing [textPasteConfigurationSupporting(\_:transform:)](uitextpastedelegate/textpasteconfigurationsupporting%28__transform_%29.md), your [UITextPasteDelegate](uitextpastedelegate.md) can decide whether to paste the item as text or as a token. If the [UITextPasteItem](uitextpasteitem.md) it receives is a [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md), you can call [setSearchTokenResult(\_:)](uisearchtextfieldpasteitem/setsearchtokenresult%28__%29.md) to prepare a token for pasting instead of text.

## Topics

### Providing a token

- [setSearchTokenResult(\_:)](uisearchtextfieldpasteitem/setsearchtokenresult%28__%29.md): Sets a paste item’s search token from an item provider.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UITextPasteItem](uitextpasteitem.md)

## See Also

### Pasteboard support

- [UITextPasteItem](uitextpasteitem.md): The interface for obtaining information about, and interacting with, a text item for pasting or dropping.
- [UITextPasteDelegate](uitextpastedelegate.md): The interface for handling pasting and dropping of text, using item providers.
- [UITextPasteConfigurationSupporting](uitextpasteconfigurationsupporting.md): The interface for text-oriented responder objects to participate in the unified paste and drop system in iOS.

# UISearchTextFieldPasteItem (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A protocol that supports pasting tokens.

## Declaration

```objectivec
@protocol UISearchTextFieldPasteItem <UITextPasteItem>
```

<a id="overview"></a>

## Overview

When implementing [textPasteConfigurationSupporting:transformPasteItem:](uitextpastedelegate/textpasteconfigurationsupporting%28__transform_%29.md), your [UITextPasteDelegate](uitextpastedelegate.md) can decide whether to paste the item as text or as a token. If the [UITextPasteItem](uitextpasteitem.md) it receives is a [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md), you can call [setSearchTokenResult:](uisearchtextfieldpasteitem/setsearchtokenresult%28__%29.md) to prepare a token for pasting instead of text.

## Topics

### Providing a token

- [setSearchTokenResult:](uisearchtextfieldpasteitem/setsearchtokenresult%28__%29.md): Sets a paste item’s search token from an item provider.

## Relationships

### Inherits From

- [UITextPasteItem](uitextpasteitem.md)

## See Also

### Pasteboard support

- [UITextPasteItem](uitextpasteitem.md): The interface for obtaining information about, and interacting with, a text item for pasting or dropping.
- [UITextPasteDelegate](uitextpastedelegate.md): The interface for handling pasting and dropping of text, using item providers.
- [UITextPasteConfigurationSupporting](uitextpasteconfigurationsupporting.md): The interface for text-oriented responder objects to participate in the unified paste and drop system in iOS.
