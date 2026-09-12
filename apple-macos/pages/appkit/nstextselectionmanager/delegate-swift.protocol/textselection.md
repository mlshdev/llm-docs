> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/delegate-swift.protocol/textselection](https://developer.apple.com/documentation/appkit/nstextselectionmanager/delegate-swift.protocol/textselection)

# textSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The current text selection.

## Declaration

```swift
var textSelection: NSTextSelection? { get set }
```

<a id="discussion"></a>

## Discussion

The text selection manager updates this property in response to user interactions. The delegate is responsible for storing and providing access to the current selection. The [NSTextLocation](../../nstextlocation.md) values that make up the [NSTextRange](../../nstextrange.md) objects can be any object that can describe a location in your text.

# textSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The current text selection.

## Declaration

```objectivec
@property (strong, nullable) NSTextSelection * textSelection;
```

<a id="discussion"></a>

## Discussion

The text selection manager updates this property in response to user interactions. The delegate is responsible for storing and providing access to the current selection. The [NSTextLocation](../../nstextlocation.md) values that make up the [NSTextRange](../../nstextrange.md) objects can be any object that can describe a location in your text.
