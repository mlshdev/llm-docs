> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpack/language](https://developer.apple.com/documentation/backgroundassets/baassetpack/language)

# language

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The language, represented as a BCP-47 identifier, for which this asset pack is localized.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * language;
```

<a id="discussion"></a>

## Discussion

This property is `nil` if the asset pack isn’t localized and therefore isn’t language-specific.
