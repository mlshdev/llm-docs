> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlgazetteer](https://developer.apple.com/documentation/naturallanguage/nlgazetteer)

# NLGazetteer (Swift)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of terms and their labels, which take precedence over a word tagger.

## Declaration

```swift
class NLGazetteer
```

<a id="overview"></a>

## Overview

Use an [NLGazetteer](nlgazetteer.md) to augment an [NLTagger](nltagger.md) when you need to tag a specific set of terms (single words or short phrases) with a label. Typically, you add one gazetteer per language, or one language-independent gazetteer, to an [NLTagger](nltagger.md) with its [setGazetteers(\_:for:)](nltagger/setgazetteers%28__for_%29.md) method. The tagger uses its gazetteers to look up each term it processes. If a gazetteer has a label for a term, the tagger uses that label to tag the term, instead of inferring a tag itself.

Typically, you create a gazetteer at development time, such as in a macOS playground, with Create ML’s [MLGazetteer](../createml/mlgazetteer.md). Alternatively, you can create an [NLGazetteer](nlgazetteer.md) at runtime by using [init(dictionary:language:)](nlgazetteer/init%28dictionary_language_%29.md).

## Topics

### Creating a Gazetteer

- [init(contentsOf:)](nlgazetteer/init%28contentsof_%29.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [init(data:)](nlgazetteer/init%28data_%29.md): Creates a gazetteer from a data instance.
- [init(dictionary:language:)](nlgazetteer/init%28dictionary_language_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary.
- [write(\_:language:to:)](nlgazetteer/write%28__language_to_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary and saves the gazetteer to a file.

### Looking Up Labels for Terms

- [label(for:)](nlgazetteer/label%28for_%29.md): Retrieves the label for the given term.

### Inspecting a Gazetteer

- [data](nlgazetteer/data.md): The gazetteer represented as a data instance.
- [language](nlgazetteer/language.md): The language of the gazetteer.

### Initializers

- [init(contentsOfURL:)](nlgazetteer/init%28contentsofurl_%29-13iyg.md)
- [init(contentsOfURL:)](nlgazetteer/init%28contentsofurl_%29-3inpk.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Using gazetteers with a tagger

- [setGazetteers(\_:for:)](nltagger/setgazetteers%28__for_%29.md): Attaches gazetteers to a tag scheme, typically one gazetteer per language or one language-independent gazetteer.
- [gazetteers(for:)](nltagger/gazetteers%28for_%29.md): Retrieves the gazetteers attached to a tag scheme.

# NLGazetteer (Objective-C)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of terms and their labels, which take precedence over a word tagger.

## Declaration

```objectivec
@interface NLGazetteer : NSObject
```

<a id="overview"></a>

## Overview

Use an [NLGazetteer](nlgazetteer.md) to augment an [NLTagger](nltagger.md) when you need to tag a specific set of terms (single words or short phrases) with a label. Typically, you add one gazetteer per language, or one language-independent gazetteer, to an [NLTagger](nltagger.md) with its [setGazetteers:forTagScheme:](nltagger/setgazetteers%28__for_%29.md) method. The tagger uses its gazetteers to look up each term it processes. If a gazetteer has a label for a term, the tagger uses that label to tag the term, instead of inferring a tag itself.

Typically, you create a gazetteer at development time, such as in a macOS playground, with Create ML’s [MLGazetteer](../createml/mlgazetteer.md). Alternatively, you can create an [NLGazetteer](nlgazetteer.md) at runtime by using [initWithDictionary:language:error:](nlgazetteer/init%28dictionary_language_%29.md).

## Topics

### Creating a Gazetteer

- [initWithContentsOfURL:error:](nlgazetteer/init%28contentsof_%29.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [gazetteerWithContentsOfURL:error:](nlgazetteer/gazetteerwithcontentsofurl_error_.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [initWithData:error:](nlgazetteer/init%28data_%29.md): Creates a gazetteer from a data instance.
- [initWithDictionary:language:error:](nlgazetteer/init%28dictionary_language_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary.
- [writeGazetteerForDictionary:language:toURL:error:](nlgazetteer/write%28__language_to_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary and saves the gazetteer to a file.

### Looking Up Labels for Terms

- [labelForString:](nlgazetteer/label%28for_%29.md): Retrieves the label for the given term.

### Inspecting a Gazetteer

- [data](nlgazetteer/data.md): The gazetteer represented as a data instance.
- [language](nlgazetteer/language.md): The language of the gazetteer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Using gazetteers with a tagger

- [setGazetteers:forTagScheme:](nltagger/setgazetteers%28__for_%29.md): Attaches gazetteers to a tag scheme, typically one gazetteer per language or one language-independent gazetteer.
- [gazetteersForTagScheme:](nltagger/gazetteers%28for_%29.md): Retrieves the gazetteers attached to a tag scheme.
