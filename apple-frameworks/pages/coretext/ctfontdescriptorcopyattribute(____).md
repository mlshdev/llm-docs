> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptorcopyattribute(_:_:)](https://developer.apple.com/documentation/coretext/ctfontdescriptorcopyattribute(_:_:))

# CTFontDescriptorCopyAttribute(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with an arbitrary attribute.

## Declaration

```swift
func CTFontDescriptorCopyAttribute(_ descriptor: CTFontDescriptor, _ attribute: CFString) -> CFTypeRef?
```

## Parameters

- `descriptor`: The font descriptor.
- `attribute`: The requested attribute.

<a id="return-value"></a>

## Return Value

A retained reference to an arbitrary attribute, or `NULL` if the requested attribute is not present.

<a id="Discussion"></a>

## Discussion

Refer to Accessing Font Attributes for documentation explaining how each attribute is packaged as a CFType object.

## See Also

### Getting Attributes

- [CTFontDescriptorCopyAttributes(\_:)](ctfontdescriptorcopyattributes%28__%29.md): Returns the attributes dictionary of the font descriptor.
- [CTFontDescriptorCopyLocalizedAttribute(\_:\_:\_:)](ctfontdescriptorcopylocalizedattribute%28______%29.md): Returns a localized value for the requested attribute, if available.

# CTFontDescriptorCopyAttribute (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with an arbitrary attribute.

## Declaration

```objectivec
extern CFTypeRefCTFontDescriptorCopyAttribute(CTFontDescriptorRef descriptor, CFStringRef attribute);
```

## Parameters

- `descriptor`: The font descriptor.
- `attribute`: The requested attribute.

<a id="return-value"></a>

## Return Value

A retained reference to an arbitrary attribute, or `NULL` if the requested attribute is not present.

<a id="Discussion"></a>

## Discussion

Refer to Accessing Font Attributes for documentation explaining how each attribute is packaged as a CFType object.

## See Also

### Getting Attributes

- [CTFontDescriptorCopyAttributes](ctfontdescriptorcopyattributes%28__%29.md): Returns the attributes dictionary of the font descriptor.
- [CTFontDescriptorCopyLocalizedAttribute](ctfontdescriptorcopylocalizedattribute%28______%29.md): Returns a localized value for the requested attribute, if available.
