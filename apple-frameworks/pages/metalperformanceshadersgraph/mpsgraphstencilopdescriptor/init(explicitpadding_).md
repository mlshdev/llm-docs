> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/init(explicitpadding:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/init(explicitpadding:))

# init(explicitPadding:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation descriptor with default values.

## Declaration

```swift
convenience init?(explicitPadding: [NSNumber])
```

## Parameters

- `explicitPadding`: See `explicitPadding` property.

<a id="return-value"></a>

## Return Value

A valid MPSGraphStencilOpDescriptor object

# descriptorWithExplicitPadding: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation descriptor with default values.

## Declaration

```objectivec
+ (instancetype) descriptorWithExplicitPadding:(MPSShape *) explicitPadding;
```

## Parameters

- `explicitPadding`: See `explicitPadding` property.

<a id="return-value"></a>

## Return Value

A valid MPSGraphStencilOpDescriptor object
