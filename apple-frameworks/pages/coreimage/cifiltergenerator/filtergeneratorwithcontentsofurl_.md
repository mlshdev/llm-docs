> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cifiltergenerator/filtergeneratorwithcontentsofurl:

# filterGeneratorWithContentsOfURL:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Creates and returns a filter generator object and initializes it with the contents of a filter generator file.

## Declaration

```objectivec
+ (CIFilterGenerator *) filterGeneratorWithContentsOfURL:(NSURL *) aURL;
```

## Parameters

- `aURL`: The location of a filter generator file.

<a id="return-value"></a>

## Return Value

A [CIFilterGenerator](../cifiltergenerator.md) object;  returns `nil` if the file can’t be read.

## See Also

### Creating Filter Generator Objects

- [filterGenerator](filtergenerator.md): Creates and returns an empty filter generator object.
