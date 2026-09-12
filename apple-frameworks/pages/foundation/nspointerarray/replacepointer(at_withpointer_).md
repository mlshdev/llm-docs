> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/replacepointer(at:withpointer:)](https://developer.apple.com/documentation/foundation/nspointerarray/replacepointer(at:withpointer:))

# replacePointer(at:withPointer:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the pointer at a given index.

## Declaration

```swift
func replacePointer(at index: Int, withPointer item: UnsafeMutableRawPointer?)
```

## Parameters

- `index`: The index of an element in the receiver. This value must be less than the [count](count.md) of the receiver.
- `item`: The item with which to replace the element at `index`. This value may be `NULL`.

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [allObjects](allobjects.md): All the objects in the receiver.
- [pointer(at:)](pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer(\_:)](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointer(at:)](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer(\_:at:)](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [compact()](compact%28%29.md): Removes `NULL` values from the receiver.

# replacePointerAtIndex:withPointer: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the pointer at a given index.

## Declaration

```objectivec
- (void) replacePointerAtIndex:(NSUInteger) index withPointer:(void *) item;
```

## Parameters

- `index`: The index of an element in the receiver. This value must be less than the [count](count.md) of the receiver.
- `item`: The item with which to replace the element at `index`. This value may be `NULL`.

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [allObjects](allobjects.md): All the objects in the receiver.
- [pointerAtIndex:](pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer:](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointerAtIndex:](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer:atIndex:](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [compact](compact%28%29.md): Removes `NULL` values from the receiver.
