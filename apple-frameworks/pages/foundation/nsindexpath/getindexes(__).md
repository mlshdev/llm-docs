> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsindexpath/getindexes(_:)

# getIndexes(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.0+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Copies the objects contained in the index path into indexes.

> Use [getIndexes(\_:range:)](getindexes%28__range_%29.md) instead.

## Declaration

```swift
func getIndexes(_ indexes: UnsafeMutablePointer<Int>)
```

## Parameters

- `indexes`: Pointer to a C array of objects of size at least the length of the index path. On return, the index path’s indexes.

<a id="Discussion"></a>

## Discussion

You must allocate the memory for the C array.

## See Also

### Working with Indexes

- [index(atPosition:)](index%28atposition_%29.md): Provides the value at a particular node in the index path.
- [getIndexes(\_:range:)](getindexes%28__range_%29.md): Copies the indexes stored in the index path from the positions specified by the position range into the specified indexes.

# getIndexes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.0+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Copies the objects contained in the index path into indexes.

> Use [getIndexes:range:](getindexes%28__range_%29.md) instead.

## Declaration

```objectivec
- (void) getIndexes:(NSUInteger *) indexes;
```

## Parameters

- `indexes`: Pointer to a C array of objects of size at least the length of the index path. On return, the index path’s indexes.

<a id="Discussion"></a>

## Discussion

You must allocate the memory for the C array.

## See Also

### Working with Indexes

- [indexAtPosition:](index%28atposition_%29.md): Provides the value at a particular node in the index path.
- [getIndexes:range:](getindexes%28__range_%29.md): Copies the indexes stored in the index path from the positions specified by the position range into the specified indexes.
