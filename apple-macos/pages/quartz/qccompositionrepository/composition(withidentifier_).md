> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrepository/composition(withidentifier:)](https://developer.apple.com/documentation/quartz/qccompositionrepository/composition(withidentifier:))

# composition(withIdentifier:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the composition that corresponds to the identifier.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func composition(withIdentifier identifier: String!) -> QCComposition!
```

## Parameters

- `identifier`: A string that uniquely identifies the composition to retrieve.

<a id="return-value"></a>

## Return Value

The composition identified by the provided string, or `nil` if there is no composition with that identifier in the composition repository.

## See Also

### Fetching Compositions

- [compositions(withProtocols:andAttributes:)](compositions%28withprotocols_andattributes_%29.md): Deprecated. Returns an array of compositions that match a set of criteria.
- [allCompositions()](allcompositions%28%29.md): Deprecated. Returns an array that contains all compositions currently in the composition repository.

# compositionWithIdentifier: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the composition that corresponds to the identifier.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (QCComposition *) compositionWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A string that uniquely identifies the composition to retrieve.

<a id="return-value"></a>

## Return Value

The composition identified by the provided string, or `nil` if there is no composition with that identifier in the composition repository.

## See Also

### Fetching Compositions

- [compositionsWithProtocols:andAttributes:](compositions%28withprotocols_andattributes_%29.md): Deprecated. Returns an array of compositions that match a set of criteria.
- [allCompositions](allcompositions%28%29.md): Deprecated. Returns an array that contains all compositions currently in the composition repository.
