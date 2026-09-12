> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctfontdescriptorlanguageattribute](https://developer.apple.com/documentation/coretext/kctfontdescriptorlanguageattribute)

# kCTFontDescriptorLanguageAttribute (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
let kCTFontDescriptorLanguageAttribute: CFString
```

<a id="discussion"></a>

## Discussion

The language identifier for font fallback selection.

The value associated with this key is a CFStringRef. If specified in a font descriptor, it is used to select the appropriate font fallback list for the language. This key should not be confused with kCTLanguageAttributeName, which is defined in CTStringAttributes.h.

# kCTFontDescriptorLanguageAttribute (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
extern CFStringRef const kCTFontDescriptorLanguageAttribute;
```

<a id="discussion"></a>

## Discussion

The language identifier for font fallback selection.

The value associated with this key is a CFStringRef. If specified in a font descriptor, it is used to select the appropriate font fallback list for the language. This key should not be confused with kCTLanguageAttributeName, which is defined in CTStringAttributes.h.
