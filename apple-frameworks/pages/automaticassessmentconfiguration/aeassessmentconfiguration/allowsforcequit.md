> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsforcequit](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsforcequit)

# allowsForceQuit

**Interface language:** Objective-C

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property

A Boolean value that indicates whether to allow force quitting apps during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsForceQuit;
```

<a id="discussion"></a>

## Discussion

Users can force quit apps by pressing Shift-Option-Command-Escape to force quit the frontmost app. An assessment session disables force quit by default, but you can allow it by setting [allowsForceQuit](allowsforcequit.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

> **Note**

> This property controls only the force quit keyboard shortcuts. Setting it to `false` does not remove the Force Quit item from the Apple menu. Use [allowedAppleMenuItems](allowedapplemenuitems.md) to configure the allowed Apple menu items.
