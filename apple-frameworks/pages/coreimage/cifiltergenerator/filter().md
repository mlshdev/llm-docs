> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cifiltergenerator/filter()

# filter() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Creates a filter object based on the filter chain.

## Declaration

```swift
func filter() -> CIFilter
```

<a id="return-value"></a>

## Return Value

A `CIFilter` object.

<a id="Discussion"></a>

## Discussion

The topology of the filter chain is immutable, meaning that any changes you make to the filter chain are not reflected in the filter. The returned filter holds the export input and output keys.

# filter (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Creates a filter object based on the filter chain.

## Declaration

```objectivec
- (CIFilter *) filter;
```

<a id="return-value"></a>

## Return Value

A `CIFilter` object.

<a id="Discussion"></a>

## Discussion

The topology of the filter chain is immutable, meaning that any changes you make to the filter chain are not reflected in the filter. The returned filter holds the export input and output keys.
