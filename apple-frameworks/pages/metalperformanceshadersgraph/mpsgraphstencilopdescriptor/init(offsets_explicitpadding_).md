> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/init(offsets:explicitpadding:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/init(offsets:explicitpadding:))

# init(offsets:explicitPadding:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation descriptor with default values.

## Declaration

```swift
convenience init?(offsets: [NSNumber], explicitPadding: [NSNumber])
```

## Parameters

- `offsets`: See `offsets` property.
- `explicitPadding`: See `explicitPadding` property.

<a id="return-value"></a>

## Return Value

A valid MPSGraphStencilOpDescriptor object

# descriptorWithOffsets:explicitPadding: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation descriptor with default values.

## Declaration

```objectivec
+ (instancetype) descriptorWithOffsets:(MPSShape *) offsets explicitPadding:(MPSShape *) explicitPadding;
```

## Parameters

- `offsets`: See `offsets` property.
- `explicitPadding`: See `explicitPadding` property.

<a id="return-value"></a>

## Return Value

A valid MPSGraphStencilOpDescriptor object
