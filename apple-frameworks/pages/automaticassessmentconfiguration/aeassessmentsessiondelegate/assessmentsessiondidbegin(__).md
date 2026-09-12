> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsessiondidbegin(_:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsessiondidbegin(_:))

# assessmentSessionDidBegin(\_:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Tells the delegate that the session started.

## Declaration

```swift
optional func assessmentSessionDidBegin(_ session: AEAssessmentSession)
```

## Parameters

- `session`: The session that started.

<a id="Discussion"></a>

## Discussion

After your app calls a session’s [begin()](../aeassessmentsession/begin%28%29.md) method, the session asynchronously disables the appropriate system services and then calls its delegate’s [assessmentSessionDidBegin(\_:)](assessmentsessiondidbegin%28__%29.md) method. Only after receiving this callback can you be sure that it’s safe to start an assessment. If the session fails to start for any reason, you receive a call to the [assessmentSession(\_:failedToBeginWithError:)](assessmentsession%28__failedtobeginwitherror_%29.md) method instead.

## See Also

### Responding to session start and stop

- [assessmentSession(\_:failedToBeginWithError:)](assessmentsession%28__failedtobeginwitherror_%29.md): Tells the delegate that the session failed to start.
- [assessmentSession(\_:wasInterruptedWithError:)](assessmentsession%28__wasinterruptedwitherror_%29.md): Tells the delegate that a system failure interrupted the session.
- [assessmentSessionDidEnd(\_:)](assessmentsessiondidend%28__%29.md): Tells the delegate that the session ended.

# assessmentSessionDidBegin: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Tells the delegate that the session started.

## Declaration

```objectivec
- (void) assessmentSessionDidBegin:(AEAssessmentSession *) session;
```

## Parameters

- `session`: The session that started.

<a id="Discussion"></a>

## Discussion

After your app calls a session’s [begin](../aeassessmentsession/begin%28%29.md) method, the session asynchronously disables the appropriate system services and then calls its delegate’s [assessmentSessionDidBegin:](assessmentsessiondidbegin%28__%29.md) method. Only after receiving this callback can you be sure that it’s safe to start an assessment. If the session fails to start for any reason, you receive a call to the [assessmentSession:failedToBeginWithError:](assessmentsession%28__failedtobeginwitherror_%29.md) method instead.

## See Also

### Responding to session start and stop

- [assessmentSession:failedToBeginWithError:](assessmentsession%28__failedtobeginwitherror_%29.md): Tells the delegate that the session failed to start.
- [assessmentSession:wasInterruptedWithError:](assessmentsession%28__wasinterruptedwitherror_%29.md): Tells the delegate that a system failure interrupted the session.
- [assessmentSessionDidEnd:](assessmentsessiondidend%28__%29.md): Tells the delegate that the session ended.
