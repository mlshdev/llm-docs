> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:completions:forpartialwordrange:indexofselecteditem:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:completions:forpartialwordrange:indexofselecteditem:))

# textView(\_:completions:forPartialWordRange:indexOfSelectedItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the actual completions for a partial word.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, completions words: [String], forPartialWordRange charRange: NSRange, indexOfSelectedItem index: UnsafeMutablePointer<Int>?) -> [String]
```

## Parameters

- `textView`: The text view sending the message.
- `words`: The proposed array of completions.
- `charRange`: The range of characters to be completed.
- `index`: On return, the index of the initially selected completion. The default is 0, and –1 indicates no selection.

<a id="return-value"></a>

## Return Value

The actual array of completions that will be presented for the partial word at the given range. Returning `nil` or a zero-length array suppresses completion.

# textView:completions:forPartialWordRange:indexOfSelectedItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the actual completions for a partial word.

## Declaration

```objectivec
- (NSArray<NSString *> *) textView:(NSTextView *) textView completions:(NSArray<NSString *> *) words forPartialWordRange:(NSRange) charRange indexOfSelectedItem:(NSInteger *) index;
```

## Parameters

- `textView`: The text view sending the message.
- `words`: The proposed array of completions.
- `charRange`: The range of characters to be completed.
- `index`: On return, the index of the initially selected completion. The default is 0, and –1 indicates no selection.

<a id="return-value"></a>

## Return Value

The actual array of completions that will be presented for the partial word at the given range. Returning `nil` or a zero-length array suppresses completion.
