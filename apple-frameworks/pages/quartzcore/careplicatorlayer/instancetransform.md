> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/careplicatorlayer/instancetransform](https://developer.apple.com/documentation/quartzcore/careplicatorlayer/instancetransform)

# instanceTransform (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The transform matrix applied to the previous instance to produce the current instance. Animatable.

## Declaration

```swift
var instanceTransform: CATransform3D { get set }
```

<a id="Discussion"></a>

## Discussion

This transform matrix is applied to instance `k-1` to produce instance `k`. The matrix is applied relative to the center of this layer.

Defaults to the identity matrix.

## See Also

### Setting Instance Display Properties

- [instanceCount](instancecount.md): The number of copies to create, including the source layers.
- [instanceDelay](instancedelay.md): Specifies the delay, in seconds, between replicated copies. Animatable.

# instanceTransform (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The transform matrix applied to the previous instance to produce the current instance. Animatable.

## Declaration

```objectivec
@property CATransform3D instanceTransform;
```

<a id="Discussion"></a>

## Discussion

This transform matrix is applied to instance `k-1` to produce instance `k`. The matrix is applied relative to the center of this layer.

Defaults to the identity matrix.

## See Also

### Setting Instance Display Properties

- [instanceCount](instancecount.md): The number of copies to create, including the source layers.
- [instanceDelay](instancedelay.md): Specifies the delay, in seconds, between replicated copies. Animatable.
