> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecreatewithurl(_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourcecreatewithurl(_:_:))

# CGImageSourceCreateWithURL(\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image source that reads from a location specified by a URL.

## Declaration

```swift
func CGImageSourceCreateWithURL(_ url: CFURL, _ options: CFDictionary?) -> CGImageSource?
```

## Parameters

- `url`: The URL of the image.
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

An image source. You’re responsible for releasing this type using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Creating an Image Source

- [CGImageSourceCreateWithData(\_:\_:)](cgimagesourcecreatewithdata%28____%29.md): Creates an image source that reads from a Core Foundation data object.
- [CGImageSourceCreateWithDataProvider(\_:\_:)](cgimagesourcecreatewithdataprovider%28____%29.md): Creates an image source that reads data from the specified data provider.
- [CGImageSourceCreateIncremental(\_:)](cgimagesourcecreateincremental%28__%29.md): Creates an empty image source that you can use to accumulate incremental image data.

# CGImageSourceCreateWithURL (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image source that reads from a location specified by a URL.

## Declaration

```objectivec
extern CGImageSourceRefCGImageSourceCreateWithURL(CFURLRef url, CFDictionaryRef options);
```

## Parameters

- `url`: The URL of the image.
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

An image source. You’re responsible for releasing this type using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Creating an Image Source

- [CGImageSourceCreateWithData](cgimagesourcecreatewithdata%28____%29.md): Creates an image source that reads from a Core Foundation data object.
- [CGImageSourceCreateWithDataProvider](cgimagesourcecreatewithdataprovider%28____%29.md): Creates an image source that reads data from the specified data provider.
- [CGImageSourceCreateIncremental](cgimagesourcecreateincremental%28__%29.md): Creates an empty image source that you can use to accumulate incremental image data.
