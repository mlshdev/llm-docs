> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/explicitpadding](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/explicitpadding)

# explicitPadding (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The property that defines padding values for spatial dimensions.

## Declaration

```swift
var explicitPadding: [NSNumber] { get set }
```

<a id="discussion"></a>

## Discussion

Must be eight numbers, two for each spatial dimension. For example `paddingValues[0]` defines the explicit padding amount before the first spatial dimension (slowest running index of spatial dimensions), `paddingValues[1]` defines the padding amount after the first spatial dimension etc. Used only when `paddingStyle = MPSGraphPaddingStyleExplicit`. Default value: `@[ @0, @0, @0, @0, @0, @0, @0, @0 ]`

# explicitPadding (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The property that defines padding values for spatial dimensions.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) MPSShape * explicitPadding;
```

<a id="discussion"></a>

## Discussion

Must be eight numbers, two for each spatial dimension. For example `paddingValues[0]` defines the explicit padding amount before the first spatial dimension (slowest running index of spatial dimensions), `paddingValues[1]` defines the padding amount after the first spatial dimension etc. Used only when `paddingStyle = MPSGraphPaddingStyleExplicit`. Default value: `@[ @0, @0, @0, @0, @0, @0, @0, @0 ]`
