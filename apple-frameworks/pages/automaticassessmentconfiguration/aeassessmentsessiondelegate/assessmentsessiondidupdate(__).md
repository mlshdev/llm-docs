> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsessiondidupdate(_:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsessiondidupdate(_:))

# assessmentSessionDidUpdate(\_:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Tells the delegate that a configuration update succeeded.

## Declaration

```swift
optional func assessmentSessionDidUpdate(_ session: AEAssessmentSession)
```

## Parameters

- `session`: The session that received the configuration update.

<a id="Discussion"></a>

## Discussion

After you call a session’s [update(to:)](../aeassessmentsession/update%28to_%29.md) method, the session calls this delegate method to indicate a successful update. If the update fails, the session calls [assessmentSession(\_:failedToUpdateTo:error:)](assessmentsession%28__failedtoupdateto_error_%29.md) instead.

## See Also

### Responding to configuration changes

- [assessmentSession(\_:failedToUpdateTo:error:)](assessmentsession%28__failedtoupdateto_error_%29.md): Tells the delegate that a configuration update failed.

# assessmentSessionDidUpdate: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Tells the delegate that a configuration update succeeded.

## Declaration

```objectivec
- (void) assessmentSessionDidUpdate:(AEAssessmentSession *) session;
```

## Parameters

- `session`: The session that received the configuration update.

<a id="Discussion"></a>

## Discussion

After you call a session’s [updateToConfiguration:](../aeassessmentsession/update%28to_%29.md) method, the session calls this delegate method to indicate a successful update. If the update fails, the session calls [assessmentSession:failedToUpdateToConfiguration:error:](assessmentsession%28__failedtoupdateto_error_%29.md) instead.

## See Also

### Responding to configuration changes

- [assessmentSession:failedToUpdateToConfiguration:error:](assessmentsession%28__failedtoupdateto_error_%29.md): Tells the delegate that a configuration update failed.
