> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboostedtreeclassifier/modelparameters-swift.struct/earlystoppingrounds](https://developer.apple.com/documentation/createml/mlboostedtreeclassifier/modelparameters-swift.struct/earlystoppingrounds)

# earlyStoppingRounds

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Validation data must be specified for an early stop.

## Declaration

```swift
var earlyStoppingRounds: Int?
```

## See Also

### Accessing parameters

- [validationData](validationdata-swift.property.md): Deprecated. Validation data represented as a `MLDataTable`.
- [maxDepth](maxdepth.md)
- [maxIterations](maxiterations.md)
- [minLossReduction](minlossreduction.md)
- [minChildWeight](minchildweight.md)
- [randomSeed](randomseed.md)
- [stepSize](stepsize.md): Must be in the range (0, 1).
- [rowSubsample](rowsubsample.md): Must be in the range (0, 1).
- [columnSubsample](columnsubsample.md): Must be in the range (0, 1).
- [validation](validation.md): Validation data.
