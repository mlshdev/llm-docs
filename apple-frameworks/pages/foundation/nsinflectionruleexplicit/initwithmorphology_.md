> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsinflectionruleexplicit/initwithmorphology:

# initWithMorphology:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an inflection rule with the given morphology.

## Declaration

```objectivec
- (instancetype) initWithMorphology:(NSMorphology *) morphology;
```

## Parameters

- `morphology`: The morphology this rule applies when inflecting.

<a id="return-value"></a>

## Return Value

An inflection rule that uses the given morphology.

## See Also

### Creating an Explicit Inflection Rule

- [NSMorphology](../nsmorphology.md): A description of the grammatical properties of a string.
