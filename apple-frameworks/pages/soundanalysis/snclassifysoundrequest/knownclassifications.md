> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassifysoundrequest/knownclassifications](https://developer.apple.com/documentation/soundanalysis/snclassifysoundrequest/knownclassifications)

# knownClassifications (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A string array that contains every prediction label in the request’s underlying sound classifier model.

## Declaration

```swift
var knownClassifications: [String] { get }
```

## See Also

### Inspecting a Request

- [SNTimeDurationConstraint](../sntimedurationconstraint-swift.enum.md): Defines the time duration windows the request’s underlying sound classifier accepts with a range, or an array, of durations.

# knownClassifications (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A string array that contains every prediction label in the request’s underlying sound classifier model.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * knownClassifications;
```

## See Also

### Inspecting a Request

- [SNTimeDurationConstraint](../sntimedurationconstraint-c.class.md): Defines the time duration windows the request’s underlying sound classifier accepts with a range, or an array, of durations.
