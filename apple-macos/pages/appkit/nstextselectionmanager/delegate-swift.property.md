> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/delegate-swift.property](https://developer.apple.com/documentation/appkit/nstextselectionmanager/delegate-swift.property)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The delegate of the text selection manager.

## Declaration

```swift
weak var delegate: (any NSTextSelectionManager.Delegate)? { get set }
```

<a id="discussion"></a>

## Discussion

The delegate is responsible for storing the current text selection and responding to selection-related events.

## See Also

### Setting a delegate

- [NSTextSelectionManager.Delegate](delegate-swift.protocol.md): A set of methods that manage text selection state and let you customize selection behavior.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The delegate of the text selection manager.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextSelectionManagerDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

The delegate is responsible for storing the current text selection and responding to selection-related events.

## See Also

### Setting a delegate

- [NSTextSelectionManagerDelegate](delegate-swift.protocol.md): A set of methods that manage text selection state and let you customize selection behavior.
