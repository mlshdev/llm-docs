> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/search_kit/text_analysis_keys](https://developer.apple.com/documentation/coreservices/search_kit/text_analysis_keys)

# Text Analysis Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Each of these constants is an optional key in a Search Kit index’s text analysis properties dictionary. The constant descriptions describe the corresponding values for each of these keys. These keys are declared in the `Analysis.h` header file.

## Topics

### Constants

- [kSKMinTermLength](../kskmintermlength.md): The minimum term length to index. Specified as a CFNumber object. If this optional key is not present, Search Kit indexing defaults to a minimum term length of 1.
- [kSKStopWords](../kskstopwords.md): A set of stopwords—words not to index. Specified as a CFSet object. There is no default stopword list. You must supply your own.
- [kSKSubstitutions](../ksksubstitutions.md): A dictionary of term substitutions—terms that differ in their character strings but that match during a search. Specified as a CFDictionary object.
- [kSKMaximumTerms](../kskmaximumterms.md)
- [kSKProximityIndexing](../kskproximityindexing.md)
- [kSKTermChars](../ksktermchars.md)
- [kSKStartTermChars](../kskstarttermchars.md)
- [kSKEndTermChars](../kskendtermchars.md)
