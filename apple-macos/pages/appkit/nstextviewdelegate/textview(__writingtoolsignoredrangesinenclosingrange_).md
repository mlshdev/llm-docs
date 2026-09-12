> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:writingtoolsignoredrangesinenclosingrange:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:writingtoolsignoredrangesinenclosingrange:))

# textView(\_:writingToolsIgnoredRangesInEnclosingRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, writingToolsIgnoredRangesInEnclosingRange enclosingRange: NSRange) -> [NSValue]
```

## Mentioned In

- [Customizing Writing Tools behavior for AppKit views](../customizing-writing-tools-behavior-for-system-views.md)

## See Also

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin(\_:)](textviewwritingtoolswillbegin%28__%29.md)
- [textViewWritingToolsDidEnd(\_:)](textviewwritingtoolsdidend%28__%29.md)

# textView:writingToolsIgnoredRangesInEnclosingRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```objectivec
- (NSArray<NSValue *> *) textView:(NSTextView *) textView writingToolsIgnoredRangesInEnclosingRange:(NSRange) enclosingRange;
```

## Mentioned In

- [Customizing Writing Tools behavior for AppKit views](../customizing-writing-tools-behavior-for-system-views.md)

## See Also

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin:](textviewwritingtoolswillbegin%28__%29.md)
- [textViewWritingToolsDidEnd:](textviewwritingtoolsdidend%28__%29.md)
