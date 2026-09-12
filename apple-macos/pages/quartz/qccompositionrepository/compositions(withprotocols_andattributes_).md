> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrepository/compositions(withprotocols:andattributes:)](https://developer.apple.com/documentation/quartz/qccompositionrepository/compositions(withprotocols:andattributes:))

# compositions(withProtocols:andAttributes:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns an array of compositions that match a set of criteria.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func compositions(withProtocols protocols: [Any]!, andAttributes attributes: [AnyHashable : Any]! = [:]) -> [Any]!
```

## Parameters

- `protocols`: The protocols that you want compositions to conform to. Pass `nil` if you don’t want to filter based on the protocol. You can pass any of these protocols: QCCompositionProtocolAnimation, QCCompositionProtocolImageProducer, QCCompositionProtocolImageFilter, QCCompositionProtocolImageCompositor, and QCCompositionProtocolScreenSaverRSS.
- `attributes`: A dictionary that contains the attributes, and their associated values, that you want compositions  to match. Pass `nil` if you don’t want to filter based on the attributes. For example, you can pass any of these attributes: QCCompositionAttributeNameKey, QCCompositionAttributeDescriptionKey, QCCompositionAttributeCopyrightKey, and QCCompositionAttributeBuiltInKey.

<a id="return-value"></a>

## Return Value

An array of [QCComposition](../qccomposition.md) objects that meet the supplied criteria.

## See Also

### Fetching Compositions

- [composition(withIdentifier:)](composition%28withidentifier_%29.md): Deprecated. Returns the composition that corresponds to the identifier.
- [allCompositions()](allcompositions%28%29.md): Deprecated. Returns an array that contains all compositions currently in the composition repository.

# compositionsWithProtocols:andAttributes: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns an array of compositions that match a set of criteria.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSArray *) compositionsWithProtocols:(NSArray *) protocols andAttributes:(NSDictionary *) attributes;
```

## Parameters

- `protocols`: The protocols that you want compositions to conform to. Pass `nil` if you don’t want to filter based on the protocol. You can pass any of these protocols: QCCompositionProtocolAnimation, QCCompositionProtocolImageProducer, QCCompositionProtocolImageFilter, QCCompositionProtocolImageCompositor, and QCCompositionProtocolScreenSaverRSS.
- `attributes`: A dictionary that contains the attributes, and their associated values, that you want compositions  to match. Pass `nil` if you don’t want to filter based on the attributes. For example, you can pass any of these attributes: QCCompositionAttributeNameKey, QCCompositionAttributeDescriptionKey, QCCompositionAttributeCopyrightKey, and QCCompositionAttributeBuiltInKey.

<a id="return-value"></a>

## Return Value

An array of [QCComposition](../qccomposition.md) objects that meet the supplied criteria.

## See Also

### Fetching Compositions

- [compositionWithIdentifier:](composition%28withidentifier_%29.md): Deprecated. Returns the composition that corresponds to the identifier.
- [allCompositions](allcompositions%28%29.md): Deprecated. Returns an array that contains all compositions currently in the composition repository.
