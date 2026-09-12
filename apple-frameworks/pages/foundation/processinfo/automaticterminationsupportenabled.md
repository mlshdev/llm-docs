> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/automaticterminationsupportenabled](https://developer.apple.com/documentation/foundation/processinfo/automaticterminationsupportenabled)

# automaticTerminationSupportEnabled (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the app supports automatic termination.

## Declaration

```swift
var automaticTerminationSupportEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Without setting this property or setting the equivalent `Info.plist` key (`NSSupportsAutomaticTermination`), the methods [disableAutomaticTermination(\_:)](disableautomatictermination%28__%29.md) and [enableAutomaticTermination(\_:)](enableautomatictermination%28__%29.md) have no effect, although the counter tracking automatic termination opt-outs is still kept up to date to ensure correctness if this is called later. Currently, setting this property to [false](https://developer.apple.com/documentation/swift/false) has no effect. This property should be set in the app delegate method [applicationDidFinishLaunching(\_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidfinishlaunching%28_:%29) or earlier.

## See Also

### Controlling automatic termination

- [disableAutomaticTermination(\_:)](disableautomatictermination%28__%29.md): Disables automatic termination for the application.
- [enableAutomaticTermination(\_:)](enableautomatictermination%28__%29.md): Enables automatic termination for the application.

# automaticTerminationSupportEnabled (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the app supports automatic termination.

## Declaration

```objectivec
@property BOOL automaticTerminationSupportEnabled;
```

<a id="Discussion"></a>

## Discussion

Without setting this property or setting the equivalent `Info.plist` key (`NSSupportsAutomaticTermination`), the methods [disableAutomaticTermination:](disableautomatictermination%28__%29.md) and [enableAutomaticTermination:](enableautomatictermination%28__%29.md) have no effect, although the counter tracking automatic termination opt-outs is still kept up to date to ensure correctness if this is called later. Currently, setting this property to [false](https://developer.apple.com/documentation/swift/false) has no effect. This property should be set in the app delegate method [applicationDidFinishLaunching:](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidfinishlaunching%28_:%29) or earlier.

## See Also

### Controlling automatic termination

- [disableAutomaticTermination:](disableautomatictermination%28__%29.md): Disables automatic termination for the application.
- [enableAutomaticTermination:](enableautomatictermination%28__%29.md): Enables automatic termination for the application.
- [automaticTerminationOptOutCounter](../nsprocessinfo/automaticterminationoptoutcounter.md)
