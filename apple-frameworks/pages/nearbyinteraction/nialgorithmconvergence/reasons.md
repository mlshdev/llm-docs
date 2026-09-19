> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergence/reasons

# reasons

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An array of reasons that contribute to the convergence status.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * reasons;
```

<a id="Discussion"></a>

## Discussion

To improve the results of the framework’s Camera Assistance feature, coach the user to resolve the issues that each reason describe. For example, present text that explains what the user needs to do for each value in the array.
