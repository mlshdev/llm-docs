> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4counterheapdescriptor/count](https://developer.apple.com/documentation/metal/mtl4counterheapdescriptor/count)

# count (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns the number of entries in the heap.

## Declaration

```swift
var count: Int { get set }
```

<a id="discussion"></a>

## Discussion

Each entry represents one item in the heap. The size of the individual entries depends on the heap type.

# count (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns the number of entries in the heap.

## Declaration

```objectivec
@property (nonatomic) NSUInteger count;
```

<a id="discussion"></a>

## Discussion

Each entry represents one item in the heap. The size of the individual entries depends on the heap type.
