> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatusreason](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatusreason)

# NIAlgorithmConvergenceStatusReason

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

The possible reasons for the framework’s Camera Assistance status.

## Declaration

```objectivec
typedef NSString * NIAlgorithmConvergenceStatusReason;
```

<a id="Discussion"></a>

## Discussion

The framework provides the app with one or more reasons for the current convergence status. Reasons detail specific user actions the framework believes will get the Camera Assistance feature operational.

At runtime, the app needs to check the status in the `convergence` object provided by [session:didUpdateAlgorithmConvergence:forObject:](nisessiondelegate/session%28__didupdatealgorithmconvergence_for_%29.md). If the status indicates that Camera Assistance requires user intervention, the app needs to coach the user, such as by presenting text that explains what to do, for every value in the [reasons](nialgorithmconvergence/reasons.md) field.

## See Also

### Reasons

- [NIAlgorithmConvergenceStatusReasonDescription](nialgorithmconvergencestatusreasondescription.md): A human-readable description for a particular convergence status reason.
