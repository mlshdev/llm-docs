> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/ivar_getoffset(_:)](https://developer.apple.com/documentation/objectivec/ivar_getoffset(_:))

# ivar_getOffset(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the offset of an instance variable.

## Declaration

```swift
func ivar_getOffset(_ v: Ivar) -> Int
```

<a id="Discussion"></a>

## Discussion

For instance variables of type `id` or other object types, call [object_getIvar(\_:\_:)](object_getivar%28____%29.md) and [object_setIvar(\_:\_:\_:)](object_setivar%28______%29.md) instead of using this offset to access the instance variable data directly.

## See Also

### Working with Instance Variables

- [ivar_getName(\_:)](ivar_getname%28__%29.md): Returns the name of an instance variable.
- [ivar_getTypeEncoding(\_:)](ivar_gettypeencoding%28__%29.md): Returns the type string of an instance variable.

# ivar_getOffset (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the offset of an instance variable.

## Declaration

```objectivec
extern ptrdiff_t ivar_getOffset(Ivar v);
```

<a id="Discussion"></a>

## Discussion

For instance variables of type `id` or other object types, call [object_getIvar](object_getivar%28____%29.md) and [object_setIvar](object_setivar%28______%29.md) instead of using this offset to access the instance variable data directly.

## See Also

### Working with Instance Variables

- [ivar_getName](ivar_getname%28__%29.md): Returns the name of an instance variable.
- [ivar_getTypeEncoding](ivar_gettypeencoding%28__%29.md): Returns the type string of an instance variable.
