> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargument/threadgroupmemorydatasize](https://developer.apple.com/documentation/metal/mtlargument/threadgroupmemorydatasize)

# threadgroupMemoryDataSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The size, in bytes, of the threadgroup data.

## Declaration

```swift
var threadgroupMemoryDataSize: Int { get }
```

<a id="discussion"></a>

## Discussion

If the argument is not a threadgroup, querying this property is a fatal error. The Metal device determines this value.

## See Also

### Describing a threadgroup memory argument

- [threadgroupMemoryAlignment](threadgroupmemoryalignment.md): Deprecated. The required byte alignment in memory for the threadgroup data.

# threadgroupMemoryDataSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The size, in bytes, of the threadgroup data.

## Declaration

```objectivec
@property (readonly) NSUInteger threadgroupMemoryDataSize;
```

<a id="discussion"></a>

## Discussion

If the argument is not a threadgroup, querying this property is a fatal error. The Metal device determines this value.

## See Also

### Describing a threadgroup memory argument

- [threadgroupMemoryAlignment](threadgroupmemoryalignment.md): Deprecated. The required byte alignment in memory for the threadgroup data.
