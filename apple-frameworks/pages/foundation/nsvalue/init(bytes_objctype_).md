> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(bytes:objctype:)](https://developer.apple.com/documentation/foundation/nsvalue/init(bytes:objctype:))

# init(bytes:objCType:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a value object to contain the specified value, interpreted with the specified Objective-C type.

## Declaration

```swift
init(bytes value: UnsafeRawPointer, objCType type: UnsafePointer<CChar>)
```

## Parameters

- `value`: A pointer to data to be stored in the new value object.
- `type`: The Objective-C type of `value`, as provided by the `@encode()` compiler directive. Do not hard-code this parameter as a C string.

<a id="return-value"></a>

## Return Value

An initialized value object that contains `value`, which is interpreted as being of the Objective-C type `type`. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

See [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i) for other considerations in creating a value object.

This is the designated initializer for the [NSValue](../nsvalue.md) class.

## See Also

### Related Documentation

- [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i)

### Working with Raw Values

- [init(\_:withObjCType:)](init%28__withobjctype_%29.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [getValue(\_:)](getvalue%28__%29.md): Deprecated. Copies the value into the specified buffer.
- [objCType](objctype.md): A C string containing the Objective-C type of the data contained in the value object.

# initWithBytes:objCType: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a value object to contain the specified value, interpreted with the specified Objective-C type.

## Declaration

```objectivec
- (instancetype) initWithBytes:(const void *) value objCType:(const char *) type;
```

## Parameters

- `value`: A pointer to data to be stored in the new value object.
- `type`: The Objective-C type of `value`, as provided by the `@encode()` compiler directive. Do not hard-code this parameter as a C string.

<a id="return-value"></a>

## Return Value

An initialized value object that contains `value`, which is interpreted as being of the Objective-C type `type`. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

See [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i) for other considerations in creating a value object.

This is the designated initializer for the [NSValue](../nsvalue.md) class.

## See Also

### Related Documentation

- [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i)

### Working with Raw Values

- [valueWithBytes:objCType:](valuewithbytes_objctype_.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [value:withObjCType:](init%28__withobjctype_%29.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [getValue:](getvalue%28__%29.md): Deprecated. Copies the value into the specified buffer.
- [objCType](objctype.md): A C string containing the Objective-C type of the data contained in the value object.
