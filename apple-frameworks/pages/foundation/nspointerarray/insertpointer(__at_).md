> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/insertpointer(_:at:)](https://developer.apple.com/documentation/foundation/nspointerarray/insertpointer(_:at:))

# insertPointer(\_:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts a pointer at a given index.

## Declaration

```swift
func insertPointer(_ item: UnsafeMutableRawPointer?, at index: Int)
```

## Parameters

- `item`: The pointer to add.
- `index`: The index of an element in the receiver. This value must be less than the [count](count.md) of the receiver.

<a id="Discussion"></a>

## Discussion

Elements at and above `index`, including `NULL` values, slide higher.

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [allObjects](allobjects.md): All the objects in the receiver.
- [pointer(at:)](pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer(\_:)](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointer(at:)](removepointer%28at_%29.md): Removes the pointer at a given index.
- [replacePointer(at:withPointer:)](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact()](compact%28%29.md): Removes `NULL` values from the receiver.

# insertPointer:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts a pointer at a given index.

## Declaration

```objectivec
- (void) insertPointer:(void *) item atIndex:(NSUInteger) index;
```

## Parameters

- `item`: The pointer to add.
- `index`: The index of an element in the receiver. This value must be less than the [count](count.md) of the receiver.

<a id="Discussion"></a>

## Discussion

Elements at and above `index`, including `NULL` values, slide higher.

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [allObjects](allobjects.md): All the objects in the receiver.
- [pointerAtIndex:](pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer:](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointerAtIndex:](removepointer%28at_%29.md): Removes the pointer at a given index.
- [replacePointerAtIndex:withPointer:](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact](compact%28%29.md): Removes `NULL` values from the receiver.
