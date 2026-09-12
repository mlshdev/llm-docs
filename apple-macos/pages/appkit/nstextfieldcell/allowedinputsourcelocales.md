> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfieldcell/allowedinputsourcelocales](https://developer.apple.com/documentation/appkit/nstextfieldcell/allowedinputsourcelocales)

# allowedInputSourceLocales (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of locale identifiers that represent the allowed input sources when the text field has the keyboard focus.

## Declaration

```swift
var allowedInputSourceLocales: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains a locale identifier. You can assign the meta-locale identifier, [NSAllRomanInputSourcesLocaleIdentifier](../nsallromaninputsourceslocaleidentifier.md), to specify input sources that are limited for Roman script editing.

# allowedInputSourceLocales (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of locale identifiers that represent the allowed input sources when the text field has the keyboard focus.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * allowedInputSourceLocales;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains a locale identifier. You can assign the meta-locale identifier, [NSAllRomanInputSourcesLocaleIdentifier](../nsallromaninputsourceslocaleidentifier.md), to specify input sources that are limited for Roman script editing.
