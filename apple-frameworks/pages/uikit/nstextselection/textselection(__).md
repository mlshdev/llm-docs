> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselection/textselection(_:)](https://developer.apple.com/documentation/uikit/nstextselection/textselection(_:))

# textSelection(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
