> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsession/isactive](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsession/isactive)

# isActive (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

A Boolean that indicates whether an assessment session is running.

## Declaration

```swift
var isActive: Bool { get }
```

## See Also

### Starting and stopping a session

- [begin()](begin%28%29.md): Starts an assessment session.
- [end()](end%28%29.md): Ends an assessment session.

# active (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

A Boolean that indicates whether an assessment session is running.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isActive) BOOL active;
```

## See Also

### Starting and stopping a session

- [begin](begin%28%29.md): Starts an assessment session.
- [end](end%28%29.md): Ends an assessment session.
