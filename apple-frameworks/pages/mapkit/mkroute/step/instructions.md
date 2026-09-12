> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/step/instructions](https://developer.apple.com/documentation/mapkit/mkroute/step/instructions)

# instructions (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The written instructions for following the path that the step represents.

## Declaration

```swift
var instructions: String { get }
```

<a id="Discussion"></a>

## Discussion

The framework localizes the string in this property according to the user’s language preferences. You can present this string to the user from your app’s interface.

## See Also

### Getting additional step details

- [notice](notice.md): Additional notices that apply to the step.
- [distance](distance.md): The step distance, in meters.
- [transportType](transporttype.md): The transport type of the step.

# instructions (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The written instructions for following the path that the step represents.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * instructions;
```

<a id="Discussion"></a>

## Discussion

The framework localizes the string in this property according to the user’s language preferences. You can present this string to the user from your app’s interface.

## See Also

### Getting additional step details

- [notice](notice.md): Additional notices that apply to the step.
- [distance](distance.md): The step distance, in meters.
- [transportType](transporttype.md): The transport type of the step.
