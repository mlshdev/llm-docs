> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/enumerationoptions](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/enumerationoptions)

# NSTextLayoutFragment.EnumerationOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 12.0+

Values that describe options for enumerating text layout fragments.

## Declaration

```swift
struct EnumerationOptions
```

## Topics

### Creating a layout fragment enumeration

- [init(rawValue:)](enumerationoptions/init%28rawvalue_%29.md): Creates an instance of the enumeration with the provided unsigned integer value.

### Layout fragment characteristics

- [ensuresExtraLineFragment](enumerationoptions/ensuresextralinefragment.md): Synthesize the extra line fragment when necessary.
- [ensuresLayout](enumerationoptions/ensureslayout.md): When enumerating, tell the layout fragments to layout their contents.
- [estimatesSize](enumerationoptions/estimatessize.md): When enumerating, tell the layout fragments to estimate their size.
- [reverse](enumerationoptions/reverse.md): Causes the enumeration to start from the last element.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing and updating the text

- [enumerateTextElements(from:options:using:)](../nstextelementprovider/enumeratetextelements%28from_options_using_%29.md): Enumerates text elements starting at the text location you provide.
- [location(\_:offsetBy:)](../nstextelementprovider/location%28__offsetby_%29.md): Returns a new location from location with offset you provide.
- [replaceContents(in:with:)](../nstextelementprovider/replacecontents%28in_with_%29.md): Replaces the characters specified by range with the text elements you provide.

# NSTextLayoutFragmentEnumerationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe options for enumerating text layout fragments.

## Declaration

```objectivec
enum NSTextLayoutFragmentEnumerationOptions : NSUInteger;
```

## Topics

### Layout fragment characteristics

- [NSTextLayoutFragmentEnumerationOptionsEnsuresExtraLineFragment](enumerationoptions/ensuresextralinefragment.md): Synthesize the extra line fragment when necessary.
- [NSTextLayoutFragmentEnumerationOptionsEnsuresLayout](enumerationoptions/ensureslayout.md): When enumerating, tell the layout fragments to layout their contents.
- [NSTextLayoutFragmentEnumerationOptionsEstimatesSize](enumerationoptions/estimatessize.md): When enumerating, tell the layout fragments to estimate their size.
- [NSTextLayoutFragmentEnumerationOptionsReverse](enumerationoptions/reverse.md): Causes the enumeration to start from the last element.

### Enumeration Cases

- [NSTextLayoutFragmentEnumerationOptionsNone](../nstextlayoutfragmentenumerationoptions/nstextlayoutfragmentenumerationoptionsnone.md): The value that represents no selected enumeration options.

## See Also

### Accessing and updating the text

- [enumerateTextElementsFromLocation:options:usingBlock:](../nstextelementprovider/enumeratetextelements%28from_options_using_%29.md): Enumerates text elements starting at the text location you provide.
- [locationFromLocation:withOffset:](../nstextelementprovider/location%28__offsetby_%29.md): Returns a new location from location with offset you provide.
- [replaceContentsInRange:withTextElements:](../nstextelementprovider/replacecontents%28in_with_%29.md): Replaces the characters specified by range with the text elements you provide.
