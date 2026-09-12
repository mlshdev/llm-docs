> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/substitutefont(for:)](https://developer.apple.com/documentation/appkit/nstypesetter/substitutefont(for:))

# substituteFont(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a screen font suitable for use in place of a given font.

## Declaration

```swift
func substituteFont(for originalFont: NSFont) -> NSFont
```

## Parameters

- `originalFont`: The original font.

<a id="return-value"></a>

## Return Value

A screen font suitable for use in place of `originalFont`. This method returns `originalFont` if a screen font can’t be used or isn’t available.

<a id="Discussion"></a>

## Discussion

A screen font can only be substituted if the receiver is set to use screen fonts and if no text view associated with the receiver is scaled or rotated.

# substituteFontForFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a screen font suitable for use in place of a given font.

## Declaration

```objectivec
- (NSFont *) substituteFontForFont:(NSFont *) originalFont;
```

## Parameters

- `originalFont`: The original font.

<a id="return-value"></a>

## Return Value

A screen font suitable for use in place of `originalFont`. This method returns `originalFont` if a screen font can’t be used or isn’t available.

<a id="Discussion"></a>

## Discussion

A screen font can only be substituted if the receiver is set to use screen fonts and if no text view associated with the receiver is scaled or rotated.
