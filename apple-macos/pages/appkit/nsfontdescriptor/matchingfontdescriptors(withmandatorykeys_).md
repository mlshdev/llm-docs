> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/matchingfontdescriptors(withmandatorykeys:)](https://developer.apple.com/documentation/appkit/nsfontdescriptor/matchingfontdescriptors(withmandatorykeys:))

# matchingFontDescriptors(withMandatoryKeys:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns all the fonts available on the system whose specified attributes match those of the receiver.

## Declaration

```swift
func matchingFontDescriptors(withMandatoryKeys mandatoryKeys: Set<NSFontDescriptor.AttributeName>?) -> [NSFontDescriptor]
```

## Parameters

- `mandatoryKeys`: Keys that must be identical to be matched. Can be `nil`.

<a id="return-value"></a>

## Return Value

The matching font descriptors. If the attribute value specified does not exist in the input dictionary or if there is no font that matches the given mandatory key values, an empty array is returned.

<a id="Discussion"></a>

## Discussion

For example, suppose there are two versions of a given font installed that differ in the number of glyphs covered (the new version has more glyphs). If you explicitly specify [name](attributename/name.md) as the only mandatory key, then a font descriptor that specifies a font name and character set by default matches both versions, since the character set attribute is not used for matching. If you specify that font name and character set keys are mandatory, the returned array contains only the font that matches both keys.

## See Also

### Finding Fonts

- [matchingFontDescriptor(withMandatoryKeys:)](matchingfontdescriptor%28withmandatorykeys_%29.md): Returns a normalized font descriptor whose specified attributes match those of the receiver.

# matchingFontDescriptorsWithMandatoryKeys: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns all the fonts available on the system whose specified attributes match those of the receiver.

## Declaration

```objectivec
- (NSArray<NSFontDescriptor *> *) matchingFontDescriptorsWithMandatoryKeys:(NSSet<NSString *> *) mandatoryKeys;
```

## Parameters

- `mandatoryKeys`: Keys that must be identical to be matched. Can be `nil`.

<a id="return-value"></a>

## Return Value

The matching font descriptors. If the attribute value specified does not exist in the input dictionary or if there is no font that matches the given mandatory key values, an empty array is returned.

<a id="Discussion"></a>

## Discussion

For example, suppose there are two versions of a given font installed that differ in the number of glyphs covered (the new version has more glyphs). If you explicitly specify [NSFontNameAttribute](attributename/name.md) as the only mandatory key, then a font descriptor that specifies a font name and character set by default matches both versions, since the character set attribute is not used for matching. If you specify that font name and character set keys are mandatory, the returned array contains only the font that matches both keys.

## See Also

### Finding Fonts

- [matchingFontDescriptorWithMandatoryKeys:](matchingfontdescriptor%28withmandatorykeys_%29.md): Returns a normalized font descriptor whose specified attributes match those of the receiver.
