> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/flipz](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/flipz)

# flipZ (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that chooses between two variants for the final output computation.

## Declaration

```swift
var flipZ: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will compute the final value as `h[t] = z[t] h[t-1] + (1-z[t]) o[t]`. Otherwise it’s computed as `h[t] = (1-z[t]) h[t-1] + z[t] o[t]`. Default value: `NO`.

# flipZ (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that chooses between two variants for the final output computation.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL flipZ;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will compute the final value as `h[t] = z[t] h[t-1] + (1-z[t]) o[t]`. Otherwise it’s computed as `h[t] = (1-z[t]) h[t-1] + z[t] o[t]`. Default value: `NO`.
