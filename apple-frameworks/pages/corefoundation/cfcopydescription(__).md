> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcopydescription(_:)](https://developer.apple.com/documentation/corefoundation/cfcopydescription(_:))

# CFCopyDescription(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a textual description of a Core Foundation object.

## Declaration

```swift
func CFCopyDescription(_ cf: CFTypeRef!) -> CFString!
```

## Parameters

- `cf`: The CFType object (a generic reference of type [CFTypeRef](cftyperef.md)) from which to derive a description.

<a id="return-value"></a>

## Return Value

A string that contains a description of `cf`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The nature of the description differs by object. For example, a description of a CFArray object would include descriptions of each of the elements in the collection.

You can use this function for debugging Core Foundation objects in your code. Note, however, that the description for a given object may be different in different releases of the operating system. Do *not*  create dependencies in your code on the content or format of the information returned by this function.

## See Also

### Miscellaneous Functions

- [CFCopyTypeIDDescription(\_:)](cfcopytypeiddescription%28__%29.md): Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.
- [CFGetTypeID(\_:)](cfgettypeid%28__%29.md): Returns the unique identifier of an opaque type to which a Core Foundation object belongs.
- [CFShow(\_:)](cfshow%28__%29.md): Prints a description of a Core Foundation object to stderr.

# CFCopyDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a textual description of a Core Foundation object.

## Declaration

```objectivec
extern CFStringRefCFCopyDescription(CFTypeRef cf);
```

## Parameters

- `cf`: The CFType object (a generic reference of type [CFTypeRef](cftyperef.md)) from which to derive a description.

<a id="return-value"></a>

## Return Value

A string that contains a description of `cf`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The nature of the description differs by object. For example, a description of a CFArray object would include descriptions of each of the elements in the collection.

You can use this function for debugging Core Foundation objects in your code. Note, however, that the description for a given object may be different in different releases of the operating system. Do *not*  create dependencies in your code on the content or format of the information returned by this function.

## See Also

### Miscellaneous Functions

- [CFCopyTypeIDDescription](cfcopytypeiddescription%28__%29.md): Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.
- [CFGetTypeID](cfgettypeid%28__%29.md): Returns the unique identifier of an opaque type to which a Core Foundation object belongs.
- [CFShow](cfshow%28__%29.md): Prints a description of a Core Foundation object to stderr.
