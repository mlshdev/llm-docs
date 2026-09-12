> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4argumenttable/setresource(_:bufferindex:)](https://developer.apple.com/documentation/metal/mtl4argumenttable/setresource(_:bufferindex:))

# setResource(\_:bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Binds a resource to a buffer binding slot.

## Declaration

```swift
func setResource(_ resourceID: MTLResourceID, bufferIndex bindingIndex: Int)
```

## Parameters

- `resourceID`: The [MTLResourceID](../mtlresourceid.md) of the Metal resource to bind.
- `bindingIndex`: A valid binding index in the buffer binding range. It is an error for this value to match or exceed the value of property [maxBufferBindCount](../mtl4argumenttabledescriptor/maxbufferbindcount.md) on the descriptor from which you created this argument table.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

# setResource:atBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Binds a resource to a buffer binding slot.

## Declaration

```objectivec
- (void) setResource:(MTLResourceID) resourceID atBufferIndex:(NSUInteger) bindingIndex;
```

## Parameters

- `resourceID`: The [MTLResourceID](../mtlresourceid.md) of the Metal resource to bind.
- `bindingIndex`: A valid binding index in the buffer binding range. It is an error for this value to match or exceed the value of property [maxBufferBindCount](../mtl4argumenttabledescriptor/maxbufferbindcount.md) on the descriptor from which you created this argument table.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)
