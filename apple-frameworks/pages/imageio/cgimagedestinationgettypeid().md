> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagedestinationgettypeid()](https://developer.apple.com/documentation/imageio/cgimagedestinationgettypeid())

# CGImageDestinationGetTypeID() (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unique type identifier of an image destination opaque type.

## Declaration

```swift
func CGImageDestinationGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

Returns the Core Foundation type ID for an image destination.

<a id="Discussion"></a>

## Discussion

A type identifier is an integer that identifies the opaque type to which a Core Foundation object belongs. You use type IDs in various contexts, such as when you are operating on heterogeneous collections.

## See Also

### Getting the Image Types

- [CGImageDestinationCopyTypeIdentifiers()](cgimagedestinationcopytypeidentifiers%28%29.md): Returns an array of the uniform type identifiers that are supported for image destinations.

# CGImageDestinationGetTypeID (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unique type identifier of an image destination opaque type.

## Declaration

```objectivec
extern CFTypeID CGImageDestinationGetTypeID();
```

<a id="return-value"></a>

## Return Value

Returns the Core Foundation type ID for an image destination.

<a id="Discussion"></a>

## Discussion

A type identifier is an integer that identifies the opaque type to which a Core Foundation object belongs. You use type IDs in various contexts, such as when you are operating on heterogeneous collections.

## See Also

### Getting the Image Types

- [CGImageDestinationCopyTypeIdentifiers](cgimagedestinationcopytypeidentifiers%28%29.md): Returns an array of the uniform type identifiers that are supported for image destinations.
