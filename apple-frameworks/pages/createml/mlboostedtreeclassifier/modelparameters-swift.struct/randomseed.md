> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlboostedtreeclassifier/modelparameters-swift.struct/randomseed

# randomSeed

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
var randomSeed: Int
```

## See Also

### Accessing parameters

- [validationData](validationdata-swift.property.md): Deprecated. Validation data represented as a `MLDataTable`.
- [maxDepth](maxdepth.md)
- [maxIterations](maxiterations.md)
- [minLossReduction](minlossreduction.md)
- [minChildWeight](minchildweight.md)
- [stepSize](stepsize.md): Must be in the range (0, 1).
- [earlyStoppingRounds](earlystoppingrounds.md): Validation data must be specified for an early stop.
- [rowSubsample](rowsubsample.md): Must be in the range (0, 1).
- [columnSubsample](columnsubsample.md): Must be in the range (0, 1).
- [validation](validation.md): Validation data.
