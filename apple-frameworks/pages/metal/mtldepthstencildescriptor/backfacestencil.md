> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldepthstencildescriptor/backfacestencil](https://developer.apple.com/documentation/metal/mtldepthstencildescriptor/backfacestencil)

# backFaceStencil (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The stencil descriptor for back-facing primitives.

## Declaration

```swift
@NSCopying var backFaceStencil: MTLStencilDescriptor! { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`, which indicates the stencil test is disabled for the back-facing primitives. For more information, see [MTLStencilDescriptor](../mtlstencildescriptor.md).

## See Also

### Specifying stencil descriptors for primitives

- [frontFaceStencil](frontfacestencil.md): The stencil descriptor for front-facing primitives.

# backFaceStencil (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The stencil descriptor for back-facing primitives.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) MTLStencilDescriptor * backFaceStencil;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`, which indicates the stencil test is disabled for the back-facing primitives. For more information, see [MTLStencilDescriptor](../mtlstencildescriptor.md).

## See Also

### Specifying stencil descriptors for primitives

- [frontFaceStencil](frontfacestencil.md): The stencil descriptor for front-facing primitives.
