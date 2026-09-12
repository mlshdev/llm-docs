> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptorcopyattributes(_:)](https://developer.apple.com/documentation/coretext/ctfontdescriptorcopyattributes(_:))

# CTFontDescriptorCopyAttributes(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attributes dictionary of the font descriptor.

## Declaration

```swift
func CTFontDescriptorCopyAttributes(_ descriptor: CTFontDescriptor) -> CFDictionary
```

## Parameters

- `descriptor`: The font descriptor.

<a id="return-value"></a>

## Return Value

The font descriptor attributes dictionary. This dictionary contains the minimum number of attributes to specify fully this particular font descriptor.

## See Also

### Getting Attributes

- [CTFontDescriptorCopyAttribute(\_:\_:)](ctfontdescriptorcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute.
- [CTFontDescriptorCopyLocalizedAttribute(\_:\_:\_:)](ctfontdescriptorcopylocalizedattribute%28______%29.md): Returns a localized value for the requested attribute, if available.

# CTFontDescriptorCopyAttributes (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attributes dictionary of the font descriptor.

## Declaration

```objectivec
extern CFDictionaryRefCTFontDescriptorCopyAttributes(CTFontDescriptorRef descriptor);
```

## Parameters

- `descriptor`: The font descriptor.

<a id="return-value"></a>

## Return Value

The font descriptor attributes dictionary. This dictionary contains the minimum number of attributes to specify fully this particular font descriptor.

## See Also

### Getting Attributes

- [CTFontDescriptorCopyAttribute](ctfontdescriptorcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute.
- [CTFontDescriptorCopyLocalizedAttribute](ctfontdescriptorcopylocalizedattribute%28______%29.md): Returns a localized value for the requested attribute, if available.
