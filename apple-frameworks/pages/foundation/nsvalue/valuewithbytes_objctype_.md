> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/valuewithbytes:objctype:](https://developer.apple.com/documentation/foundation/nsvalue/valuewithbytes:objctype:)

# valueWithBytes:objCType:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value object containing the specified value, interpreted with the specified Objective-C type.

## Declaration

```objectivec
+ (NSValue *) valueWithBytes:(const void *) value objCType:(const char *) type;
```

## Parameters

- `value`: A pointer to data to be stored in the new value object.
- `type`: The Objective-C type of `value`, as provided by the `@encode()` compiler directive. Do not hard-code this parameter as a C string.

<a id="return-value"></a>

## Return Value

A new value object that contains `value`, which is interpreted as being of the Objective-C type `type`.

<a id="Discussion"></a>

## Discussion

See [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i) for other considerations in creating a value object and code examples.

## See Also

### Working with Raw Values

- [initWithBytes:objCType:](init%28bytes_objctype_%29.md): Initializes a value object to contain the specified value, interpreted with the specified Objective-C type.
- [value:withObjCType:](init%28__withobjctype_%29.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [getValue:](getvalue%28__%29.md): Deprecated. Copies the value into the specified buffer.
- [objCType](objctype.md): A C string containing the Objective-C type of the data contained in the value object.
