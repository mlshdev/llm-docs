> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingcoordinatordelegate](https://developer.apple.com/documentation/uikit/uitextformattingcoordinatordelegate)

# UITextFormattingCoordinatorDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The methods that delegates of text-formatting coordinators implement to apply font panel settings to the currently selected text.

## Declaration

```swift
@MainActor protocol UITextFormattingCoordinatorDelegate : NSObjectProtocol
```

## Topics

### Updating Text Attributes

- [updateTextAttributes(conversionHandler:)](uitextformattingcoordinatordelegate/updatetextattributes%28conversionhandler_%29.md): Applies the current font panel settings to the selected text.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Applying Updated Text Attributes

- [delegate](uitextformattingcoordinator/delegate.md): The delegate of the text-formatting coordinator.

# UITextFormattingCoordinatorDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The methods that delegates of text-formatting coordinators implement to apply font panel settings to the currently selected text.

## Declaration

```objectivec
@protocol UITextFormattingCoordinatorDelegate <NSObject>
```

## Topics

### Updating Text Attributes

- [updateTextAttributesWithConversionHandler:](uitextformattingcoordinatordelegate/updatetextattributes%28conversionhandler_%29.md): Applies the current font panel settings to the selected text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Applying Updated Text Attributes

- [delegate](uitextformattingcoordinator/delegate.md): The delegate of the text-formatting coordinator.
