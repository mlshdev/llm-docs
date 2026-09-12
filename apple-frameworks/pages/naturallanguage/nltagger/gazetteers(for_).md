> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/gazetteers(for:)](https://developer.apple.com/documentation/naturallanguage/nltagger/gazetteers(for:))

# gazetteers(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the gazetteers attached to a tag scheme.

## Declaration

```swift
func gazetteers(for tagScheme: NLTagScheme) -> [NLGazetteer]
```

## Parameters

- `tagScheme`: The tag scheme for the gazetteers.

<a id="return-value"></a>

## Return Value

An array of [NLGazetteer](../nlgazetteer.md).

## See Also

### Using gazetteers with a tagger

- [setGazetteers(\_:for:)](setgazetteers%28__for_%29.md): Attaches gazetteers to a tag scheme, typically one gazetteer per language or one language-independent gazetteer.
- [NLGazetteer](../nlgazetteer.md): A collection of terms and their labels, which take precedence over a word tagger.

# gazetteersForTagScheme: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the gazetteers attached to a tag scheme.

## Declaration

```objectivec
- (NSArray<NLGazetteer *> *) gazetteersForTagScheme:(NLTagScheme) tagScheme;
```

## Parameters

- `tagScheme`: The tag scheme for the gazetteers.

<a id="return-value"></a>

## Return Value

An array of [NLGazetteer](../nlgazetteer.md).

## See Also

### Using gazetteers with a tagger

- [setGazetteers:forTagScheme:](setgazetteers%28__for_%29.md): Attaches gazetteers to a tag scheme, typically one gazetteer per language or one language-independent gazetteer.
- [NLGazetteer](../nlgazetteer.md): A collection of terms and their labels, which take precedence over a word tagger.
