> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager](https://developer.apple.com/documentation/appkit/nstextselectionmanager)

# NSTextSelectionManager (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 27.0+

An object that coordinates text selection behavior for custom text views.

## Declaration

```swift
@MainActor class NSTextSelectionManager
```

<a id="overview"></a>

## Overview

[NSTextSelectionManager](nstextselectionmanager.md) provides a centralized way to manage text selection interactions using a set of gesture recognizers. For keyboard-based selection, integrate [NSTextSelectionNavigation](nstextselectionnavigation.md) with your view. The selection manager works with a delegate to update and respond to selection changes, and with a data source to query the text layout system.

## Topics

### Setting a delegate

- [delegate](nstextselectionmanager/delegate-swift.property.md): The delegate of the text selection manager.
- [NSTextSelectionManager.Delegate](nstextselectionmanager/delegate-swift.protocol.md): A set of methods that manage text selection state and let you customize selection behavior.

### Configuring text selection

- [textSelectionMode](nstextselectionmanager/textselectionmode.md): The interaction mode for text selection.
- [NSTextSelectionManager.Mode](nstextselectionmanager/mode.md): Values for text selection interaction modes.
- [textSelectionDataSource](nstextselectionmanager/textselectiondatasource.md): The data source that provides text layout information to the selection manager.

### Managing gesture recognizers

- [gesturesForFailureRequirements](nstextselectionmanager/gesturesforfailurerequirements.md): The gesture recognizers managed by the selection manager.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Location and selection

- [NSTextRange](nstextrange.md): A class that represents a contiguous range between two locations inside document contents.
- [NSTextSelection](nstextselection.md): A class that represents a single logical selection context that corresponds to an insertion point.
- [NSTextSelectionNavigation](nstextselectionnavigation.md): An interface you use to expose methods for obtaining results from actions performed on text selections.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.

# NSTextSelectionManager (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 27.0+

An object that coordinates text selection behavior for custom text views.

## Declaration

```objectivec
@interface NSTextSelectionManager : NSObject
```

<a id="overview"></a>

## Overview

[NSTextSelectionManager](nstextselectionmanager.md) provides a centralized way to manage text selection interactions using a set of gesture recognizers. For keyboard-based selection, integrate [NSTextSelectionNavigation](nstextselectionnavigation.md) with your view. The selection manager works with a delegate to update and respond to selection changes, and with a data source to query the text layout system.

## Topics

### Setting a delegate

- [delegate](nstextselectionmanager/delegate-swift.property.md): The delegate of the text selection manager.
- [NSTextSelectionManagerDelegate](nstextselectionmanager/delegate-swift.protocol.md): A set of methods that manage text selection state and let you customize selection behavior.

### Configuring text selection

- [textSelectionMode](nstextselectionmanager/textselectionmode.md): The interaction mode for text selection.
- [NSTextSelectionMode](nstextselectionmanager/mode.md): Values for text selection interaction modes.
- [textSelectionDataSource](nstextselectionmanager/textselectiondatasource.md): The data source that provides text layout information to the selection manager.

### Managing gesture recognizers

- [gesturesForFailureRequirements](nstextselectionmanager/gesturesforfailurerequirements.md): The gesture recognizers managed by the selection manager.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Location and selection

- [NSTextRange](nstextrange.md): A class that represents a contiguous range between two locations inside document contents.
- [NSTextSelection](nstextselection.md): A class that represents a single logical selection context that corresponds to an insertion point.
- [NSTextSelectionNavigation](nstextselectionnavigation.md): An interface you use to expose methods for obtaining results from actions performed on text selections.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
