> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setobjectthreadgroupmemorylength(_:index:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setobjectthreadgroupmemorylength(_:index:))

# setObjectThreadgroupMemoryLength(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the size of a threadgroup memory buffer for a threadgroup argument in the object shader function.

## Declaration

```swift
func setObjectThreadgroupMemoryLength(_ length: Int, index: Int)
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes.
- `index`: An integer that corresponds to the index of the argument you annotate with attribute `[[threadgroup(index)]]` in the shader function.

## See Also

### Configuring persistent threadgroup memory

- [setThreadgroupMemoryLength(\_:offset:index:)](setthreadgroupmemorylength%28__offset_index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the fragment and tile shader functions.

# setObjectThreadgroupMemoryLength:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the size of a threadgroup memory buffer for a threadgroup argument in the object shader function.

## Declaration

```objectivec
- (void) setObjectThreadgroupMemoryLength:(NSUInteger) length atIndex:(NSUInteger) index;
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes.
- `index`: An integer that corresponds to the index of the argument you annotate with attribute `[[threadgroup(index)]]` in the shader function.

## See Also

### Configuring persistent threadgroup memory

- [setThreadgroupMemoryLength:offset:atIndex:](setthreadgroupmemorylength%28__offset_index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the fragment and tile shader functions.
