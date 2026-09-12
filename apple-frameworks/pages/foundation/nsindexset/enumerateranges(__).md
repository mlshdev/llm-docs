> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/enumerateranges(_:)](https://developer.apple.com/documentation/foundation/nsindexset/enumerateranges(_:))

# enumerateRanges(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given block using each object in the index set, in the specified ranges.

## Declaration

```swift
func enumerateRanges(_ block: (NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `block`: The block to apply to elements in the index set.

  The block takes two arguments:

  - **range**: The range of objects of the elements in the index set.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the array. The stop argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the Block.

<a id="Discussion"></a>

## Discussion

If the Block parameter is `nil` this method will raise an exception.

This method executes synchronously.

## See Also

### Enumerating Index Set Content

- [enumerateRanges(in:options:using:)](enumerateranges%28in_options_using_%29.md): Enumerates over the ranges in the range of objects using the block
- [enumerateRanges(options:using:)](enumerateranges%28options_using_%29.md): Executes a given block using each object in the index set, in the specified ranges.

# enumerateRangesUsingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given block using each object in the index set, in the specified ranges.

## Declaration

```objectivec
- (void) enumerateRangesUsingBlock:(void (^)(NSRange range, BOOL *stop)) block;
```

## Parameters

- `block`: The block to apply to elements in the index set.

  The block takes two arguments:

  - **range**: The range of objects of the elements in the index set.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the array. The stop argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the Block.

<a id="Discussion"></a>

## Discussion

If the Block parameter is `nil` this method will raise an exception.

This method executes synchronously.

## See Also

### Enumerating Index Set Content

- [enumerateRangesInRange:options:usingBlock:](enumerateranges%28in_options_using_%29.md): Enumerates over the ranges in the range of objects using the block
- [enumerateRangesWithOptions:usingBlock:](enumerateranges%28options_using_%29.md): Executes a given block using each object in the index set, in the specified ranges.
