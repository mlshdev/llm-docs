> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setthreadgroupmemorylength(_:offset:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setthreadgroupmemorylength(_:offset:index:))

# setThreadgroupMemoryLength(\_:offset:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Configures the size of a threadgroup memory buffer for an entry in the fragment or tile shader argument table.

## Declaration

```swift
func setThreadgroupMemoryLength(_ length: Int, offset: Int, index: Int)
```

## Parameters

- `length`: The threadgroup memory length, in bytes.
- `offset`: An integer that represents the location, in bytes, from the start of the buffer at `index` where the threadgroup memory begins.
- `index`: An integer that represents an entry in the buffer argument table.

<a id="discussion"></a>

## Discussion

You can only change the threadgroup memory’s size between tile dispatches (see [dispatchThreadsPerTile(\_:)](dispatchthreadspertile%28__%29.md)).

> **Important**

>  Exceeding the threadgroup memory allocation for the render pass can trigger a debug error.

## See Also

### Configuring persistent threadgroup memory

- [setObjectThreadgroupMemoryLength(\_:index:)](setobjectthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for an entry in the object argument table.

# setThreadgroupMemoryLength:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Configures the size of a threadgroup memory buffer for an entry in the fragment or tile shader argument table.

## Declaration

```objectivec
- (void) setThreadgroupMemoryLength:(NSUInteger) length offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `length`: The threadgroup memory length, in bytes.
- `offset`: An integer that represents the location, in bytes, from the start of the buffer at `index` where the threadgroup memory begins.
- `index`: An integer that represents an entry in the buffer argument table.

<a id="discussion"></a>

## Discussion

You can only change the threadgroup memory’s size between tile dispatches (see [dispatchThreadsPerTile:](dispatchthreadspertile%28__%29.md)).

> **Important**

>  Exceeding the threadgroup memory allocation for the render pass can trigger a debug error.

## See Also

### Configuring persistent threadgroup memory

- [setObjectThreadgroupMemoryLength:atIndex:](setobjectthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for an entry in the object argument table.
