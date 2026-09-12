> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsessionsetproperty(_:key:value:)](https://developer.apple.com/documentation/videotoolbox/vtsessionsetproperty(_:key:value:))

# VTSessionSetProperty(\_:key:value:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Sets a property on a VideoToolbox session.

## Declaration

```swift
func VTSessionSetProperty(_ session: VTSession, key propertyKey: CFString, value propertyValue: CFTypeRef?) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

Setting a property value to `NULL` restores the default value.

## Topics

### Related Documentation

- [Compression Properties](compression-properties.md): Properties that you use to configure a compression session.
- [Decompression Properties](decompression-properties.md): Properties used to configure a VideoToolbox decompression session.
- [Pixel Transfer Properties](pixel-transfer-properties.md): Properties used to configure a VideoToolbox pixel transfer session.

## See Also

### Setting Properties

- [VTSessionSetProperties(\_:propertyDictionary:)](vtsessionsetproperties%28__propertydictionary_%29.md): Sets multiple properties at once.

# VTSessionSetProperty (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Sets a property on a VideoToolbox session.

## Declaration

```objectivec
extern OSStatus VTSessionSetProperty(VTSessionRef session, CFStringRef propertyKey, CFTypeRef propertyValue);
```

<a id="Discussion"></a>

## Discussion

Setting a property value to `NULL` restores the default value.

## Topics

### Related Documentation

- [Compression Properties](compression-properties.md): Properties that you use to configure a compression session.
- [Decompression Properties](decompression-properties.md): Properties used to configure a VideoToolbox decompression session.
- [Pixel Transfer Properties](pixel-transfer-properties.md): Properties used to configure a VideoToolbox pixel transfer session.

## See Also

### Setting Properties

- [VTSessionSetProperties](vtsessionsetproperties%28__propertydictionary_%29.md): Sets multiple properties at once.
