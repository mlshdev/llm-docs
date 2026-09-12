> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagedestinationcopytypeidentifiers()](https://developer.apple.com/documentation/imageio/cgimagedestinationcopytypeidentifiers())

# CGImageDestinationCopyTypeIdentifiers() (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the uniform type identifiers that are supported for image destinations.

## Declaration

```swift
func CGImageDestinationCopyTypeIdentifiers() -> CFArray
```

<a id="return-value"></a>

## Return Value

Returns an array of the uniform type identifiers that image destinations support. For a list of system-declared and third-party identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).

## See Also

### Getting the Image Types

- [CGImageDestinationGetTypeID()](cgimagedestinationgettypeid%28%29.md): Returns the unique type identifier of an image destination opaque type.

# CGImageDestinationCopyTypeIdentifiers (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the uniform type identifiers that are supported for image destinations.

## Declaration

```objectivec
extern CFArrayRefCGImageDestinationCopyTypeIdentifiers();
```

<a id="return-value"></a>

## Return Value

Returns an array of the uniform type identifiers that image destinations support. For a list of system-declared and third-party identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).

## See Also

### Getting the Image Types

- [CGImageDestinationGetTypeID](cgimagedestinationgettypeid%28%29.md): Returns the unique type identifier of an image destination opaque type.
