> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsession(_:failedtobeginwitherror:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsession(_:failedtobeginwitherror:))

# assessmentSession(\_:failedToBeginWithError:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Tells the delegate that the session failed to start.

## Declaration

```swift
optional func assessmentSession(_ session: AEAssessmentSession, failedToBeginWithError error: any Error)
```

## Parameters

- `session`: The session that failed to start.
- `error`: An error that provides information about why the session failed.

<a id="Discussion"></a>

## Discussion

After your app calls a session’s [begin()](../aeassessmentsession/begin%28%29.md) method, the session asynchronously disables the appropriate system services and then calls its delegate’s [assessmentSessionDidBegin(\_:)](assessmentsessiondidbegin%28__%29.md) method. However, if the session fails to start for any reason, it calls the [assessmentSession(\_:failedToBeginWithError:)](assessmentsession%28__failedtobeginwitherror_%29.md) method instead. Don’t start any assessments if your app receives this callback.

## See Also

### Responding to session start and stop

- [assessmentSessionDidBegin(\_:)](assessmentsessiondidbegin%28__%29.md): Tells the delegate that the session started.
- [assessmentSession(\_:wasInterruptedWithError:)](assessmentsession%28__wasinterruptedwitherror_%29.md): Tells the delegate that a system failure interrupted the session.
- [assessmentSessionDidEnd(\_:)](assessmentsessiondidend%28__%29.md): Tells the delegate that the session ended.

# assessmentSession:failedToBeginWithError: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Tells the delegate that the session failed to start.

## Declaration

```objectivec
- (void) assessmentSession:(AEAssessmentSession *) session failedToBeginWithError:(NSError *) error;
```

## Parameters

- `session`: The session that failed to start.
- `error`: An error that provides information about why the session failed.

<a id="Discussion"></a>

## Discussion

After your app calls a session’s [begin](../aeassessmentsession/begin%28%29.md) method, the session asynchronously disables the appropriate system services and then calls its delegate’s [assessmentSessionDidBegin:](assessmentsessiondidbegin%28__%29.md) method. However, if the session fails to start for any reason, it calls the [assessmentSession:failedToBeginWithError:](assessmentsession%28__failedtobeginwitherror_%29.md) method instead. Don’t start any assessments if your app receives this callback.

## See Also

### Responding to session start and stop

- [assessmentSessionDidBegin:](assessmentsessiondidbegin%28__%29.md): Tells the delegate that the session started.
- [assessmentSession:wasInterruptedWithError:](assessmentsession%28__wasinterruptedwitherror_%29.md): Tells the delegate that a system failure interrupted the session.
- [assessmentSessionDidEnd:](assessmentsessiondidend%28__%29.md): Tells the delegate that the session ended.
