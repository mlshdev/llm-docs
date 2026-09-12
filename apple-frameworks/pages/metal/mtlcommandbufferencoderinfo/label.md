> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbufferencoderinfo/label](https://developer.apple.com/documentation/metal/mtlcommandbufferencoderinfo/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The name of the encoder that generates the error information.

## Declaration

```swift
var label: String { get }
```

<a id="discussion"></a>

## Discussion

Metal assigns the value of the property to the encoder’s [label](../mtlcommandencoder/label.md) property.

## See Also

### Inspecting execution information

- [debugSignposts](debugsignposts.md): An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.
- [errorState](errorstate.md): The execution status of the command encoder.
- [MTLCommandEncoderErrorState](../mtlcommandencodererrorstate.md): Possible error conditions for the command encoder’s commands.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The name of the encoder that generates the error information.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * label;
```

<a id="discussion"></a>

## Discussion

Metal assigns the value of the property to the encoder’s [label](../mtlcommandencoder/label.md) property.

## See Also

### Inspecting execution information

- [debugSignposts](debugsignposts.md): An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.
- [errorState](errorstate.md): The execution status of the command encoder.
- [MTLCommandEncoderErrorState](../mtlcommandencodererrorstate.md): Possible error conditions for the command encoder’s commands.
