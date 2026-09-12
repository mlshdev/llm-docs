> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecreatewithdata(_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourcecreatewithdata(_:_:))

# CGImageSourceCreateWithData(\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image source that reads from a Core Foundation data object.

## Declaration

```swift
func CGImageSourceCreateWithData(_ data: CFData, _ options: CFDictionary?) -> CGImageSource?
```

## Parameters

- `data`: The data object from which to read. For more information on data objects, see [CFData](../corefoundation/cfdata.md) and [Data Objects](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBinaryData/DataObjects.html#//apple_ref/doc/uid/20000171).
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

An image source. You’re responsible for releasing this type using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Creating an Image Source

- [CGImageSourceCreateWithURL(\_:\_:)](cgimagesourcecreatewithurl%28____%29.md): Creates an image source that reads from a location specified by a URL.
- [CGImageSourceCreateWithDataProvider(\_:\_:)](cgimagesourcecreatewithdataprovider%28____%29.md): Creates an image source that reads data from the specified data provider.
- [CGImageSourceCreateIncremental(\_:)](cgimagesourcecreateincremental%28__%29.md): Creates an empty image source that you can use to accumulate incremental image data.

# CGImageSourceCreateWithData (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image source that reads from a Core Foundation data object.

## Declaration

```objectivec
extern CGImageSourceRefCGImageSourceCreateWithData(CFDataRef data, CFDictionaryRef options);
```

## Parameters

- `data`: The data object from which to read. For more information on data objects, see [CFDataRef](../corefoundation/cfdata.md) and [Data Objects](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBinaryData/DataObjects.html#//apple_ref/doc/uid/20000171).
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

An image source. You’re responsible for releasing this type using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Creating an Image Source

- [CGImageSourceCreateWithURL](cgimagesourcecreatewithurl%28____%29.md): Creates an image source that reads from a location specified by a URL.
- [CGImageSourceCreateWithDataProvider](cgimagesourcecreatewithdataprovider%28____%29.md): Creates an image source that reads data from the specified data provider.
- [CGImageSourceCreateIncremental](cgimagesourcecreateincremental%28__%29.md): Creates an empty image source that you can use to accumulate incremental image data.
