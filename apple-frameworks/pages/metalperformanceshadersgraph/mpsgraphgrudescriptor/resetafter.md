> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/resetafter](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/resetafter)

# resetAfter (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that chooses between two variants for the reset gate computation.

## Declaration

```swift
var resetAfter: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will compute the intermediate value as `c[t] = ( b + (h[t-1] m ) R^T) r[t]`. Otherwise it’s computed as `c[t] = (h[t-1] r[t] m) R^T`. Default value: `NO`.

# resetAfter (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that chooses between two variants for the reset gate computation.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL resetAfter;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will compute the intermediate value as `c[t] = ( b + (h[t-1] m ) R^T) r[t]`. Otherwise it’s computed as `c[t] = (h[t-1] r[t] m) R^T`. Default value: `NO`.
