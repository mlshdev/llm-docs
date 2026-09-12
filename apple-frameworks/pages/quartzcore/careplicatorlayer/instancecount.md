> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/careplicatorlayer/instancecount](https://developer.apple.com/documentation/quartzcore/careplicatorlayer/instancecount)

# instanceCount (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The number of copies to create, including the source layers.

## Declaration

```swift
var instanceCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Default value is `1`, no extra copies are created.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Setting Instance Display Properties

- [instanceDelay](instancedelay.md): Specifies the delay, in seconds, between replicated copies. Animatable.
- [instanceTransform](instancetransform.md): The transform matrix applied to the previous instance to produce the current instance. Animatable.

# instanceCount (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The number of copies to create, including the source layers.

## Declaration

```objectivec
@property NSInteger instanceCount;
```

<a id="Discussion"></a>

## Discussion

Default value is `1`, no extra copies are created.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Setting Instance Display Properties

- [instanceDelay](instancedelay.md): Specifies the delay, in seconds, between replicated copies. Animatable.
- [instanceTransform](instancetransform.md): The transform matrix applied to the previous instance to produce the current instance. Animatable.
