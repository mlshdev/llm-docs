> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entityaction/eventparametertype](https://developer.apple.com/documentation/realitykit/entityaction/eventparametertype)

# EventParameterType

**Framework:** RealityKit  
**Kind:** Associated Type  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The associated event parameter type.

## Declaration

```swift
associatedtype EventParameterType = Never
```

<a id="discussion"></a>

## Discussion

Event parameters are used when more than one event interval is defined for a single action animation. Event parameters can vary for each event interval. The parameter data associated with each event will be returned to the event handler when it is called.

The default parameter type is `Never` so that it does not need to be defined for single event action animations.
