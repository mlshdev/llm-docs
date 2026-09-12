> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrepository/allcompositions()](https://developer.apple.com/documentation/quartz/qccompositionrepository/allcompositions())

# allCompositions() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns an array that contains all compositions currently in the composition repository.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func allCompositions() -> [Any]!
```

<a id="return-value"></a>

## Return Value

An array of [QCComposition](../qccomposition.md) objects.

## See Also

### Fetching Compositions

- [composition(withIdentifier:)](composition%28withidentifier_%29.md): Deprecated. Returns the composition that corresponds to the identifier.
- [compositions(withProtocols:andAttributes:)](compositions%28withprotocols_andattributes_%29.md): Deprecated. Returns an array of compositions that match a set of criteria.

# allCompositions (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns an array that contains all compositions currently in the composition repository.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSArray *) allCompositions;
```

<a id="return-value"></a>

## Return Value

An array of [QCComposition](../qccomposition.md) objects.

## See Also

### Fetching Compositions

- [compositionWithIdentifier:](composition%28withidentifier_%29.md): Deprecated. Returns the composition that corresponds to the identifier.
- [compositionsWithProtocols:andAttributes:](compositions%28withprotocols_andattributes_%29.md): Deprecated. Returns an array of compositions that match a set of criteria.
