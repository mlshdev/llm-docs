> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/count](https://developer.apple.com/documentation/foundation/nspointerarray/count)

# count (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of elements in the receiver.

## Declaration

```swift
var count: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If you increase the `count`, `NULL` values are added. If you decrease the `count`, elements at indexes `count` and greater are removed.

## See Also

### Managing the Collection

- [allObjects](allobjects.md): All the objects in the receiver.
- [pointer(at:)](pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer(\_:)](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointer(at:)](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer(\_:at:)](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointer(at:withPointer:)](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact()](compact%28%29.md): Removes `NULL` values from the receiver.

# count (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of elements in the receiver.

## Declaration

```objectivec
@property NSUInteger count;
```

<a id="Discussion"></a>

## Discussion

If you increase the `count`, `NULL` values are added. If you decrease the `count`, elements at indexes `count` and greater are removed.

## See Also

### Managing the Collection

- [allObjects](allobjects.md): All the objects in the receiver.
- [pointerAtIndex:](pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer:](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointerAtIndex:](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer:atIndex:](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointerAtIndex:withPointer:](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact](compact%28%29.md): Removes `NULL` values from the receiver.
