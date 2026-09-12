> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/openmodes](https://developer.apple.com/documentation/fskit/fsvolume/openmodes)

# FSVolume.OpenModes (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

Defined modes for opening a file.

## Declaration

```swift
struct OpenModes
```

## Topics

### Declaring open modes

- [read](openmodes/read.md): The read mode.
- [write](openmodes/write.md): The write mode.

### Working with raw values

- [init(rawValue:)](openmodes/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Opening and closing

- [openItem(\_:modes:context:replyHandler:)](openclosehandler/openitem%28__modes_context_replyhandler_%29.md): Opens a file for access.
- [closeItem(\_:modes:context:replyHandler:)](openclosehandler/closeitem%28__modes_context_replyhandler_%29.md): Closes a file from further access.
- [FSContext](../fscontext.md): A context object that provides information about the initiator of a file system operation.

# FSVolumeOpenModes (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Defined modes for opening a file.

## Declaration

```objectivec
enum FSVolumeOpenModes : NSUInteger;
```

## Topics

### Declaring open modes

- [FSVolumeOpenModesRead](openmodes/read.md): The read mode.
- [FSVolumeOpenModesWrite](openmodes/write.md): The write mode.

## See Also

### Opening and closing

- [openItem:withModes:context:replyHandler:](openclosehandler/openitem%28__modes_context_replyhandler_%29.md): Opens a file for access.
- [closeItem:keepingModes:context:replyHandler:](openclosehandler/closeitem%28__modes_context_replyhandler_%29.md): Closes a file from further access.
- [FSContext](../fscontext.md): A context object that provides information about the initiator of a file system operation.
