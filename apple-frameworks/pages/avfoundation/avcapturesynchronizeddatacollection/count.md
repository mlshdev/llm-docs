> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizeddatacollection/count](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection/count)

# count (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The number of synchronized data objects in the collection.

## Declaration

```swift
var count: Int { get }
```

## See Also

### Accessing synchronized data

- [synchronizedData(for:)](synchronizeddata%28for_%29.md): Returns synchronized data captured by the specified capture output.
- [subscript(\_:)](subscript%28__%29.md): Returns data captured by the specified capture output, using subscript syntax.

# count (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The number of synchronized data objects in the collection.

## Declaration

```objectivec
@property (readonly) NSUInteger count;
```

## See Also

### Accessing synchronized data

- [synchronizedDataForCaptureOutput:](synchronizeddata%28for_%29.md): Returns synchronized data captured by the specified capture output.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns data captured by the specified capture output, using subscript syntax.
