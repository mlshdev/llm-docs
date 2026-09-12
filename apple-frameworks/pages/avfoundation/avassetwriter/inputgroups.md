> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/inputgroups](https://developer.apple.com/documentation/avfoundation/avassetwriter/inputgroups)

# inputGroups (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The input groups an asset writer contains.

## Declaration

```swift
var inputGroups: [AVAssetWriterInputGroup] { get }
```

<a id="Discussion"></a>

## Discussion

Add input groups to the asset writer using its [add(\_:)](add%28__%29-3san4.md) method.

## See Also

### Configuring input groups

- [canAdd(\_:)](canadd%28__%29-8s1oh.md): Determines whether the asset writer supports adding the input group.
- [add(\_:)](add%28__%29-3san4.md): Adds an input group to an asset writer.

# inputGroups (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The input groups an asset writer contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAssetWriterInputGroup *> * inputGroups;
```

<a id="Discussion"></a>

## Discussion

Add input groups to the asset writer using its [addInputGroup:](add%28__%29-3san4.md) method.

## See Also

### Configuring input groups

- [canAddInputGroup:](canadd%28__%29-8s1oh.md): Determines whether the asset writer supports adding the input group.
- [addInputGroup:](add%28__%29-3san4.md): Adds an input group to an asset writer.
