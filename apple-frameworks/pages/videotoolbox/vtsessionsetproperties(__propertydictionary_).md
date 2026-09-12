> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsessionsetproperties(_:propertydictionary:)](https://developer.apple.com/documentation/videotoolbox/vtsessionsetproperties(_:propertydictionary:))

# VTSessionSetProperties(\_:propertyDictionary:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Sets multiple properties at once.

## Declaration

```swift
func VTSessionSetProperties(_ session: VTSession, propertyDictionary: CFDictionary) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

Sets the properties specified by keys in `propertyDictionary` to the corresponding values.

## Topics

### Related Documentation

- [Compression Properties](compression-properties.md): Properties that you use to configure a compression session.
- [Decompression Properties](decompression-properties.md): Properties used to configure a VideoToolbox decompression session.
- [Pixel Transfer Properties](pixel-transfer-properties.md): Properties used to configure a VideoToolbox pixel transfer session.

## See Also

### Setting Properties

- [VTSessionSetProperty(\_:key:value:)](vtsessionsetproperty%28__key_value_%29.md): Sets a property on a VideoToolbox session.

# VTSessionSetProperties (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Sets multiple properties at once.

## Declaration

```objectivec
extern OSStatus VTSessionSetProperties(VTSessionRef session, CFDictionaryRef propertyDictionary);
```

<a id="Discussion"></a>

## Discussion

Sets the properties specified by keys in `propertyDictionary` to the corresponding values.

## Topics

### Related Documentation

- [Compression Properties](compression-properties.md): Properties that you use to configure a compression session.
- [Decompression Properties](decompression-properties.md): Properties used to configure a VideoToolbox decompression session.
- [Pixel Transfer Properties](pixel-transfer-properties.md): Properties used to configure a VideoToolbox pixel transfer session.

## See Also

### Setting Properties

- [VTSessionSetProperty](vtsessionsetproperty%28__key_value_%29.md): Sets a property on a VideoToolbox session.
