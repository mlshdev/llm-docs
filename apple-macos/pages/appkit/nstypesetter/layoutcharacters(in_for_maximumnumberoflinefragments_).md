> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/layoutcharacters(in:for:maximumnumberoflinefragments:)](https://developer.apple.com/documentation/appkit/nstypesetter/layoutcharacters(in:for:maximumnumberoflinefragments:))

# layoutCharacters(in:for:maximumNumberOfLineFragments:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Lays out characters in the given character range for the specified layout manager.

## Declaration

```swift
func layoutCharacters(in characterRange: NSRange, for layoutManager: NSLayoutManager, maximumNumberOfLineFragments maxNumLines: Int) -> NSRange
```

## Parameters

- `characterRange`: The range of the characters to lay out.
- `layoutManager`: The layout manager that does the drawing.
- `maxNumLines`: The maximum number of line fragments to lay out. Specify `NSUIntegerMax` for unlimited number of line fragments.

<a id="return-value"></a>

## Return Value

The method returns the actual character range that the receiving `NSTypesetter` processed.

<a id="Discussion"></a>

## Discussion

The layout process can be interrupted when the number of line fragments exceeds `maxNumLines`.

# layoutCharactersInRange:forLayoutManager:maximumNumberOfLineFragments: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Lays out characters in the given character range for the specified layout manager.

## Declaration

```objectivec
- (NSRange) layoutCharactersInRange:(NSRange) characterRange forLayoutManager:(NSLayoutManager *) layoutManager maximumNumberOfLineFragments:(NSUInteger) maxNumLines;
```

## Parameters

- `characterRange`: The range of the characters to lay out.
- `layoutManager`: The layout manager that does the drawing.
- `maxNumLines`: The maximum number of line fragments to lay out. Specify `NSUIntegerMax` for unlimited number of line fragments.

<a id="return-value"></a>

## Return Value

The method returns the actual character range that the receiving `NSTypesetter` processed.

<a id="Discussion"></a>

## Discussion

The layout process can be interrupted when the number of line fragments exceeds `maxNumLines`.
