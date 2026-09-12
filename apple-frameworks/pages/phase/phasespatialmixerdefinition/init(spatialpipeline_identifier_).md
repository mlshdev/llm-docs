> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialmixerdefinition/init(spatialpipeline:identifier:)](https://developer.apple.com/documentation/phase/phasespatialmixerdefinition/init(spatialpipeline:identifier:))

# init(spatialPipeline:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named mixer with the designated spatial pipeline.

## Declaration

```swift
convenience init(spatialPipeline: PHASESpatialPipeline, identifier: String)
```

## Parameters

- `spatialPipeline`: An object that features optional sound resonance effects.
- `identifier`: A unique name for the spatial mixer.

## See Also

### Creating a Spatial Mixer

- [init(spatialPipeline:)](init%28spatialpipeline_%29.md): Creates a mixer with the designated spatial pipeline.

# initWithSpatialPipeline:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named mixer with the designated spatial pipeline.

## Declaration

```objectivec
- (instancetype) initWithSpatialPipeline:(PHASESpatialPipeline *) spatialPipeline identifier:(NSString *) identifier;
```

## Parameters

- `spatialPipeline`: An object that features optional sound resonance effects.
- `identifier`: A unique name for the spatial mixer.

## See Also

### Creating a Spatial Mixer

- [initWithSpatialPipeline:](init%28spatialpipeline_%29.md): Creates a mixer with the designated spatial pipeline.
