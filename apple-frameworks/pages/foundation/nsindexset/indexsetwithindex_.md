> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/indexsetwithindex:](https://developer.apple.com/documentation/foundation/nsindexset/indexsetwithindex:)

# indexSetWithIndex:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an index set with an index.

## Declaration

```objectivec
+ (instancetype) indexSetWithIndex:(NSUInteger) value;
```

## Parameters

- `value`: An index. Must be in the range `0 .. NSNotFound - 1`.

<a id="return-value"></a>

## Return Value

[NSIndexSet](../nsindexset.md) object containing `index`.

## See Also

### Creating Index Sets

- [indexSet](indexset.md): Creates an empty index set.
- [indexSetWithIndexesInRange:](indexsetwithindexesinrange_.md): Creates an index set with an index range.
- [initWithIndex:](init%28index_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index.
- [initWithIndexesInRange:](init%28indexesin_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index range.
- [initWithIndexSet:](init%28indexset_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index set.
