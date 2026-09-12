> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfgettypeid(_:)](https://developer.apple.com/documentation/corefoundation/cfgettypeid(_:))

# CFGetTypeID(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the unique identifier of an opaque type to which a Core Foundation object belongs.

## Declaration

```swift
func CFGetTypeID(_ cf: CFTypeRef!) -> CFTypeID
```

## Parameters

- `cf`: The CFType object to examine.

<a id="return-value"></a>

## Return Value

A value of type [CFTypeID](cftypeid.md) that identifies the opaque type of `cf`.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of any Core Foundation object. You can compare this value with the known [CFTypeID](cftypeid.md) identifier obtained with a “GetTypeID” function specific to a type, for example [CFDateGetTypeID()](cfdategettypeid%28%29.md). These values might change from release to release or platform to platform.

## See Also

### Miscellaneous Functions

- [CFCopyDescription(\_:)](cfcopydescription%28__%29.md): Returns a textual description of a Core Foundation object.
- [CFCopyTypeIDDescription(\_:)](cfcopytypeiddescription%28__%29.md): Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.
- [CFShow(\_:)](cfshow%28__%29.md): Prints a description of a Core Foundation object to stderr.

# CFGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the unique identifier of an opaque type to which a Core Foundation object belongs.

## Declaration

```objectivec
extern CFTypeID CFGetTypeID(CFTypeRef cf);
```

## Parameters

- `cf`: The CFType object to examine.

<a id="return-value"></a>

## Return Value

A value of type [CFTypeID](cftypeid.md) that identifies the opaque type of `cf`.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of any Core Foundation object. You can compare this value with the known [CFTypeID](cftypeid.md) identifier obtained with a “GetTypeID” function specific to a type, for example [CFDateGetTypeID](cfdategettypeid%28%29.md). These values might change from release to release or platform to platform.

## See Also

### Miscellaneous Functions

- [CFCopyDescription](cfcopydescription%28__%29.md): Returns a textual description of a Core Foundation object.
- [CFCopyTypeIDDescription](cfcopytypeiddescription%28__%29.md): Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.
- [CFShow](cfshow%28__%29.md): Prints a description of a Core Foundation object to stderr.
