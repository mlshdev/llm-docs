> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/matchingfontdescriptor(withmandatorykeys:)](https://developer.apple.com/documentation/appkit/nsfontdescriptor/matchingfontdescriptor(withmandatorykeys:))

# matchingFontDescriptor(withMandatoryKeys:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a normalized font descriptor whose specified attributes match those of the receiver.

## Declaration

```swift
func matchingFontDescriptor(withMandatoryKeys mandatoryKeys: Set<NSFontDescriptor.AttributeName>?) -> NSFontDescriptor?
```

## Parameters

- `mandatoryKeys`: Keys that must be identical to be matched. Can be `nil`.

<a id="return-value"></a>

## Return Value

The matching font descriptor.  If there is no font that matches the given mandatory key values, returns `nil`.

<a id="Discussion"></a>

## Discussion

If more than one font matches the \[`NSFontNameAttribute`, `NSFontFamilyAttribute`, `NSFontVisibleNameAttribute`, `NSFontFaceAttribute`\] attributes, the list of font descriptors is filtered by the other mandatory keys, if any, and the top result that is returned is the same as the first element returned from [matchingFontDescriptors(withMandatoryKeys:)](matchingfontdescriptors%28withmandatorykeys_%29.md).

> **Note**

>  If only one font matches the \[`NSFontNameAttribute`, `NSFontFamilyAttribute`, `NSFontVisibleNameAttribute`, `NSFontFaceAttribute`\] attributes, the `matchingFontDescriptorWithMandatoryKeys:` function returns that font without further filtering for the other mandatory attributes. (This result differs from the result the [matchingFontDescriptors(withMandatoryKeys:)](matchingfontdescriptors%28withmandatorykeys_%29.md) function would return.)
>
> In other words, if there is exactly one match with the `NSFontNameAttribute`, `NSFontFamilyAttribute`, `NSFontVisibleNameAttribute`, `NSFontFaceAttribute` attributes, the `matchingFontDescriptorWithMandatoryKeys:` function always returns the font, even if the font doesn’t match the other mandatory keys.

## See Also

### Finding Fonts

- [matchingFontDescriptors(withMandatoryKeys:)](matchingfontdescriptors%28withmandatorykeys_%29.md): Returns all the fonts available on the system whose specified attributes match those of the receiver.

# matchingFontDescriptorWithMandatoryKeys: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a normalized font descriptor whose specified attributes match those of the receiver.

## Declaration

```objectivec
- (NSFontDescriptor *) matchingFontDescriptorWithMandatoryKeys:(NSSet<NSString *> *) mandatoryKeys;
```

## Parameters

- `mandatoryKeys`: Keys that must be identical to be matched. Can be `nil`.

<a id="return-value"></a>

## Return Value

The matching font descriptor.  If there is no font that matches the given mandatory key values, returns `nil`.

<a id="Discussion"></a>

## Discussion

If more than one font matches the \[`NSFontNameAttribute`, `NSFontFamilyAttribute`, `NSFontVisibleNameAttribute`, `NSFontFaceAttribute`\] attributes, the list of font descriptors is filtered by the other mandatory keys, if any, and the top result that is returned is the same as the first element returned from [matchingFontDescriptorsWithMandatoryKeys:](matchingfontdescriptors%28withmandatorykeys_%29.md).

> **Note**

>  If only one font matches the \[`NSFontNameAttribute`, `NSFontFamilyAttribute`, `NSFontVisibleNameAttribute`, `NSFontFaceAttribute`\] attributes, the `matchingFontDescriptorWithMandatoryKeys:` function returns that font without further filtering for the other mandatory attributes. (This result differs from the result the [matchingFontDescriptorsWithMandatoryKeys:](matchingfontdescriptors%28withmandatorykeys_%29.md) function would return.)
>
> In other words, if there is exactly one match with the `NSFontNameAttribute`, `NSFontFamilyAttribute`, `NSFontVisibleNameAttribute`, `NSFontFaceAttribute` attributes, the `matchingFontDescriptorWithMandatoryKeys:` function always returns the font, even if the font doesn’t match the other mandatory keys.

## See Also

### Finding Fonts

- [matchingFontDescriptorsWithMandatoryKeys:](matchingfontdescriptors%28withmandatorykeys_%29.md): Returns all the fonts available on the system whose specified attributes match those of the receiver.
