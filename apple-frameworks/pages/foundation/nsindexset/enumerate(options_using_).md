> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/enumerate(options:using:)](https://developer.apple.com/documentation/foundation/nsindexset/enumerate(options:using:))

# enumerate(options:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given Block over the index set’s indexes, using the specified enumeration options.

## Declaration

```swift
func enumerate(options opts: NSEnumerationOptions = [], using block: (Int, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `opts`: A bitmask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order). See [NSEnumerationOptions](../nsenumerationoptions.md) for the supported values.
- `block`: The Block to apply to elements in the set.

  The Block takes two arguments:

  - **idx**: The index of the object.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to YES within the Block.

<a id="Discussion"></a>

## Discussion

This method executes synchronously.

## See Also

### Enumerating Indexes

- [enumerate(\_:)](enumerate%28__%29.md): Executes a given Block using each object in the index set.
- [enumerate(in:options:using:)](enumerate%28in_options_using_%29.md): Executes a given Block using the indexes in the specified range, using the specified enumeration options.
- [makeIterator()](makeiterator%28%29.md): Returns an *iterator* over the elements of this *sequence*.
- [NSIndexSetIterator](../nsindexsetiterator.md): An iterator suitable for enumerating the elements of an index set.

# enumerateIndexesWithOptions:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given Block over the index set’s indexes, using the specified enumeration options.

## Declaration

```objectivec
- (void) enumerateIndexesWithOptions:(NSEnumerationOptions) opts usingBlock:(void (^)(NSUInteger idx, BOOL *stop)) block;
```

## Parameters

- `opts`: A bitmask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order). See [NSEnumerationOptions](../nsenumerationoptions.md) for the supported values.
- `block`: The Block to apply to elements in the set.

  The Block takes two arguments:

  - **idx**: The index of the object.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to YES within the Block.

<a id="Discussion"></a>

## Discussion

This method executes synchronously.

## See Also

### Enumerating Indexes

- [enumerateIndexesUsingBlock:](enumerate%28__%29.md): Executes a given Block using each object in the index set.
- [enumerateIndexesInRange:options:usingBlock:](enumerate%28in_options_using_%29.md): Executes a given Block using the indexes in the specified range, using the specified enumeration options.
