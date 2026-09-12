> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorthography/dominantscript](https://developer.apple.com/documentation/foundation/nsorthography/dominantscript)

# dominantScript (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The dominant script for the text.

## Declaration

```swift
var dominantScript: String { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an ISO 15924 script code, such as `"Latn"` or `"Cyrl"`, that identifies the dominant script.

## See Also

### Determining Correspondences Between Languages and Scripts

- [languageMap](languagemap.md): A dictionary that maps script tags to arrays of language tags.
- [dominantLanguage](dominantlanguage.md): The first language in the list of languages for the dominant script.
- [dominantLanguage(forScript:)](dominantlanguage%28forscript_%29.md): Returns the dominant language for the specified script.
- [languages(forScript:)](languages%28forscript_%29.md): Returns the list of languages for the specified script.
- [allScripts](allscripts.md): The scripts appearing as keys in the language map.
- [allLanguages](alllanguages.md): The languages appearing in values of the language map.

# dominantScript (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The dominant script for the text.

## Declaration

```objectivec
@property (copy, readonly) NSString * dominantScript;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an ISO 15924 script code, such as `"Latn"` or `"Cyrl"`, that identifies the dominant script.

## See Also

### Determining Correspondences Between Languages and Scripts

- [languageMap](languagemap.md): A dictionary that maps script tags to arrays of language tags.
- [dominantLanguage](dominantlanguage.md): The first language in the list of languages for the dominant script.
- [dominantLanguageForScript:](dominantlanguage%28forscript_%29.md): Returns the dominant language for the specified script.
- [languagesForScript:](languages%28forscript_%29.md): Returns the list of languages for the specified script.
- [allScripts](allscripts.md): The scripts appearing as keys in the language map.
- [allLanguages](alllanguages.md): The languages appearing in values of the language map.
