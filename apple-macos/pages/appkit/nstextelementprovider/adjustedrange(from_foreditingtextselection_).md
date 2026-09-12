> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextelementprovider/adjustedrange(from:foreditingtextselection:)](https://developer.apple.com/documentation/appkit/nstextelementprovider/adjustedrange(from:foreditingtextselection:))

# adjustedRange(from:forEditingTextSelection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

A method you implement if the location backing store requires manual adjustment after editing.

## Declaration

```swift
optional func adjustedRange(from textRange: NSTextRange, forEditingTextSelection: Bool) -> NSTextRange?
```

## Parameters

- `textRange`: An [NSTextRange](../nstextrange.md) that the method adjusts.
- `forEditingTextSelection`: A Boolean value that indicates if `textRange` is for the text selection associated with the edit session.

<a id="return-value"></a>

## Return Value

When `textRange` is intersecting or following the current edited range, the method returns the range adjusted for the modification in the editing session. Returns `nil`, when no adjustment necessary.

## See Also

### Adjusting the range of the text element

- [offset(from:to:)](offset%28from_to_%29.md): Returns the offset between the two specified locations.

# adjustedRangeFromRange:forEditingTextSelection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

A method you implement if the location backing store requires manual adjustment after editing.

## Declaration

```objectivec
- (NSTextRange *) adjustedRangeFromRange:(NSTextRange *) textRange forEditingTextSelection:(BOOL) forEditingTextSelection;
```

## Parameters

- `textRange`: An [NSTextRange](../nstextrange.md) that the method adjusts.
- `forEditingTextSelection`: A Boolean value that indicates if `textRange` is for the text selection associated with the edit session.

<a id="return-value"></a>

## Return Value

When `textRange` is intersecting or following the current edited range, the method returns the range adjusted for the modification in the editing session. Returns `nil`, when no adjustment necessary.

## See Also

### Adjusting the range of the text element

- [offsetFromLocation:toLocation:](offset%28from_to_%29.md): Returns the offset between the two specified locations.
