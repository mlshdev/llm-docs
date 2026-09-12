> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/addpointer(_:)](https://developer.apple.com/documentation/foundation/nspointerarray/addpointer(_:))

# addPointer(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given pointer to the receiver.

## Declaration

```swift
func addPointer(_ pointer: UnsafeMutableRawPointer?)
```

## Parameters

- `pointer`: The pointer to add. This value may be `NULL`.

<a id="Discussion"></a>

## Discussion

`pointer` is added at index [count](count.md).

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [allObjects](allobjects.md): All the objects in the receiver.
- [pointer(at:)](pointer%28at_%29.md): Returns the pointer at a given index.
- [removePointer(at:)](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer(\_:at:)](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointer(at:withPointer:)](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact()](compact%28%29.md): Removes `NULL` values from the receiver.

# addPointer: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given pointer to the receiver.

## Declaration

```objectivec
- (void) addPointer:(void *) pointer;
```

## Parameters

- `pointer`: The pointer to add. This value may be `NULL`.

<a id="Discussion"></a>

## Discussion

`pointer` is added at index [count](count.md).

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [allObjects](allobjects.md): All the objects in the receiver.
- [pointerAtIndex:](pointer%28at_%29.md): Returns the pointer at a given index.
- [removePointerAtIndex:](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer:atIndex:](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointerAtIndex:withPointer:](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact](compact%28%29.md): Removes `NULL` values from the receiver.
