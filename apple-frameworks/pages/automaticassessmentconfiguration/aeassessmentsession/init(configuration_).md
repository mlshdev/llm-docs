> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsession/init(configuration:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsession/init(configuration:))

# init(configuration:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Initializer  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Creates a new assessment session.

## Declaration

```swift
init(configuration: AEAssessmentConfiguration)
```

## Parameters

- `configuration`: Configuration information for the session.

<a id="Discussion"></a>

## Discussion

After creating a new session, assign its [delegate](delegate.md) property before calling the [begin()](begin%28%29.md) method to start a session. Wait for the delegate to receive the [assessmentSessionDidBegin(\_:)](../aeassessmentsessiondelegate/assessmentsessiondidbegin%28__%29.md) call before starting an assessment.

# initWithConfiguration: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Creates a new assessment session.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(AEAssessmentConfiguration *) configuration;
```

## Parameters

- `configuration`: Configuration information for the session.

<a id="Discussion"></a>

## Discussion

After creating a new session, assign its [delegate](delegate.md) property before calling the [begin](begin%28%29.md) method to start a session. Wait for the delegate to receive the [assessmentSessionDidBegin:](../aeassessmentsessiondelegate/assessmentsessiondidbegin%28__%29.md) call before starting an assessment.
