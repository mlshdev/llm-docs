> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/featurekey/typeidentifier](https://developer.apple.com/documentation/appkit/nsfontdescriptor/featurekey/typeidentifier)

# typeIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A key that indicates the type of the font feature.

## Declaration

```swift
static let typeIdentifier: NSFontDescriptor.FeatureKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object specifying a font feature type such as ligature, character shape, and so on. For more information on Apple Fonts see[Fonts for Apple platforms](https://developer.apple.com/fonts/) and the [AAT Font Feature Registry](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html).

## See Also

### Feature Keys

- [selectorIdentifier](selectoridentifier.md): A key that indicates the selector of the font feature.

# NSFontFeatureTypeIdentifierKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

A key that indicates the type of the font feature.

## Declaration

```objectivec
extern NSFontDescriptorFeatureKey NSFontFeatureTypeIdentifierKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object specifying a font feature type such as ligature, character shape, and so on. For more information on Apple Fonts see[Fonts for Apple platforms](https://developer.apple.com/fonts/) and the [AAT Font Feature Registry](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html).

## See Also

### Feature Keys

- [NSFontFeatureSelectorIdentifierKey](selectoridentifier.md): A key that indicates the selector of the font feature.
