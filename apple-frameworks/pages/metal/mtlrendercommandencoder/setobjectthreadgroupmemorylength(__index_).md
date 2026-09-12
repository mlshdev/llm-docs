> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setobjectthreadgroupmemorylength(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setobjectthreadgroupmemorylength(_:index:))

# setObjectThreadgroupMemoryLength(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Configures the size of a threadgroup memory buffer for an entry in the object argument table.

## Declaration

```swift
func setObjectThreadgroupMemoryLength(_ length: Int, index: Int)
```

## Parameters

- `length`: The threadgroup memory length, in bytes.
- `index`: An integer that represents an entry in the object argument table.

## See Also

### Configuring persistent threadgroup memory

- [setThreadgroupMemoryLength(\_:offset:index:)](setthreadgroupmemorylength%28__offset_index_%29.md): Configures the size of a threadgroup memory buffer for an entry in the fragment or tile shader argument table.

# setObjectThreadgroupMemoryLength:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Configures the size of a threadgroup memory buffer for an entry in the object argument table.

## Declaration

```objectivec
- (void) setObjectThreadgroupMemoryLength:(NSUInteger) length atIndex:(NSUInteger) index;
```

## Parameters

- `length`: The threadgroup memory length, in bytes.
- `index`: An integer that represents an entry in the object argument table.

## See Also

### Configuring persistent threadgroup memory

- [setThreadgroupMemoryLength:offset:atIndex:](setthreadgroupmemorylength%28__offset_index_%29.md): Configures the size of a threadgroup memory buffer for an entry in the fragment or tile shader argument table.
