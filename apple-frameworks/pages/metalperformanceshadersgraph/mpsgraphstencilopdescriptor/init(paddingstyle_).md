> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/init(paddingstyle:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/init(paddingstyle:))

# init(paddingStyle:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation descriptor with default values.

## Declaration

```swift
convenience init?(paddingStyle: MPSGraphPaddingStyle)
```

## Parameters

- `paddingStyle`: See `paddingStyle` property.

<a id="return-value"></a>

## Return Value

A valid MPSGraphStencilOpDescriptor object

# descriptorWithPaddingStyle: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation descriptor with default values.

## Declaration

```objectivec
+ (instancetype) descriptorWithPaddingStyle:(MPSGraphPaddingStyle) paddingStyle;
```

## Parameters

- `paddingStyle`: See `paddingStyle` property.

<a id="return-value"></a>

## Return Value

A valid MPSGraphStencilOpDescriptor object
