> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcopytypeiddescription(_:)](https://developer.apple.com/documentation/corefoundation/cfcopytypeiddescription(_:))

# CFCopyTypeIDDescription(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.

## Declaration

```swift
func CFCopyTypeIDDescription(_ type_id: CFTypeID) -> CFString!
```

## Parameters

- `type_id`: An integer of type [CFTypeID](cftypeid.md) that uniquely identifies a Core Foundation opaque type.

<a id="return-value"></a>

## Return Value

A string containing a type description. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You can use this function for debugging Core Foundation objects in your code. Note, however, that the description for a given object may be different in different releases of the operating system. Do *not*  create dependencies in your code on the content or format of the information returned by this function.

## See Also

### Miscellaneous Functions

- [CFCopyDescription(\_:)](cfcopydescription%28__%29.md): Returns a textual description of a Core Foundation object.
- [CFGetTypeID(\_:)](cfgettypeid%28__%29.md): Returns the unique identifier of an opaque type to which a Core Foundation object belongs.
- [CFShow(\_:)](cfshow%28__%29.md): Prints a description of a Core Foundation object to stderr.

# CFCopyTypeIDDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.

## Declaration

```objectivec
extern CFStringRefCFCopyTypeIDDescription(CFTypeID type_id);
```

## Parameters

- `type_id`: An integer of type [CFTypeID](cftypeid.md) that uniquely identifies a Core Foundation opaque type.

<a id="return-value"></a>

## Return Value

A string containing a type description. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You can use this function for debugging Core Foundation objects in your code. Note, however, that the description for a given object may be different in different releases of the operating system. Do *not*  create dependencies in your code on the content or format of the information returned by this function.

## See Also

### Miscellaneous Functions

- [CFCopyDescription](cfcopydescription%28__%29.md): Returns a textual description of a Core Foundation object.
- [CFGetTypeID](cfgettypeid%28__%29.md): Returns the unique identifier of an opaque type to which a Core Foundation object belongs.
- [CFShow](cfshow%28__%29.md): Prints a description of a Core Foundation object to stderr.
