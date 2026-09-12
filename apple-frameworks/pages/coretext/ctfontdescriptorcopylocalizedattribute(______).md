> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptorcopylocalizedattribute(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontdescriptorcopylocalizedattribute(_:_:_:))

# CTFontDescriptorCopyLocalizedAttribute(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized value for the requested attribute, if available.

## Declaration

```swift
func CTFontDescriptorCopyLocalizedAttribute(_ descriptor: CTFontDescriptor, _ attribute: CFString, _ language: UnsafeMutablePointer<Unmanaged<CFString>?>?) -> CFTypeRef?
```

## Parameters

- `descriptor`: The font descriptor.
- `attribute`: The requested font attribute.
- `language`: On output, contains a reference to the matched language. The language identifier will conform to the RFC 3066bis standard.

<a id="return-value"></a>

## Return Value

A retained reference to a localized attribute based on the global language list.

<a id="Discussion"></a>

## Discussion

This function passes back the matched language in `language`. If localization is not possible for the attribute, the behavior matches the value returned from [CTFontDescriptorCopyAttribute(\_:\_:)](ctfontdescriptorcopyattribute%28____%29.md). Generally, localization of attributes is applicable to name attributes of only a normalized font descriptor.

## See Also

### Getting Attributes

- [CTFontDescriptorCopyAttributes(\_:)](ctfontdescriptorcopyattributes%28__%29.md): Returns the attributes dictionary of the font descriptor.
- [CTFontDescriptorCopyAttribute(\_:\_:)](ctfontdescriptorcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute.

# CTFontDescriptorCopyLocalizedAttribute (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized value for the requested attribute, if available.

## Declaration

```objectivec
extern CFTypeRefCTFontDescriptorCopyLocalizedAttribute(CTFontDescriptorRef descriptor, CFStringRef attribute, CFStringRef*language);
```

## Parameters

- `descriptor`: The font descriptor.
- `attribute`: The requested font attribute.
- `language`: On output, contains a reference to the matched language. The language identifier will conform to the RFC 3066bis standard.

<a id="return-value"></a>

## Return Value

A retained reference to a localized attribute based on the global language list.

<a id="Discussion"></a>

## Discussion

This function passes back the matched language in `language`. If localization is not possible for the attribute, the behavior matches the value returned from [CTFontDescriptorCopyAttribute](ctfontdescriptorcopyattribute%28____%29.md). Generally, localization of attributes is applicable to name attributes of only a normalized font descriptor.

## See Also

### Getting Attributes

- [CTFontDescriptorCopyAttributes](ctfontdescriptorcopyattributes%28__%29.md): Returns the attributes dictionary of the font descriptor.
- [CTFontDescriptorCopyAttribute](ctfontdescriptorcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute.
