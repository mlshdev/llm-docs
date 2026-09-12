> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagedestinationcreatewithurl(_:_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagedestinationcreatewithurl(_:_:_:_:))

# CGImageDestinationCreateWithURL(\_:\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image destination that writes image data to the specified URL.

## Declaration

```swift
func CGImageDestinationCreateWithURL(_ url: CFURL, _ type: CFString, _ count: Int, _ options: CFDictionary?) -> CGImageDestination?
```

## Parameters

- `url`: The URL at which to write the image data. This object overwrites any data at the specified URL.
- `type`: The uniform type identifier of the resulting image file. For a list of system-declared and third-party identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).
- `count`: The number of images (not including thumbnail images) you want to include in the image file.
- `options`: Future options. Specify `NULL` for this parameter.

<a id="return-value"></a>

## Return Value

An image destination, or `NULL` if an error occurs. You are responsible for releasing this object using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Creating an Image Destination

- [CGImageDestinationCreateWithData(\_:\_:\_:\_:)](cgimagedestinationcreatewithdata%28________%29.md): Creates an image destination that writes to a Core Foundation mutable data object.
- [CGImageDestinationCreateWithDataConsumer(\_:\_:\_:\_:)](cgimagedestinationcreatewithdataconsumer%28________%29.md): Creates an image destination that writes to the specified data consumer.

# CGImageDestinationCreateWithURL (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image destination that writes image data to the specified URL.

## Declaration

```objectivec
extern CGImageDestinationRefCGImageDestinationCreateWithURL(CFURLRef url, CFStringRef type, size_t count, CFDictionaryRef options);
```

## Parameters

- `url`: The URL at which to write the image data. This object overwrites any data at the specified URL.
- `type`: The uniform type identifier of the resulting image file. For a list of system-declared and third-party identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).
- `count`: The number of images (not including thumbnail images) you want to include in the image file.
- `options`: Future options. Specify `NULL` for this parameter.

<a id="return-value"></a>

## Return Value

An image destination, or `NULL` if an error occurs. You are responsible for releasing this object using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Creating an Image Destination

- [CGImageDestinationCreateWithData](cgimagedestinationcreatewithdata%28________%29.md): Creates an image destination that writes to a Core Foundation mutable data object.
- [CGImageDestinationCreateWithDataConsumer](cgimagedestinationcreatewithdataconsumer%28________%29.md): Creates an image destination that writes to the specified data consumer.
