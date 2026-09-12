> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponderstandardeditactions/selectall(_:)](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions/selectall(_:))

# selectAll(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Selects all of the content in the current responder.

## Declaration

```swift
optional func selectAll(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Select All command from an editing menu. The command selects all content in the responder. For example, a text view selects all of its text and displays an appropriate selection interface.

## See Also

### Handling selection commands

- [select(\_:)](select%28__%29.md): Selects the content in your responder.

# selectAll: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Selects all of the content in the current responder.

## Declaration

```objectivec
- (void) selectAll:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Select All command from an editing menu. The command selects all content in the responder. For example, a text view selects all of its text and displays an appropriate selection interface.

## See Also

### Handling selection commands

- [select:](select%28__%29.md): Selects the content in your responder.
