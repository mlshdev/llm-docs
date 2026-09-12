> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/pointer(at:)](https://developer.apple.com/documentation/foundation/nspointerarray/pointer(at:))

# pointer(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the pointer at a given index.

## Declaration

```swift
func pointer(at index: Int) -> UnsafeMutableRawPointer?
```

## Parameters

- `index`: The index of an element in the receiver. This value must be less than the [count](count.md) of the receiver.

<a id="return-value"></a>

## Return Value

The pointer at `index`.

<a id="Discussion"></a>

## Discussion

The returned value may be `NULL`.

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [allObjects](allobjects.md): All the objects in the receiver.
- [addPointer(\_:)](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointer(at:)](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer(\_:at:)](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointer(at:withPointer:)](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact()](compact%28%29.md): Removes `NULL` values from the receiver.

# pointerAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the pointer at a given index.

## Declaration

```objectivec
- (void *) pointerAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of an element in the receiver. This value must be less than the [count](count.md) of the receiver.

<a id="return-value"></a>

## Return Value

The pointer at `index`.

<a id="Discussion"></a>

## Discussion

The returned value may be `NULL`.

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [allObjects](allobjects.md): All the objects in the receiver.
- [addPointer:](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointerAtIndex:](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer:atIndex:](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointerAtIndex:withPointer:](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact](compact%28%29.md): Removes `NULL` values from the receiver.
