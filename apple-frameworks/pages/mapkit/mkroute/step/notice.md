> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/step/notice](https://developer.apple.com/documentation/mapkit/mkroute/step/notice)

# notice (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Additional notices that apply to the step.

## Declaration

```swift
var notice: String? { get }
```

<a id="Discussion"></a>

## Discussion

Notices may include legal information or warning notices that apply to the step. For example, if the step crosses railroad tracks, it might contain a notice that warns the user not to cross the tracks when the lights are flashing.

## See Also

### Getting additional step details

- [instructions](instructions.md): The written instructions for following the path that the step represents.
- [distance](distance.md): The step distance, in meters.
- [transportType](transporttype.md): The transport type of the step.

# notice (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Additional notices that apply to the step.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * notice;
```

<a id="Discussion"></a>

## Discussion

Notices may include legal information or warning notices that apply to the step. For example, if the step crosses railroad tracks, it might contain a notice that warns the user not to cross the tracks when the lights are flashing.

## See Also

### Getting additional step details

- [instructions](instructions.md): The written instructions for following the path that the step represents.
- [distance](distance.md): The step distance, in meters.
- [transportType](transporttype.md): The transport type of the step.
