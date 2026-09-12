> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsession/begin()](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsession/begin())

# begin() (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Starts an assessment session.

## Declaration

```swift
func begin()
```

<a id="Discussion"></a>

## Discussion

After calling the [begin()](begin%28%29.md) method, wait until the session’s delegate receives the [assessmentSessionDidBegin(\_:)](../aeassessmentsessiondelegate/assessmentsessiondidbegin%28__%29.md) method before starting an assessment or showing sensitive information. When you’re ready to stop the assessment session, call the [end()](end%28%29.md) method.

## See Also

### Starting and stopping a session

- [end()](end%28%29.md): Ends an assessment session.
- [isActive](isactive.md): A Boolean that indicates whether an assessment session is running.

# begin (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Starts an assessment session.

## Declaration

```objectivec
- (void) begin;
```

<a id="Discussion"></a>

## Discussion

After calling the [begin](begin%28%29.md) method, wait until the session’s delegate receives the [assessmentSessionDidBegin:](../aeassessmentsessiondelegate/assessmentsessiondidbegin%28__%29.md) method before starting an assessment or showing sensitive information. When you’re ready to stop the assessment session, call the [end](end%28%29.md) method.

## See Also

### Starting and stopping a session

- [end](end%28%29.md): Ends an assessment session.
- [active](isactive.md): A Boolean that indicates whether an assessment session is running.
