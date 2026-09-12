> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorthography/init(dominantscript:languagemap:)](https://developer.apple.com/documentation/foundation/nsorthography/init(dominantscript:languagemap:))

# init(dominantScript:languageMap:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an orthography object with the specified dominant script and language map.

## Declaration

```swift
init(dominantScript script: String, languageMap map: [String : [String]])
```

## Parameters

- `script`: The dominant script.
- `map`: A dictionary mapping ISO 15924 script codes to arrays of BCP-47 language tags.

<a id="return-value"></a>

## Return Value

An orthography object initialized with the specified script and language map.

<a id="Discussion"></a>

## Discussion

You typically use the [defaultOrthography(forLanguage:)](defaultorthography%28forlanguage_%29.md) method to create orthography objects with automatic language mapping. Use this initializer only if you need to override the script associated with one or more languages.

## See Also

### Creating Orthography Objects

- [defaultOrthography(forLanguage:)](defaultorthography%28forlanguage_%29.md): Creates and returns an orthography object with the default language map for the specified language.

# initWithDominantScript:languageMap: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an orthography object with the specified dominant script and language map.

## Declaration

```objectivec
- (instancetype) initWithDominantScript:(NSString *) script languageMap:(NSDictionary<NSString *,NSArray<NSString *> *> *) map;
```

## Parameters

- `script`: The dominant script.
- `map`: A dictionary mapping ISO 15924 script codes to arrays of BCP-47 language tags.

<a id="return-value"></a>

## Return Value

An orthography object initialized with the specified script and language map.

<a id="Discussion"></a>

## Discussion

You typically use the [defaultOrthographyForLanguage:](defaultorthography%28forlanguage_%29.md) method to create orthography objects with automatic language mapping. Use this initializer only if you need to override the script associated with one or more languages.

## See Also

### Related Documentation

- [orthographyWithDominantScript:languageMap:](orthographywithdominantscript_languagemap_.md): Creates and returns an orthography object with the specified dominant script and language map.

### Creating Orthography Objects

- [defaultOrthographyForLanguage:](defaultorthography%28forlanguage_%29.md): Creates and returns an orthography object with the default language map for the specified language.
- [orthographyWithDominantScript:languageMap:](orthographywithdominantscript_languagemap_.md): Creates and returns an orthography object with the specified dominant script and language map.
