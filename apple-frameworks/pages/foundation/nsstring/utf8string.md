> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/utf8string](https://developer.apple.com/documentation/foundation/nsstring/utf8string)

# utf8String (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A null-terminated UTF8 representation of the string.

## Declaration

```swift
var utf8String: UnsafePointer<CChar>? { get }
```

<a id="Discussion"></a>

## Discussion

This C string is a pointer to a structure inside the string object, which may have a lifetime shorter than the string object and will certainly not have a longer lifetime. Therefore, you should copy the C string if it needs to be stored outside of the memory context in which you use this property.

## See Also

### Getting C Strings

- [cString(using:)](cstring%28using_%29.md): Returns a representation of the string as a C string using a given encoding.
- [getCString(\_:maxLength:encoding:)](getcstring%28__maxlength_encoding_%29.md): Converts the string to a given encoding and stores it in a buffer.

# UTF8String (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A null-terminated UTF8 representation of the string.

## Declaration

```objectivec
@property (readonly, nullable) const char * UTF8String;
```

<a id="Discussion"></a>

## Discussion

This C string is a pointer to a structure inside the string object, which may have a lifetime shorter than the string object and will certainly not have a longer lifetime. Therefore, you should copy the C string if it needs to be stored outside of the memory context in which you use this property.

## See Also

### Getting C Strings

- [cStringUsingEncoding:](cstring%28using_%29.md): Returns a representation of the string as a C string using a given encoding.
- [getCString:maxLength:encoding:](getcstring%28__maxlength_encoding_%29.md): Converts the string to a given encoding and stores it in a buffer.
