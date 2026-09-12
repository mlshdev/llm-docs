> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/allobjects](https://developer.apple.com/documentation/foundation/nspointerarray/allobjects)

# allObjects (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

All the objects in the receiver.

## Declaration

```swift
var allObjects: [Any] { get }
```

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [pointer(at:)](pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer(\_:)](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointer(at:)](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer(\_:at:)](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointer(at:withPointer:)](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact()](compact%28%29.md): Removes `NULL` values from the receiver.

# allObjects (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

All the objects in the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSArray * allObjects;
```

## See Also

### Managing the Collection

- [count](count.md): The number of elements in the receiver.
- [pointerAtIndex:](pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer:](addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointerAtIndex:](removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer:atIndex:](insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointerAtIndex:withPointer:](replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact](compact%28%29.md): Removes `NULL` values from the receiver.
