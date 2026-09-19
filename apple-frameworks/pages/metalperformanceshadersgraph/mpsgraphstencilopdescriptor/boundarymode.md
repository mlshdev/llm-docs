> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/boundarymode

# boundaryMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The property that determines which values to use for padding the input tensor.

## Declaration

```swift
var boundaryMode: MPSGraphPaddingMode { get set }
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphPaddingModeZero`.

# boundaryMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The property that determines which values to use for padding the input tensor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphPaddingMode boundaryMode;
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphPaddingModeZero`.
