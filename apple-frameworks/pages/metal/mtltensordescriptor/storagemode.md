> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensordescriptor/storagemode](https://developer.apple.com/documentation/metal/mtltensordescriptor/storagemode)

# storageMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A value that configures the memory location and access permissions of tensors you create with this descriptor.

## Declaration

```swift
var storageMode: MTLStorageMode { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLStorageMode.shared](../mtlstoragemode/shared.md).

# storageMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A value that configures the memory location and access permissions of tensors you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLStorageMode storageMode;
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLStorageModeShared](../mtlstoragemode/shared.md).
