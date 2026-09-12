> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/usesruler](https://developer.apple.com/documentation/appkit/nstextview/usesruler)

# usesRuler (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text views sharing the receiver’s layout manager use a ruler.

## Declaration

```swift
var usesRuler: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to cause text views sharing the receiver’s layout manager to respond to [NSRulerView](../nsrulerview.md) client messages and to paragraph-related menu actions, and update the ruler (when visible) as the selection changes with its paragraph and tab attributes, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [rangeForUserParagraphAttributeChange](rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.

### Using text formatting controls

- [isRulerVisible](isrulervisible.md): A Boolean value that controls whether the scroll view enclosing text views sharing the receiver’s layout manager displays the ruler.
- [usesInspectorBar](usesinspectorbar.md): A Boolean value that indicates whether this text view uses the inspector bar.

# usesRuler (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text views sharing the receiver’s layout manager use a ruler.

## Declaration

```objectivec
@property BOOL usesRuler;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to cause text views sharing the receiver’s layout manager to respond to [NSRulerView](../nsrulerview.md) client messages and to paragraph-related menu actions, and update the ruler (when visible) as the selection changes with its paragraph and tab attributes, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [rangeForUserParagraphAttributeChange](rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.

### Using text formatting controls

- [rulerVisible](isrulervisible.md): A Boolean value that controls whether the scroll view enclosing text views sharing the receiver’s layout manager displays the ruler.
- [usesInspectorBar](usesinspectorbar.md): A Boolean value that indicates whether this text view uses the inspector bar.
