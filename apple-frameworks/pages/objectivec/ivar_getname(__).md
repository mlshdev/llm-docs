> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/ivar_getname(_:)](https://developer.apple.com/documentation/objectivec/ivar_getname(_:))

# ivar_getName(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the name of an instance variable.

## Declaration

```swift
func ivar_getName(_ v: Ivar) -> UnsafePointer<CChar>?
```

<a id="return-value"></a>

## Return Value

A C string containing the instance variable’s name.

## See Also

### Working with Instance Variables

- [ivar_getTypeEncoding(\_:)](ivar_gettypeencoding%28__%29.md): Returns the type string of an instance variable.
- [ivar_getOffset(\_:)](ivar_getoffset%28__%29.md): Returns the offset of an instance variable.

# ivar_getName (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the name of an instance variable.

## Declaration

```objectivec
extern const char *ivar_getName(Ivar v);
```

<a id="return-value"></a>

## Return Value

A C string containing the instance variable’s name.

## See Also

### Working with Instance Variables

- [ivar_getTypeEncoding](ivar_gettypeencoding%28__%29.md): Returns the type string of an instance variable.
- [ivar_getOffset](ivar_getoffset%28__%29.md): Returns the offset of an instance variable.
