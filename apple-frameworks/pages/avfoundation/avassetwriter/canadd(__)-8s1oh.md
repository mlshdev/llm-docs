> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/canadd(_:)-8s1oh](https://developer.apple.com/documentation/avfoundation/avassetwriter/canadd(_:)-8s1oh)

# canAdd(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the asset writer supports adding the input group.

## Declaration

```swift
func canAdd(_ inputGroup: AVAssetWriterInputGroup) -> Bool
```

## Parameters

- `inputGroup`: The asset writer input group to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the input group to the asset writer; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if the asset writer’s output file type doesn’t support mutually exclusive relationships among tracks, or if the input group contains inputs with media types that you can’t relate.

## See Also

### Configuring input groups

- [inputGroups](inputgroups.md): The input groups an asset writer contains.
- [add(\_:)](add%28__%29-3san4.md): Adds an input group to an asset writer.

# canAddInputGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the asset writer supports adding the input group.

## Declaration

```objectivec
- (BOOL) canAddInputGroup:(AVAssetWriterInputGroup *) inputGroup;
```

## Parameters

- `inputGroup`: The asset writer input group to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the input group to the asset writer; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if the asset writer’s output file type doesn’t support mutually exclusive relationships among tracks, or if the input group contains inputs with media types that you can’t relate.

## See Also

### Configuring input groups

- [inputGroups](inputgroups.md): The input groups an asset writer contains.
- [addInputGroup:](add%28__%29-3san4.md): Adds an input group to an asset writer.
