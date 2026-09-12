> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphimtocolopdescriptor/datalayout](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphimtocolopdescriptor/datalayout)

# dataLayout (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The property that defines the layout of source or output  tensor. e.g. `batch x channels x width x height` for `NCHW` layout

## Declaration

```swift
var dataLayout: MPSGraphTensorNamedDataLayout { get set }
```

# dataLayout (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The property that defines the layout of source or output  tensor. e.g. `batch x channels x width x height` for `NCHW` layout

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphTensorNamedDataLayout dataLayout;
```
