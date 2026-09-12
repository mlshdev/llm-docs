> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollectionmatchingoptionkey/includedisabledfontsoption](https://developer.apple.com/documentation/appkit/nsfontcollectionmatchingoptionkey/includedisabledfontsoption)

# includeDisabledFontsOption (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

An NSNumber object containing a Boolean value specifying whether disabled fonts should be included in the list of matching descriptors.

## Declaration

```swift
static let includeDisabledFontsOption: NSFontCollectionMatchingOptionKey
```

<a id="discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) indicates they should be included. When unspecified, CoreText assumes [false](https://developer.apple.com/documentation/swift/false). This option is intended only for font management applications. This option will make descriptor matching slower.

## See Also

### Type Properties

- [removeDuplicatesOption](removeduplicatesoption.md): An NSNumber object containing a Boolean value controlling whether more than one copy of a font with the same PostScript name should be included in the list of matching descriptors.
- [disallowAutoActivationOption](disallowautoactivationoption.md): An NSNumber object containing a Boolean value specifying that auto-activation should not be used to find missing fonts.

# NSFontCollectionIncludeDisabledFontsOption (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

An NSNumber object containing a Boolean value specifying whether disabled fonts should be included in the list of matching descriptors.

## Declaration

```objectivec
extern NSFontCollectionMatchingOptionKey const NSFontCollectionIncludeDisabledFontsOption;
```

<a id="discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) indicates they should be included. When unspecified, CoreText assumes [false](https://developer.apple.com/documentation/swift/false). This option is intended only for font management applications. This option will make descriptor matching slower.

## See Also

### Type Properties

- [NSFontCollectionRemoveDuplicatesOption](removeduplicatesoption.md): An NSNumber object containing a Boolean value controlling whether more than one copy of a font with the same PostScript name should be included in the list of matching descriptors.
- [NSFontCollectionDisallowAutoActivationOption](disallowautoactivationoption.md): An NSNumber object containing a Boolean value specifying that auto-activation should not be used to find missing fonts.
