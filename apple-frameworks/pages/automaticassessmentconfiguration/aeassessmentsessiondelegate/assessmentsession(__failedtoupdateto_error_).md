> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsession(_:failedtoupdateto:error:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsession(_:failedtoupdateto:error:))

# assessmentSession(\_:failedToUpdateTo:error:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Tells the delegate that a configuration update failed.

## Declaration

```swift
optional func assessmentSession(_ session: AEAssessmentSession, failedToUpdateTo configuration: AEAssessmentConfiguration, error: any Error)
```

## Parameters

- `session`: The session that you attempted to update.
- `configuration`: The configuration that you attempted to update the session with.
- `error`: An error that describes the reason for the failure.

<a id="Discussion"></a>

## Discussion

After you call a session’s [update(to:)](../aeassessmentsession/update%28to_%29.md) method, the session calls this delegate method if the update fails. If the update succeeds, the session calls [assessmentSessionDidUpdate(\_:)](assessmentsessiondidupdate%28__%29.md) instead.

## See Also

### Responding to configuration changes

- [assessmentSessionDidUpdate(\_:)](assessmentsessiondidupdate%28__%29.md): Tells the delegate that a configuration update succeeded.

# assessmentSession:failedToUpdateToConfiguration:error: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Tells the delegate that a configuration update failed.

## Declaration

```objectivec
- (void) assessmentSession:(AEAssessmentSession *) session failedToUpdateToConfiguration:(AEAssessmentConfiguration *) configuration error:(NSError *) error;
```

## Parameters

- `session`: The session that you attempted to update.
- `configuration`: The configuration that you attempted to update the session with.
- `error`: An error that describes the reason for the failure.

<a id="Discussion"></a>

## Discussion

After you call a session’s [updateToConfiguration:](../aeassessmentsession/update%28to_%29.md) method, the session calls this delegate method if the update fails. If the update succeeds, the session calls [assessmentSessionDidUpdate:](assessmentsessiondidupdate%28__%29.md) instead.

## See Also

### Responding to configuration changes

- [assessmentSessionDidUpdate:](assessmentsessiondidupdate%28__%29.md): Tells the delegate that a configuration update succeeded.
