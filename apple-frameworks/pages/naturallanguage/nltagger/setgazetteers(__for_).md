> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/setgazetteers(_:for:)](https://developer.apple.com/documentation/naturallanguage/nltagger/setgazetteers(_:for:))

# setGazetteers(\_:for:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Attaches gazetteers to a tag scheme, typically one gazetteer per language or one language-independent gazetteer.

## Declaration

```swift
func setGazetteers(_ gazetteers: [NLGazetteer], for tagScheme: NLTagScheme)
```

## Parameters

- `gazetteers`: The gazetteers to attach to a tag scheme.
- `tagScheme`: The tag scheme for the gazetteers.

## See Also

### Using gazetteers with a tagger

- [gazetteers(for:)](gazetteers%28for_%29.md): Retrieves the gazetteers attached to a tag scheme.
- [NLGazetteer](../nlgazetteer.md): A collection of terms and their labels, which take precedence over a word tagger.

# setGazetteers:forTagScheme: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Attaches gazetteers to a tag scheme, typically one gazetteer per language or one language-independent gazetteer.

## Declaration

```objectivec
- (void) setGazetteers:(NSArray<NLGazetteer *> *) gazetteers forTagScheme:(NLTagScheme) tagScheme;
```

## Parameters

- `gazetteers`: The gazetteers to attach to a tag scheme.
- `tagScheme`: The tag scheme for the gazetteers.

## See Also

### Using gazetteers with a tagger

- [gazetteersForTagScheme:](gazetteers%28for_%29.md): Retrieves the gazetteers attached to a tag scheme.
- [NLGazetteer](../nlgazetteer.md): A collection of terms and their labels, which take precedence over a word tagger.
