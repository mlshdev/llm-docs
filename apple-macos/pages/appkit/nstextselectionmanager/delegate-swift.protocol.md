> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/delegate-swift.protocol](https://developer.apple.com/documentation/appkit/nstextselectionmanager/delegate-swift.protocol)

# NSTextSelectionManager.Delegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A set of methods that manage text selection state and let you customize selection behavior.

## Declaration

```swift
protocol Delegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Delegates are responsible for managing the text selection state and can customize selection behavior by implementing optional methods.

## Topics

### Instance Properties

- [textSelection](delegate-swift.protocol/textselection.md): The current text selection.

### Instance Methods

- [selectionManager(\_:frameOfTextContainerAt:)](delegate-swift.protocol/selectionmanager%28__frameoftextcontainerat_%29.md): Returns the frame of the text container at the specified point.
- [selectionManager(\_:locationOfTextContainerAt:)](delegate-swift.protocol/selectionmanager%28__locationoftextcontainerat_%29.md): Returns the text location of the text container at the specified point.
- [selectionManager(\_:makeDraggingSession:)](delegate-swift.protocol/selectionmanager%28__makedraggingsession_%29.md): Creates and returns a dragging session for the specified gesture recognizer.
- [selectionManager(\_:shouldBeginSelectionAt:)](delegate-swift.protocol/selectionmanager%28__shouldbeginselectionat_%29.md): Asks the delegate whether a selection can begin at the specified point.
- [selectionManagerDidEndSelection(\_:)](delegate-swift.protocol/selectionmanagerdidendselection%28__%29.md): Tells the delegate that a selection gesture has ended.
- [selectionManagerWillBeginSelection(\_:)](delegate-swift.protocol/selectionmanagerwillbeginselection%28__%29.md): Tells the delegate that a selection gesture is about to begin.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setting a delegate

- [delegate](delegate-swift.property.md): The delegate of the text selection manager.

# NSTextSelectionManagerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A set of methods that manage text selection state and let you customize selection behavior.

## Declaration

```objectivec
@protocol NSTextSelectionManagerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Delegates are responsible for managing the text selection state and can customize selection behavior by implementing optional methods.

## Topics

### Instance Properties

- [textSelection](delegate-swift.protocol/textselection.md): The current text selection.

### Instance Methods

- [selectionManager:frameOfTextContainerAtPoint:](delegate-swift.protocol/selectionmanager%28__frameoftextcontainerat_%29.md): Returns the frame of the text container at the specified point.
- [selectionManager:locationOfTextContainerAtPoint:](delegate-swift.protocol/selectionmanager%28__locationoftextcontainerat_%29.md): Returns the text location of the text container at the specified point.
- [selectionManager:makeDraggingSessionWithGesture:](delegate-swift.protocol/selectionmanager%28__makedraggingsession_%29.md): Creates and returns a dragging session for the specified gesture recognizer.
- [selectionManager:shouldBeginSelectionAtPoint:](delegate-swift.protocol/selectionmanager%28__shouldbeginselectionat_%29.md): Asks the delegate whether a selection can begin at the specified point.
- [selectionManagerDidEndSelection:](delegate-swift.protocol/selectionmanagerdidendselection%28__%29.md): Tells the delegate that a selection gesture has ended.
- [selectionManagerWillBeginSelection:](delegate-swift.protocol/selectionmanagerwillbeginselection%28__%29.md): Tells the delegate that a selection gesture is about to begin.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setting a delegate

- [delegate](delegate-swift.property.md): The delegate of the text selection manager.
