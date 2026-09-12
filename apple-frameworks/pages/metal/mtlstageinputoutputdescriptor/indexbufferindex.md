> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstageinputoutputdescriptor/indexbufferindex](https://developer.apple.com/documentation/metal/mtlstageinputoutputdescriptor/indexbufferindex)

# indexBufferIndex (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The location of the index buffer for a compute function using indexed thread addressing.

## Declaration

```swift
var indexBufferIndex: Int { get set }
```

## See Also

### Declaring index buffers for indirect compute commands

- [indexType](indextype.md): The data type of the indices stored in the index buffer.

# indexBufferIndex (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The location of the index buffer for a compute function using indexed thread addressing.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger indexBufferIndex;
```

## See Also

### Declaring index buffers for indirect compute commands

- [indexType](indextype.md): The data type of the indices stored in the index buffer.
