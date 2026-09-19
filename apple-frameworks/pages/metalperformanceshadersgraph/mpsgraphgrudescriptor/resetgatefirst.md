> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/resetgatefirst

# resetGateFirst (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that controls the internal order of the GRU gates.

## Declaration

```swift
var resetGateFirst: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will use the gate-ordering `[ r, z, o ]` instead of default `[ z, r, o ]`. Default value: `NO`.

# resetGateFirst (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that controls the internal order of the GRU gates.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL resetGateFirst;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will use the gate-ordering `[ r, z, o ]` instead of default `[ z, r, o ]`. Default value: `NO`.
