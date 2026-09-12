> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassattachmentdescriptor/storeactionoptions](https://developer.apple.com/documentation/metal/mtlrenderpassattachmentdescriptor/storeactionoptions)

# storeActionOptions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The options that modify the store action performed by this attachment.

> Store action options have no effect on Apple Silicon

## Declaration

```swift
var storeActionOptions: MTLStoreActionOptions { get set }
```

## Mentioned In

- [Storing data a pass makes with custom sample positions for a subsequent pass](../storing-data-a-pass-makes-with-custom-sample-positions-for-a-subsequent-pass.md)

<a id="discussion"></a>

## Discussion

This property specifies additional behavior for the store action specified by the [storeAction](storeaction.md) property.

The default value is [MTLStoreActionOptionNone](../mtlstoreactionoptions/mtlstoreactionoptionnone.md).

## See Also

### Specifying rendering pass actions

- [loadAction](loadaction.md): The action performed by this attachment at the start of a rendering pass for a render command encoder.
- [storeAction](storeaction.md): The action performed by this attachment at the end of a rendering pass for a render command encoder.

# storeActionOptions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The options that modify the store action performed by this attachment.

> Store action options have no effect on Apple Silicon

## Declaration

```objectivec
@property (nonatomic) MTLStoreActionOptions storeActionOptions;
```

## Mentioned In

- [Storing data a pass makes with custom sample positions for a subsequent pass](../storing-data-a-pass-makes-with-custom-sample-positions-for-a-subsequent-pass.md)

<a id="discussion"></a>

## Discussion

This property specifies additional behavior for the store action specified by the [storeAction](storeaction.md) property.

The default value is [MTLStoreActionOptionNone](../mtlstoreactionoptions/mtlstoreactionoptionnone.md).

## See Also

### Specifying rendering pass actions

- [loadAction](loadaction.md): The action performed by this attachment at the start of a rendering pass for a render command encoder.
- [storeAction](storeaction.md): The action performed by this attachment at the end of a rendering pass for a render command encoder.
