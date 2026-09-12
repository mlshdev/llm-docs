> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsuserscriptexecution](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsuserscriptexecution)

# allowsUserScriptExecution (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow user script execution during an assessment.

## Declaration

```swift
var allowsUserScriptExecution: Bool { get set }
```

<a id="discussion"></a>

## Discussion

User scripts, such as AppleScripts or Automator workflows, can automate tasks on the system. An assessment session disables user script execution by default, but you can allow it by setting [allowsUserScriptExecution](allowsuserscriptexecution.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsUserScriptExecution (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow user script execution during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsUserScriptExecution;
```

<a id="discussion"></a>

## Discussion

User scripts, such as AppleScripts or Automator workflows, can automate tasks on the system. An assessment session disables user script execution by default, but you can allow it by setting [allowsUserScriptExecution](allowsuserscriptexecution.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
