> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableindexset/add(in:)](https://developer.apple.com/documentation/foundation/nsmutableindexset/add(in:))

# add(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the indexes in an index range to the receiver.

## Declaration

```swift
func add(in range: NSRange)
```

## Parameters

- `range`: Index range to add. Must be in the range `0 .. NSNotFound - 1`.

<a id="Discussion"></a>

## Discussion

This method raises an [rangeException](../nsexceptionname/rangeexception.md) when `range` would add an index that exceeds the maximum allowed value for unsigned integers.

## See Also

### Adding Indexes

- [add(\_:)](add%28__%29-6dtkj.md): Adds an index to the receiver.
- [add(\_:)](add%28__%29-6zmti.md): Adds the indexes in an index set to the receiver.

# addIndexesInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the indexes in an index range to the receiver.

## Declaration

```objectivec
- (void) addIndexesInRange:(NSRange) range;
```

## Parameters

- `range`: Index range to add. Must be in the range `0 .. NSNotFound - 1`.

<a id="Discussion"></a>

## Discussion

This method raises an [NSRangeException](../nsexceptionname/rangeexception.md) when `range` would add an index that exceeds the maximum allowed value for unsigned integers.

## See Also

### Adding Indexes

- [addIndex:](add%28__%29-6dtkj.md): Adds an index to the receiver.
- [addIndexes:](add%28__%29-6zmti.md): Adds the indexes in an index set to the receiver.
