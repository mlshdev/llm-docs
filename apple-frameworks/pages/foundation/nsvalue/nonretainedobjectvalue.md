> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/nonretainedobjectvalue](https://developer.apple.com/documentation/foundation/nsvalue/nonretainedobjectvalue)

# nonretainedObjectValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value as a non-retained pointer to an object.

## Declaration

```swift
var nonretainedObjectValue: Any? { get }
```

<a id="Discussion"></a>

## Discussion

If the value was not created to hold a pointer-sized data item, the result is undefined.

## See Also

### Working with Pointer and Object Values

- [init(pointer:)](init%28pointer_%29.md): Creates a value object containing the specified pointer.
- [init(nonretainedObject:)](init%28nonretainedobject_%29.md): Creates a value object containing the specified object.
- [pointerValue](pointervalue.md): Returns the value as an untyped pointer.

# nonretainedObjectValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value as a non-retained pointer to an object.

## Declaration

```objectivec
@property (readonly, nullable) id nonretainedObjectValue;
```

<a id="Discussion"></a>

## Discussion

If the value was not created to hold a pointer-sized data item, the result is undefined.

## See Also

### Working with Pointer and Object Values

- [valueWithPointer:](init%28pointer_%29.md): Creates a value object containing the specified pointer.
- [valueWithNonretainedObject:](init%28nonretainedobject_%29.md): Creates a value object containing the specified object.
- [pointerValue](pointervalue.md): Returns the value as an untyped pointer.
