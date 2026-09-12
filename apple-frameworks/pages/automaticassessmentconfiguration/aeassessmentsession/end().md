> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsession/end()](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsession/end())

# end() (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Ends an assessment session.

## Declaration

```swift
func end()
```

<a id="Discussion"></a>

## Discussion

Before calling the [end()](end%28%29.md) method, be sure to stop the assessment and hide any sensitive information. After calling the method, wait until the session’s delegate receives the [assessmentSessionDidEnd(\_:)](../aeassessmentsessiondelegate/assessmentsessiondidend%28__%29.md) method before you report the assessment as complete to the user.

## See Also

### Starting and stopping a session

- [begin()](begin%28%29.md): Starts an assessment session.
- [isActive](isactive.md): A Boolean that indicates whether an assessment session is running.

# end (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Ends an assessment session.

## Declaration

```objectivec
- (void) end;
```

<a id="Discussion"></a>

## Discussion

Before calling the [end](end%28%29.md) method, be sure to stop the assessment and hide any sensitive information. After calling the method, wait until the session’s delegate receives the [assessmentSessionDidEnd:](../aeassessmentsessiondelegate/assessmentsessiondidend%28__%29.md) method before you report the assessment as complete to the user.

## See Also

### Starting and stopping a session

- [begin](begin%28%29.md): Starts an assessment session.
- [active](isactive.md): A Boolean that indicates whether an assessment session is running.
