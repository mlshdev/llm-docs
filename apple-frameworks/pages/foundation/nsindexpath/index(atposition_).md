> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/index(atposition:)](https://developer.apple.com/documentation/foundation/nsindexpath/index(atposition:))

# index(atPosition:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Provides the value at a particular node in the index path.

## Declaration

```swift
func index(atPosition position: Int) -> Int
```

## Parameters

- `position`: Index value of the desired node. Node numbering starts at zero.

<a id="return-value"></a>

## Return Value

The index value at `node` or `NSNotFound` if the node is outside the range of the index path.

## See Also

### Working with Indexes

- [getIndexes(\_:range:)](getindexes%28__range_%29.md): Copies the indexes stored in the index path from the positions specified by the position range into the specified indexes.
- [getIndexes(\_:)](getindexes%28__%29.md): Deprecated. Copies the objects contained in the index path into indexes.

# indexAtPosition: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Provides the value at a particular node in the index path.

## Declaration

```objectivec
- (NSUInteger) indexAtPosition:(NSUInteger) position;
```

## Parameters

- `position`: Index value of the desired node. Node numbering starts at zero.

<a id="return-value"></a>

## Return Value

The index value at `node` or `NSNotFound` if the node is outside the range of the index path.

## See Also

### Working with Indexes

- [getIndexes:range:](getindexes%28__range_%29.md): Copies the indexes stored in the index path from the positions specified by the position range into the specified indexes.
- [getIndexes:](getindexes%28__%29.md): Deprecated. Copies the objects contained in the index path into indexes.
