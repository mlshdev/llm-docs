> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfonttableoptions](https://developer.apple.com/documentation/coretext/ctfonttableoptions)

# CTFontTableOptions (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe font table options.

## Declaration

```swift
struct CTFontTableOptions
```

## Topics

### Constants

- [init(rawValue:)](ctfonttableoptions/init%28rawvalue_%29.md): Creates a font table options structure with the specified raw value.
- [excludeSynthetic](ctfonttableoptions/excludesynthetic.md): Deprecated. The font table excludes synthetic font data.

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
- [CTFontOptions](ctfontoptions.md): Options for font creation and descriptor matching.

# CTFontTableOptions (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe font table options.

## Declaration

```objectivec
enum CTFontTableOptions : uint32_t;
```

## Topics

### Constants

- [kCTFontTableOptionNoOptions](ctfonttableoptions/kctfonttableoptionnooptions.md): No font table options are specified.
- [kCTFontTableOptionExcludeSynthetic](ctfonttableoptions/excludesynthetic.md): Deprecated. The font table excludes synthetic font data.

## See Also

### Enumerations

- [CTFontUIFontType](ctfontuifonttype.md): Constants that represent the specific user-interface purpose to specify for font creation.
- [CTFontTableTag](ctfonttabletag.md): Font table tags provide access to font table data.
- [CTFontOptions](ctfontoptions.md): Options for font creation and descriptor matching.
