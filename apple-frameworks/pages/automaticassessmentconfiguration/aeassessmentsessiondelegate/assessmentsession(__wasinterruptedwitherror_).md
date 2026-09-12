> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsession(_:wasinterruptedwitherror:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate/assessmentsession(_:wasinterruptedwitherror:))

# assessmentSession(\_:wasInterruptedWithError:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Tells the delegate that a system failure interrupted the session.

## Declaration

```swift
optional func assessmentSession(_ session: AEAssessmentSession, wasInterruptedWithError error: any Error)
```

## Parameters

- `session`: The session that failed.
- `error`: An error that provides information about the interruption.

<a id="Discussion"></a>

## Discussion

If one or more subsystems fail during a session, the session tells its delegate by calling the [assessmentSession(\_:wasInterruptedWithError:)](assessmentsession%28__wasinterruptedwitherror_%29.md) method. If your app receives this callback, immediately stop the assessment, hide all sensitive content, and end the session. Because it might take time for your app to stop the assessment, the session relies on your app to call the [end()](../aeassessmentsession/end%28%29.md) method:

**Swift**

```swift
func assessmentSession(_ session: AEAssessmentSession, wasInterruptedWithError error: Error) {
    // Hide sensitive UI and optionally store assessment progress.

    // End the session.
    session.end()
}
```

**Objective-C**

```objc
- (void)assessmentSession:(AEAssessmentSession *)session wasInterruptedWithError:(NSError *)error {
    // Hide sensitive UI and optionally store assessment progress.

    // End the session.
    [session end];
}
```

## See Also

### Responding to session start and stop

- [assessmentSessionDidBegin(\_:)](assessmentsessiondidbegin%28__%29.md): Tells the delegate that the session started.
- [assessmentSession(\_:failedToBeginWithError:)](assessmentsession%28__failedtobeginwitherror_%29.md): Tells the delegate that the session failed to start.
- [assessmentSessionDidEnd(\_:)](assessmentsessiondidend%28__%29.md): Tells the delegate that the session ended.

# assessmentSession:wasInterruptedWithError: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Tells the delegate that a system failure interrupted the session.

## Declaration

```objectivec
- (void) assessmentSession:(AEAssessmentSession *) session wasInterruptedWithError:(NSError *) error;
```

## Parameters

- `session`: The session that failed.
- `error`: An error that provides information about the interruption.

<a id="Discussion"></a>

## Discussion

If one or more subsystems fail during a session, the session tells its delegate by calling the [assessmentSession:wasInterruptedWithError:](assessmentsession%28__wasinterruptedwitherror_%29.md) method. If your app receives this callback, immediately stop the assessment, hide all sensitive content, and end the session. Because it might take time for your app to stop the assessment, the session relies on your app to call the [end](../aeassessmentsession/end%28%29.md) method:

**Swift**

```swift
func assessmentSession(_ session: AEAssessmentSession, wasInterruptedWithError error: Error) {
    // Hide sensitive UI and optionally store assessment progress.

    // End the session.
    session.end()
}
```

**Objective-C**

```objc
- (void)assessmentSession:(AEAssessmentSession *)session wasInterruptedWithError:(NSError *)error {
    // Hide sensitive UI and optionally store assessment progress.

    // End the session.
    [session end];
}
```

## See Also

### Responding to session start and stop

- [assessmentSessionDidBegin:](assessmentsessiondidbegin%28__%29.md): Tells the delegate that the session started.
- [assessmentSession:failedToBeginWithError:](assessmentsession%28__failedtobeginwitherror_%29.md): Tells the delegate that the session failed to start.
- [assessmentSessionDidEnd:](assessmentsessiondidend%28__%29.md): Tells the delegate that the session ended.
