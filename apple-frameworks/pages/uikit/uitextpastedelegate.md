> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextpastedelegate](https://developer.apple.com/documentation/uikit/uitextpastedelegate)

# UITextPasteDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for handling pasting and dropping of text, using item providers.

## Declaration

```swift
@MainActor protocol UITextPasteDelegate : NSObjectProtocol
```

## Topics

### Preparing to paste a text paste item

- [textPasteConfigurationSupporting(\_:transform:)](uitextpastedelegate/textpasteconfigurationsupporting%28__transform_%29.md): Tells the delegate to transform the pasted or dropped text item.

### Pasting the text paste item

- [textPasteConfigurationSupporting(\_:combineItemAttributedStrings:for:)](uitextpastedelegate/textpasteconfigurationsupporting%28__combineitemattributedstrings_for_%29.md): Asks the delegate to combine multiple strings into a single attributed string.
- [textPasteConfigurationSupporting(\_:performPasteOf:to:)](uitextpastedelegate/textpasteconfigurationsupporting%28__performpasteof_to_%29.md): Asks the delegate to explicitly handle the final incorporation of a pasted or dropped string of text into the text view.

### Animating the paste operation

- [textPasteConfigurationSupporting(\_:shouldAnimatePasteOf:to:)](uitextpastedelegate/textpasteconfigurationsupporting%28__shouldanimatepasteof_to_%29.md): Asks the delegate if the paste or drop operation should be animated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Pasteboard support

- [UITextPasteItem](uitextpasteitem.md): The interface for obtaining information about, and interacting with, a text item for pasting or dropping.
- [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.
- [UITextPasteConfigurationSupporting](uitextpasteconfigurationsupporting.md): The interface for text-oriented responder objects to participate in the unified paste and drop system in iOS.

# UITextPasteDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for handling pasting and dropping of text, using item providers.

## Declaration

```objectivec
@protocol UITextPasteDelegate <NSObject>
```

## Topics

### Preparing to paste a text paste item

- [textPasteConfigurationSupporting:transformPasteItem:](uitextpastedelegate/textpasteconfigurationsupporting%28__transform_%29.md): Tells the delegate to transform the pasted or dropped text item.

### Pasting the text paste item

- [textPasteConfigurationSupporting:combineItemAttributedStrings:forRange:](uitextpastedelegate/textpasteconfigurationsupporting%28__combineitemattributedstrings_for_%29.md): Asks the delegate to combine multiple strings into a single attributed string.
- [textPasteConfigurationSupporting:performPasteOfAttributedString:toRange:](uitextpastedelegate/textpasteconfigurationsupporting%28__performpasteof_to_%29.md): Asks the delegate to explicitly handle the final incorporation of a pasted or dropped string of text into the text view.

### Animating the paste operation

- [textPasteConfigurationSupporting:shouldAnimatePasteOfAttributedString:toRange:](uitextpastedelegate/textpasteconfigurationsupporting%28__shouldanimatepasteof_to_%29.md): Asks the delegate if the paste or drop operation should be animated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Pasteboard support

- [UITextPasteItem](uitextpasteitem.md): The interface for obtaining information about, and interacting with, a text item for pasting or dropping.
- [UISearchTextFieldPasteItem](uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.
- [UITextPasteConfigurationSupporting](uitextpasteconfigurationsupporting.md): The interface for text-oriented responder objects to participate in the unified paste and drop system in iOS.
