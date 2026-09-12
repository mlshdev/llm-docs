> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/add(_:)-3san4](https://developer.apple.com/documentation/avfoundation/avassetwriter/add(_:)-3san4)

# add(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Adds an input group to an asset writer.

## Declaration

```swift
func add(_ inputGroup: AVAssetWriterInputGroup)
```

## Parameters

- `inputGroup`: A compatible asset writer input group to add.

<a id="Discussion"></a>

## Discussion

An asset writer marks tracks associated with grouped inputs as mutually exclusive to each other for playback or other processing, if the output container format supports mutually exclusive relationships among tracks.

When you add an input group to an asset writer, the system sets the value of the default input’s [marksOutputTrackAsEnabled](../avassetwriterinput/marksoutputtrackasenabled.md) property to [true](https://developer.apple.com/documentation/swift/true) and sets the values of the group’s other inputs to [false](https://developer.apple.com/documentation/swift/false).

You can’t add input groups after writing starts.

## See Also

### Configuring input groups

- [inputGroups](inputgroups.md): The input groups an asset writer contains.
- [canAdd(\_:)](canadd%28__%29-8s1oh.md): Determines whether the asset writer supports adding the input group.

# addInputGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Adds an input group to an asset writer.

## Declaration

```objectivec
- (void) addInputGroup:(AVAssetWriterInputGroup *) inputGroup;
```

## Parameters

- `inputGroup`: A compatible asset writer input group to add.

<a id="Discussion"></a>

## Discussion

An asset writer marks tracks associated with grouped inputs as mutually exclusive to each other for playback or other processing, if the output container format supports mutually exclusive relationships among tracks.

When you add an input group to an asset writer, the system sets the value of the default input’s [marksOutputTrackAsEnabled](../avassetwriterinput/marksoutputtrackasenabled.md) property to [true](https://developer.apple.com/documentation/swift/true) and sets the values of the group’s other inputs to [false](https://developer.apple.com/documentation/swift/false).

You can’t add input groups after writing starts.

## See Also

### Configuring input groups

- [inputGroups](inputgroups.md): The input groups an asset writer contains.
- [canAddInputGroup:](canadd%28__%29-8s1oh.md): Determines whether the asset writer supports adding the input group.
