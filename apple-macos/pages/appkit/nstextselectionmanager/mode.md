> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/mode](https://developer.apple.com/documentation/appkit/nstextselectionmanager/mode)

# NSTextSelectionManager.Mode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Values for text selection interaction modes.

## Declaration

```swift
enum Mode
```

<a id="overview"></a>

## Overview

These modes determine how the text selection manager handles user interaction with text content.

## Topics

### Enumeration Cases

- [NSTextSelectionManager.Mode.editable](mode/editable.md): Text is editable and selectable.
- [NSTextSelectionManager.Mode.nonInteractive](mode/noninteractive.md): Text is neither selectable nor editable.
- [NSTextSelectionManager.Mode.selectable](mode/selectable.md): Text is selectable but not editable.

### Initializers

- [init(rawValue:)](mode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring text selection

- [textSelectionMode](textselectionmode.md): The interaction mode for text selection.
- [textSelectionDataSource](textselectiondatasource.md): The data source that provides text layout information to the selection manager.

# NSTextSelectionMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Values for text selection interaction modes.

## Declaration

```objectivec
enum NSTextSelectionMode : NSInteger;
```

<a id="overview"></a>

## Overview

These modes determine how the text selection manager handles user interaction with text content.

## Topics

### Enumeration Cases

- [NSTextSelectionModeEditable](mode/editable.md): Text is editable and selectable.
- [NSTextSelectionModeNonInteractive](mode/noninteractive.md): Text is neither selectable nor editable.
- [NSTextSelectionModeSelectable](mode/selectable.md): Text is selectable but not editable.

## See Also

### Configuring text selection

- [textSelectionMode](textselectionmode.md): The interaction mode for text selection.
- [textSelectionDataSource](textselectiondatasource.md): The data source that provides text layout information to the selection manager.
