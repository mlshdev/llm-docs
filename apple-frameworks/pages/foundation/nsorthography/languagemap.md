> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorthography/languagemap](https://developer.apple.com/documentation/foundation/nsorthography/languagemap)

# languageMap (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary that maps script tags to arrays of language tags.

## Declaration

```swift
var languageMap: [String : [String]] { get }
```

<a id="Discussion"></a>

## Discussion

The dictionary’s keys are ISO 15924 script codes (such as `"Latn"` or `"Cyrl"`) and its values are arrays of BCP-47 language tags (such as `"en"`, `"fr"`, or `"de"`).

## See Also

### Determining Correspondences Between Languages and Scripts

- [dominantLanguage](dominantlanguage.md): The first language in the list of languages for the dominant script.
- [dominantScript](dominantscript.md): The dominant script for the text.
- [dominantLanguage(forScript:)](dominantlanguage%28forscript_%29.md): Returns the dominant language for the specified script.
- [languages(forScript:)](languages%28forscript_%29.md): Returns the list of languages for the specified script.
- [allScripts](allscripts.md): The scripts appearing as keys in the language map.
- [allLanguages](alllanguages.md): The languages appearing in values of the language map.

# languageMap (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary that maps script tags to arrays of language tags.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSArray<NSString *> *> * languageMap;
```

<a id="Discussion"></a>

## Discussion

The dictionary’s keys are ISO 15924 script codes (such as `"Latn"` or `"Cyrl"`) and its values are arrays of BCP-47 language tags (such as `"en"`, `"fr"`, or `"de"`).

## See Also

### Determining Correspondences Between Languages and Scripts

- [dominantLanguage](dominantlanguage.md): The first language in the list of languages for the dominant script.
- [dominantScript](dominantscript.md): The dominant script for the text.
- [dominantLanguageForScript:](dominantlanguage%28forscript_%29.md): Returns the dominant language for the specified script.
- [languagesForScript:](languages%28forscript_%29.md): Returns the list of languages for the specified script.
- [allScripts](allscripts.md): The scripts appearing as keys in the language map.
- [allLanguages](alllanguages.md): The languages appearing in values of the language map.
