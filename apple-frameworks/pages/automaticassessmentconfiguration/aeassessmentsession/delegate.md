> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsession/delegate](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsession/delegate)

# delegate (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

A delegate to which the session provides state change updates.

## Declaration

```swift
weak var delegate: (any AEAssessmentSessionDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

An assessment session operates asynchronously because it takes time to make the changes associated with starting or stopping a session, and external events might affect the state of the session. Adopt the [AEAssessmentSessionDelegate](../aeassessmentsessiondelegate.md) protocol to receive callbacks at key points in the session life cycle. Store your adopter in the session’s [delegate](delegate.md) property before starting a session.

By listening for delegate callbacks, you learn when you can safely start an assessment after calling the session’s [begin()](begin%28%29.md) method, when the session has finished after calling the [end()](end%28%29.md) method, or if the session has been interrupted for some reason.

The session calls all delegate methods on the main thread.

## See Also

### Responding to session updates

- [AEAssessmentSessionDelegate](../aeassessmentsessiondelegate.md): An interface that the session uses to provide information about session state changes to a delegate.

# delegate (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

A delegate to which the session provides state change updates.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<AEAssessmentSessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

An assessment session operates asynchronously because it takes time to make the changes associated with starting or stopping a session, and external events might affect the state of the session. Adopt the [AEAssessmentSessionDelegate](../aeassessmentsessiondelegate.md) protocol to receive callbacks at key points in the session life cycle. Store your adopter in the session’s [delegate](delegate.md) property before starting a session.

By listening for delegate callbacks, you learn when you can safely start an assessment after calling the session’s [begin](begin%28%29.md) method, when the session has finished after calling the [end](end%28%29.md) method, or if the session has been interrupted for some reason.

The session calls all delegate methods on the main thread.

## See Also

### Responding to session updates

- [AEAssessmentSessionDelegate](../aeassessmentsessiondelegate.md): An interface that the session uses to provide information about session state changes to a delegate.
