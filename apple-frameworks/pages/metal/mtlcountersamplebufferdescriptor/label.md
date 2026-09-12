> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebufferdescriptor/label](https://developer.apple.com/documentation/metal/mtlcountersamplebufferdescriptor/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The name for the counter sample buffer you create with the descriptor.

## Declaration

```swift
var label: String { get set }
```

## See Also

### Configuring a descriptor for a counter sample buffer

- [counterSet](counterset.md): A GPU device’s counter set instance that you want to sample.
- [sampleCount](samplecount.md): The number of instances of a counter set’s data that a counter sample buffer can store.
- [storageMode](storagemode.md): The memory storage mode for the counter sample buffers you create with the descriptor.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The name for the counter sample buffer you create with the descriptor.

## Declaration

```objectivec
@property (copy, readwrite) NSString * label;
```

## See Also

### Configuring a descriptor for a counter sample buffer

- [counterSet](counterset.md): A GPU device’s counter set instance that you want to sample.
- [sampleCount](samplecount.md): The number of instances of a counter set’s data that a counter sample buffer can store.
- [storageMode](storagemode.md): The memory storage mode for the counter sample buffers you create with the descriptor.
