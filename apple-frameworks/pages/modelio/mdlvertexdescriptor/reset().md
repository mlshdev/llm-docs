> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlvertexdescriptor/reset()

# reset() (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Resets a vertex descriptor to its default state.

## Declaration

```swift
func reset()
```

<a id="Discussion"></a>

## Discussion

Calling this method returns the descriptor to its original state, as is produced when initializing a vertex descriptor with the inherited [init()](../../objectivec/nsobject-swift.class/init%28%29.md) method. After calling this method, the descriptor contains a single empty [MDLVertexAttribute](../mdlvertexattribute.md) object and a single empty [MDLVertexBufferLayout](../mdlvertexbufferlayout.md) object.

# reset (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Resets a vertex descriptor to its default state.

## Declaration

```objectivec
- (void) reset;
```

<a id="Discussion"></a>

## Discussion

Calling this method returns the descriptor to its original state, as is produced when initializing a vertex descriptor with the inherited [init](../../objectivec/nsobject-swift.class/init%28%29.md) method. After calling this method, the descriptor contains a single empty [MDLVertexAttribute](../mdlvertexattribute.md) object and a single empty [MDLVertexBufferLayout](../mdlvertexbufferlayout.md) object.
