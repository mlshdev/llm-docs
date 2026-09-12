> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialpipeline/init(flags:)](https://developer.apple.com/documentation/phase/phasespatialpipeline/init(flags:))

# init(flags:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a spatial pipeline with the specified flags.

## Declaration

```swift
init?(flags: PHASESpatialPipeline.Flags)
```

## Parameters

- `flags`: An array of sound-resonance effects to include in the spatial pipeline’s output. The framework adds an entry to the [entries](entries.md) property for each element that the app includes in this collection.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` for a `nil` `flags` argument.

## See Also

### Creating a Spatial Pipeline

- [PHASESpatialPipeline.Flags](flags-swift.struct.md): Sound resonance options for a spatial pipeline.

# initWithFlags: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a spatial pipeline with the specified flags.

## Declaration

```objectivec
- (instancetype) initWithFlags:(PHASESpatialPipelineFlags) flags;
```

## Parameters

- `flags`: An array of sound-resonance effects to include in the spatial pipeline’s output. The framework adds an entry to the [entries](entries.md) property for each element that the app includes in this collection.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` for a `nil` `flags` argument.

## See Also

### Creating a Spatial Pipeline

- [PHASESpatialPipelineFlags](flags-swift.struct.md): Sound resonance options for a spatial pipeline.
