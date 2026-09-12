> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/substitutefont(for:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/substitutefont(for:))

# substituteFont(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a screen font suitable for use in place of the specified original font,.

## Declaration

```swift
func substituteFont(for originalFont: NSFont) -> NSFont
```

<a id="Discussion"></a>

## Discussion

A screen font can be substituted if the receiver is set to use screen fonts and if no [NSTextView](../nstextview.md) associated with the receiver is scaled or rotated. If a suitable screen font isn’t available or usable, this method returns the original font.

# substituteFontForFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a screen font suitable for use in place of the specified original font,.

## Declaration

```objectivec
- (NSFont *) substituteFontForFont:(NSFont *) originalFont;
```

<a id="Discussion"></a>

## Discussion

A screen font can be substituted if the receiver is set to use screen fonts and if no [NSTextView](../nstextview.md) associated with the receiver is scaled or rotated. If a suitable screen font isn’t available or usable, this method returns the original font.
