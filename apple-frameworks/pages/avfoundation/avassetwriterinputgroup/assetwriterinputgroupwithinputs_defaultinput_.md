> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputgroup/assetwriterinputgroupwithinputs:defaultinput:](https://developer.apple.com/documentation/avfoundation/avassetwriterinputgroup/assetwriterinputgroupwithinputs:defaultinput:)

# assetWriterInputGroupWithInputs:defaultInput:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns a new group for the asset writer inputs.

## Declaration

```objectivec
+ (instancetype) assetWriterInputGroupWithInputs:(NSArray<AVAssetWriterInput *> *) inputs defaultInput:(AVAssetWriterInput *) defaultInput;
```

## Parameters

- `inputs`: The inputs with tracks to arrange into a mutually exclusive group.
- `defaultInput`: The group’s default input.

<a id="return-value"></a>

## Return Value

An asset writer input group.

<a id="Discussion"></a>

## Discussion

When you add an input group to an asset writer, the system sets the default input’s [marksOutputTrackAsEnabled](../avassetwriterinput/marksoutputtrackasenabled.md) property value to [true](https://developer.apple.com/documentation/swift/true), and the value of the other inputs in the group to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating an input group

- [initWithInputs:defaultInput:](init%28inputs_defaultinput_%29.md): Creates a group for the asset writer inputs.
