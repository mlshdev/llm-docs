> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentstorage/adjustedrange(from:foreditingtextselection:)](https://developer.apple.com/documentation/uikit/nstextcontentstorage/adjustedrange(from:foreditingtextselection:))

# adjustedRange(from:forEditingTextSelection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text range, if any, in the backing store that required manual adjustment after editing.

## Declaration

```swift
func adjustedRange(from textRange: NSTextRange, forEditingTextSelection: Bool) -> NSTextRange?
```

## Parameters

- `textRange`: The text range.
- `forEditingTextSelection`: A Boolean value that indicates if `textRange` is for the text selection associated with the edit session.

<a id="return-value"></a>

## Return Value

The  adjusted `TextRange` for the editing session, or `nil` of no adjustment was necessary

<a id="Discussion"></a>

## Discussion

When `textRange` is intersecting or following the current edited range, the method returns an adjusted range for the modification in the editing session.

## See Also

### Finding ranges, locations, and offsets

- [location(\_:offsetBy:)](location%28__offsetby_%29.md): Returns a new text location object based on an existing location and offset you provide.
- [offset(from:to:)](offset%28from_to_%29.md): Returns the number of characters between the specified locations.

# adjustedRangeFromRange:forEditingTextSelection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text range, if any, in the backing store that required manual adjustment after editing.

## Declaration

```objectivec
- (NSTextRange *) adjustedRangeFromRange:(NSTextRange *) textRange forEditingTextSelection:(BOOL) forEditingTextSelection;
```

## Parameters

- `textRange`: The text range.
- `forEditingTextSelection`: A Boolean value that indicates if `textRange` is for the text selection associated with the edit session.

<a id="return-value"></a>

## Return Value

The  adjusted `TextRange` for the editing session, or `nil` of no adjustment was necessary

<a id="Discussion"></a>

## Discussion

When `textRange` is intersecting or following the current edited range, the method returns an adjusted range for the modification in the editing session.

## See Also

### Finding ranges, locations, and offsets

- [locationFromLocation:withOffset:](location%28__offsetby_%29.md): Returns a new text location object based on an existing location and offset you provide.
- [offsetFromLocation:toLocation:](offset%28from_to_%29.md): Returns the number of characters between the specified locations.
