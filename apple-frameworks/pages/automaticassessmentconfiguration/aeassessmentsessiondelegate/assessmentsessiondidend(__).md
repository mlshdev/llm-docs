> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsessiondidend(_:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsessiondidend(_:))

# assessmentSessionDidEnd(\_:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Tells the delegate that the session ended.

## Declaration

```swift
optional func assessmentSessionDidEnd(_ session: AEAssessmentSession)
```

## Parameters

- `session`: The session that ended.

<a id="Discussion"></a>

## Discussion

After your app calls a session’s [end()](../aeassessmentsession/end%28%29.md) method, the system asynchronously restores the system to its normal state and then calls its delegate’s [assessmentSessionDidEnd(\_:)](assessmentsessiondidend%28__%29.md) method. Confirm to the user that the assessment has stopped only after receiving this callback.

## See Also

### Responding to session start and stop

- [assessmentSessionDidBegin(\_:)](assessmentsessiondidbegin%28__%29.md): Tells the delegate that the session started.
- [assessmentSession(\_:failedToBeginWithError:)](assessmentsession%28__failedtobeginwitherror_%29.md): Tells the delegate that the session failed to start.
- [assessmentSession(\_:wasInterruptedWithError:)](assessmentsession%28__wasinterruptedwitherror_%29.md): Tells the delegate that a system failure interrupted the session.

# assessmentSessionDidEnd: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Tells the delegate that the session ended.

## Declaration

```objectivec
- (void) assessmentSessionDidEnd:(AEAssessmentSession *) session;
```

## Parameters

- `session`: The session that ended.

<a id="Discussion"></a>

## Discussion

After your app calls a session’s [end](../aeassessmentsession/end%28%29.md) method, the system asynchronously restores the system to its normal state and then calls its delegate’s [assessmentSessionDidEnd:](assessmentsessiondidend%28__%29.md) method. Confirm to the user that the assessment has stopped only after receiving this callback.

## See Also

### Responding to session start and stop

- [assessmentSessionDidBegin:](assessmentsessiondidbegin%28__%29.md): Tells the delegate that the session started.
- [assessmentSession:failedToBeginWithError:](assessmentsession%28__failedtobeginwitherror_%29.md): Tells the delegate that the session failed to start.
- [assessmentSession:wasInterruptedWithError:](assessmentsession%28__wasinterruptedwitherror_%29.md): Tells the delegate that a system failure interrupted the session.
