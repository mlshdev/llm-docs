> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontoptions](https://developer.apple.com/documentation/coretext/ctfontoptions)

# CTFontOptions (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for font creation and descriptor matching.

## Declaration

```swift
struct CTFontOptions
```

<a id="overview"></a>

## Overview

Use these options with the functions [CTFontCreateWithNameAndOptions(\_:\_:\_:\_:)](ctfontcreatewithnameandoptions%28________%29.md) and [CTFontCreateWithFontDescriptorAndOptions(\_:\_:\_:\_:)](ctfontcreatewithfontdescriptorandoptions%28________%29.md).

## Topics

### Constants

- [preventAutoActivation](ctfontoptions/preventautoactivation.md): Prevents automatic font activation.
- [preferSystemFont](ctfontoptions/prefersystemfont.md): Font matching prefers to match Apple system fonts.

### Initializers

- [init(rawValue:)](ctfontoptions/init%28rawvalue_%29.md): Creates a font options structure with the specified raw value.

### Type Properties

- [preventAutoDownload](ctfontoptions/preventautodownload.md)

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

### Enumerations

- [CTFontUIFontType](ctfontuifonttype.md): Constants that represent the specific user-interface purpose to specify for font creation.
- [CTFontTableTag](ctfonttabletag.md): Font table tags provide access to font table data.
- [CTFontTableOptions](ctfonttableoptions.md): Constants that describe font table options.

# CTFontOptions (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for font creation and descriptor matching.

## Declaration

```objectivec
enum CTFontOptions : CFOptionFlags;
```

<a id="overview"></a>

## Overview

Use these options with the functions [CTFontCreateWithNameAndOptions](ctfontcreatewithnameandoptions%28________%29.md) and [CTFontCreateWithFontDescriptorAndOptions](ctfontcreatewithfontdescriptorandoptions%28________%29.md).

## Topics

### Constants

- [kCTFontOptionsDefault](ctfontoptions/kctfontoptionsdefault.md): Default options are used.
- [kCTFontOptionsPreventAutoActivation](ctfontoptions/preventautoactivation.md): Prevents automatic font activation.
- [kCTFontOptionsPreferSystemFont](ctfontoptions/prefersystemfont.md): Font matching prefers to match Apple system fonts.

### Enumeration Cases

- [kCTFontOptionsPreventAutoDownload](ctfontoptions/preventautodownload.md)

## See Also

### Enumerations

- [CTFontUIFontType](ctfontuifonttype.md): Constants that represent the specific user-interface purpose to specify for font creation.
- [CTFontTableTag](ctfonttabletag.md): Font table tags provide access to font table data.
- [CTFontTableOptions](ctfonttableoptions.md): Constants that describe font table options.
