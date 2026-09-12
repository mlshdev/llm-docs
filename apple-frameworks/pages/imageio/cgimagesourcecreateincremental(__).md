> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecreateincremental(_:)](https://developer.apple.com/documentation/imageio/cgimagesourcecreateincremental(_:))

# CGImageSourceCreateIncremental(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty image source that you can use to accumulate incremental image data.

## Declaration

```swift
func CGImageSourceCreateIncremental(_ options: CFDictionary?) -> CGImageSource
```

## Parameters

- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

An empty image source object. You’re responsible for releasing this type using [CFRelease](../corefoundation/cfrelease.md).

<a id="Discussion"></a>

## Discussion

This function creates an empty image source container, which you use to accumulate data downloaded in chunks from the network. To add new chunks of data to the image source, call the [CGImageSourceUpdateDataProvider(\_:\_:\_:)](cgimagesourceupdatedataprovider%28______%29.md) or [CGImageSourceUpdateData(\_:\_:\_:)](cgimagesourceupdatedata%28______%29.md) functions.

## See Also

### Creating an Image Source

- [CGImageSourceCreateWithURL(\_:\_:)](cgimagesourcecreatewithurl%28____%29.md): Creates an image source that reads from a location specified by a URL.
- [CGImageSourceCreateWithData(\_:\_:)](cgimagesourcecreatewithdata%28____%29.md): Creates an image source that reads from a Core Foundation data object.
- [CGImageSourceCreateWithDataProvider(\_:\_:)](cgimagesourcecreatewithdataprovider%28____%29.md): Creates an image source that reads data from the specified data provider.

# CGImageSourceCreateIncremental (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty image source that you can use to accumulate incremental image data.

## Declaration

```objectivec
extern CGImageSourceRefCGImageSourceCreateIncremental(CFDictionaryRef options);
```

## Parameters

- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

An empty image source object. You’re responsible for releasing this type using [CFRelease](../corefoundation/cfrelease.md).

<a id="Discussion"></a>

## Discussion

This function creates an empty image source container, which you use to accumulate data downloaded in chunks from the network. To add new chunks of data to the image source, call the [CGImageSourceUpdateDataProvider](cgimagesourceupdatedataprovider%28______%29.md) or [CGImageSourceUpdateData](cgimagesourceupdatedata%28______%29.md) functions.

## See Also

### Creating an Image Source

- [CGImageSourceCreateWithURL](cgimagesourcecreatewithurl%28____%29.md): Creates an image source that reads from a location specified by a URL.
- [CGImageSourceCreateWithData](cgimagesourcecreatewithdata%28____%29.md): Creates an image source that reads from a Core Foundation data object.
- [CGImageSourceCreateWithDataProvider](cgimagesourcecreatewithdataprovider%28____%29.md): Creates an image source that reads data from the specified data provider.
