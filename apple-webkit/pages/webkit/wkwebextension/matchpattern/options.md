> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/options](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/options)

# WKWebExtension.MatchPattern.Options (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants used by [WKWebExtension.MatchPattern](../matchpattern.md) to indicate matching options.

## Declaration

```swift
struct Options
```

## Topics

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

### Type Properties

- [ignorePaths](options/ignorepaths.md): Indicates that the host components should be ignored while matching.
- [ignoreSchemes](options/ignoreschemes.md): Indicates that the scheme components should be ignored while matching.
- [matchBidirectionally](options/matchbidirectionally.md): Indicates that two patterns should be checked in either direction while matching.

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

# WKWebExtensionMatchPatternOptions (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants used by [WKWebExtensionMatchPattern](../matchpattern.md) to indicate matching options.

## Declaration

```objectivec
enum WKWebExtensionMatchPatternOptions : NSUInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionMatchPatternOptionsIgnorePaths](options/ignorepaths.md): Indicates that the host components should be ignored while matching.
- [WKWebExtensionMatchPatternOptionsIgnoreSchemes](options/ignoreschemes.md): Indicates that the scheme components should be ignored while matching.
- [WKWebExtensionMatchPatternOptionsMatchBidirectionally](options/matchbidirectionally.md): Indicates that two patterns should be checked in either direction while matching.
- [WKWebExtensionMatchPatternOptionsNone](../../wkwebextensionmatchpatternoptions/wkwebextensionmatchpatternoptionsnone.md): Indicates no special matching options.
