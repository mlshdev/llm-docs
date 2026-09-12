> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setthreadgroupmemorylength(_:offset:index:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setthreadgroupmemorylength(_:offset:index:))

# setThreadgroupMemoryLength(\_:offset:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the size of a threadgroup memory buffer for a threadgroup argument in the fragment and tile shader functions.

## Declaration

```swift
func setThreadgroupMemoryLength(_ length: Int, offset: Int, index: Int)
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes.
- `offset`: An integer that represents the location, in bytes, from the start of the threadgroup memory buffer at `index` where the threadgroup memory begins.
- `index`: An integer that corresponds to the index of the argument you annotate with attribute `[[threadgroup(index)]]` in the shader function.

## See Also

### Configuring persistent threadgroup memory

- [setObjectThreadgroupMemoryLength(\_:index:)](setobjectthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the object shader function.

# setThreadgroupMemoryLength:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the size of a threadgroup memory buffer for a threadgroup argument in the fragment and tile shader functions.

## Declaration

```objectivec
- (void) setThreadgroupMemoryLength:(NSUInteger) length offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes.
- `offset`: An integer that represents the location, in bytes, from the start of the threadgroup memory buffer at `index` where the threadgroup memory begins.
- `index`: An integer that corresponds to the index of the argument you annotate with attribute `[[threadgroup(index)]]` in the shader function.

## See Also

### Configuring persistent threadgroup memory

- [setObjectThreadgroupMemoryLength:atIndex:](setobjectthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the object shader function.
