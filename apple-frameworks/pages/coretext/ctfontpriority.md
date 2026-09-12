> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontpriority](https://developer.apple.com/documentation/coretext/ctfontpriority)

# CTFontPriority (Swift)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The priority of font descriptors when resolving duplicates and sorting match results.

## Declaration

```swift
typealias CTFontPriority = UInt32
```

<a id="Discussion"></a>

## Discussion

Use the values of this enumeration for [kCTFontPriorityAttribute](kctfontpriorityattribute.md).

## Topics

### Font Priority

- [kCTFontPrioritySystem](kctfontprioritysystem.md): Priority of system fonts.
- [kCTFontPriorityNetwork](kctfontprioritynetwork.md): Priority of network fonts.
- [kCTFontPriorityComputer](kctfontprioritycomputer.md): Priority of computer local fonts.
- [kCTFontPriorityUser](kctfontpriorityuser.md): Priority of local fonts.
- [kCTFontPriorityDynamic](kctfontprioritydynamic.md): Priority of fonts registered dynamically, not located in a standard location.
- [kCTFontPriorityProcess](kctfontpriorityprocess.md): Priority of fonts registered for the process.

## See Also

### Related Documentation

- [kCTFontPriorityAttribute](kctfontpriorityattribute.md): The font priority used by font descriptors when resolving duplicates and sorting match results.

### Accessing Font Attributes

- [Font Attributes](font-attributes.md): The keys for accessing font attributes from a font descriptor.
- [CTFontOrientation](ctfontorientation.md): The intended rendering orientation of the font for obtaining glyph metrics.
- [CTFontFormat](ctfontformat.md): The recognized format of the font.

# CTFontPriority (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The priority of font descriptors when resolving duplicates and sorting match results.

## Declaration

```objectivec
typedef uint32_t CTFontPriority;
```

<a id="Discussion"></a>

## Discussion

Use the values of this enumeration for [kCTFontPriorityAttribute](kctfontpriorityattribute.md).

## Topics

### Font Priority

- [kCTFontPrioritySystem](kctfontprioritysystem.md): Priority of system fonts.
- [kCTFontPriorityNetwork](kctfontprioritynetwork.md): Priority of network fonts.
- [kCTFontPriorityComputer](kctfontprioritycomputer.md): Priority of computer local fonts.
- [kCTFontPriorityUser](kctfontpriorityuser.md): Priority of local fonts.
- [kCTFontPriorityDynamic](kctfontprioritydynamic.md): Priority of fonts registered dynamically, not located in a standard location.
- [kCTFontPriorityProcess](kctfontpriorityprocess.md): Priority of fonts registered for the process.

## See Also

### Related Documentation

- [kCTFontPriorityAttribute](kctfontpriorityattribute.md): The font priority used by font descriptors when resolving duplicates and sorting match results.

### Accessing Font Attributes

- [Font Attributes](font-attributes.md): The keys for accessing font attributes from a font descriptor.
- [CTFontOrientation](ctfontorientation.md): The intended rendering orientation of the font for obtaining glyph metrics.
- [CTFontFormat](ctfontformat.md): The recognized format of the font.
