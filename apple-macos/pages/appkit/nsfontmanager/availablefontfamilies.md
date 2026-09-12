> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/availablefontfamilies](https://developer.apple.com/documentation/appkit/nsfontmanager/availablefontfamilies)

# availableFontFamilies (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The names of the font families available in the system.

## Declaration

```swift
var availableFontFamilies: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Note that these fonts are in various system font directories.

## See Also

### Getting Available Fonts

- [availableFonts](availablefonts.md): The names of the fonts available in the system (not the [NSFont](../nsfont.md) objects themselves).
- [availableFontNames(with:)](availablefontnames%28with_%29.md): Returns the names of the fonts available in the system whose traits are described exactly by the given font trait mask (not the `NSFont` objects themselves).
- [availableMembers(ofFontFamily:)](availablemembers%28offontfamily_%29.md): Returns an array with one entry for each available member of a font family.

# availableFontFamilies (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The names of the font families available in the system.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * availableFontFamilies;
```

<a id="Discussion"></a>

## Discussion

Note that these fonts are in various system font directories.

## See Also

### Getting Available Fonts

- [availableFonts](availablefonts.md): The names of the fonts available in the system (not the [NSFont](../nsfont.md) objects themselves).
- [availableFontNamesWithTraits:](availablefontnames%28with_%29.md): Returns the names of the fonts available in the system whose traits are described exactly by the given font trait mask (not the `NSFont` objects themselves).
- [availableMembersOfFontFamily:](availablemembers%28offontfamily_%29.md): Returns an array with one entry for each available member of a font family.
