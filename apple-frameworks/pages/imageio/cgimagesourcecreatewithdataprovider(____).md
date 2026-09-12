> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecreatewithdataprovider(_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourcecreatewithdataprovider(_:_:))

# CGImageSourceCreateWithDataProvider(\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image source that reads data from the specified data provider.

## Declaration

```swift
func CGImageSourceCreateWithDataProvider(_ provider: CGDataProvider, _ options: CFDictionary?) -> CGImageSource?
```

## Parameters

- `provider`: The data provider to read from. For more information on data providers, see [CGDataProvider](../coregraphics/cgdataprovider.md) and [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

An image source. You’re responsible for releasing this type using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Creating an Image Source

- [CGImageSourceCreateWithURL(\_:\_:)](cgimagesourcecreatewithurl%28____%29.md): Creates an image source that reads from a location specified by a URL.
- [CGImageSourceCreateWithData(\_:\_:)](cgimagesourcecreatewithdata%28____%29.md): Creates an image source that reads from a Core Foundation data object.
- [CGImageSourceCreateIncremental(\_:)](cgimagesourcecreateincremental%28__%29.md): Creates an empty image source that you can use to accumulate incremental image data.

# CGImageSourceCreateWithDataProvider (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an image source that reads data from the specified data provider.

## Declaration

```objectivec
extern CGImageSourceRefCGImageSourceCreateWithDataProvider(CGDataProviderRef provider, CFDictionaryRef options);
```

## Parameters

- `provider`: The data provider to read from. For more information on data providers, see [CGDataProviderRef](../coregraphics/cgdataprovider.md) and [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).
- `options`: A dictionary that specifies additional creation options. For a list of possible values, see [Specifying the Read Options](cgimagesource.md#Specifying-the-Read-Options).

<a id="return-value"></a>

## Return Value

An image source. You’re responsible for releasing this type using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Creating an Image Source

- [CGImageSourceCreateWithURL](cgimagesourcecreatewithurl%28____%29.md): Creates an image source that reads from a location specified by a URL.
- [CGImageSourceCreateWithData](cgimagesourcecreatewithdata%28____%29.md): Creates an image source that reads from a Core Foundation data object.
- [CGImageSourceCreateIncremental](cgimagesourcecreateincremental%28__%29.md): Creates an empty image source that you can use to accumulate incremental image data.
