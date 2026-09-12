> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/ivar_gettypeencoding(_:)](https://developer.apple.com/documentation/objectivec/ivar_gettypeencoding(_:))

# ivar_getTypeEncoding(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the type string of an instance variable.

## Declaration

```swift
func ivar_getTypeEncoding(_ v: Ivar) -> UnsafePointer<CChar>?
```

<a id="return-value"></a>

## Return Value

A C string containing the instance variable’s type encoding.

<a id="Discussion"></a>

## Discussion

For possible values, see [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008048) \> [Type Encodings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtTypeEncodings.html#//apple_ref/doc/uid/TP40008048-CH100).

## See Also

### Working with Instance Variables

- [ivar_getName(\_:)](ivar_getname%28__%29.md): Returns the name of an instance variable.
- [ivar_getOffset(\_:)](ivar_getoffset%28__%29.md): Returns the offset of an instance variable.

# ivar_getTypeEncoding (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the type string of an instance variable.

## Declaration

```objectivec
extern const char *ivar_getTypeEncoding(Ivar v);
```

<a id="return-value"></a>

## Return Value

A C string containing the instance variable’s type encoding.

<a id="Discussion"></a>

## Discussion

For possible values, see [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008048) \> [Type Encodings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtTypeEncodings.html#//apple_ref/doc/uid/TP40008048-CH100).

## See Also

### Working with Instance Variables

- [ivar_getName](ivar_getname%28__%29.md): Returns the name of an instance variable.
- [ivar_getOffset](ivar_getoffset%28__%29.md): Returns the offset of an instance variable.
