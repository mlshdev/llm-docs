> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/offsets](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/offsets)

# offsets (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An array of length four that determines from which offset to start reading the input tensor.

## Declaration

```swift
var offsets: [NSNumber] { get set }
```

<a id="discussion"></a>

## Discussion

Only used when `paddingStyle` is `MPSGraphPaddingStyleExplicitOffset`. For example zero offset means that the first stencil window will align its top-left corner (in 4 dimensions) to the top-left corner of the input tensor. Default value: `@[ @0, @0, @0, @0 ]`

# offsets (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An array of length four that determines from which offset to start reading the input tensor.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) MPSShape * offsets;
```

<a id="discussion"></a>

## Discussion

Only used when `paddingStyle` is `MPSGraphPaddingStyleExplicitOffset`. For example zero offset means that the first stencil window will align its top-left corner (in 4 dimensions) to the top-left corner of the input tensor. Default value: `@[ @0, @0, @0, @0 ]`
