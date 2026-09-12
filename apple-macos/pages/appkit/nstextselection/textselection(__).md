> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselection/textselection(_:)](https://developer.apple.com/documentation/appkit/nstextselection/textselection(_:))

# textSelection(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a subselection of the current text selection with the ranges you specify.

## Declaration

```swift
func textSelection(_ textRanges: [NSTextRange]) -> NSTextSelection
```

## Parameters

- `textRanges`: An array of text ranges.

<a id="return-value"></a>

## Return Value

A new [NSTextSelection](../nstextselection.md).

# textSelectionWithTextRanges: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a subselection of the current text selection with the ranges you specify.

## Declaration

```objectivec
- (NSTextSelection *) textSelectionWithTextRanges:(NSArray<NSTextRange *> *) textRanges;
```

## Parameters

- `textRanges`: An array of text ranges.

<a id="return-value"></a>

## Return Value

A new [NSTextSelection](../nstextselection.md).
