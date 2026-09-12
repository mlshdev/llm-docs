> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsession-api-collection](https://developer.apple.com/documentation/videotoolbox/vtsession-api-collection)

# VTSession (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

An abstract object that provides the common interface to configure VideoToolbox session objects.

## Topics

### Setting Properties

- [VTSessionSetProperty(\_:key:value:)](vtsessionsetproperty%28__key_value_%29.md): Sets a property on a VideoToolbox session.
- [VTSessionSetProperties(\_:propertyDictionary:)](vtsessionsetproperties%28__propertydictionary_%29.md): Sets multiple properties at once.

### Getting Properties

- [VTSessionCopyProperty(\_:key:allocator:valueOut:)](vtsessioncopyproperty%28__key_allocator_valueout_%29.md): Retrieves a property on a Video Toolbox session.
- [VTSessionCopySerializableProperties(\_:allocator:dictionaryOut:)](vtsessioncopyserializableproperties%28__allocator_dictionaryout_%29.md): Retrieves the set of serializable property keys and their current values.
- [VTSessionCopySupportedPropertyDictionary(\_:supportedPropertyDictionaryOut:)](vtsessioncopysupportedpropertydictionary%28__supportedpropertydictionaryout_%29.md): Retrieves a dictionary enumerating all the supported properties of a video toolbox session.
- [Supported Property Dictionary Constants](supported-dictionary-constants.md): Property dictionary key and constant values.

### Data Types

- [VTSession](vtsession.md): A reference to a VideoToolbox compression session, decompression session or pixel transfer session.

### Enumerations

- [Frame Delay](1441330-frame-delay.md): Indicates that no limit should be placed on the compression window.

## See Also

### Data Types

- [VTInt32Point](vtint32point.md): A structure that represents a 32-bit integer point value.
- [VTInt32Size](vtint32size.md): A structure that represents a 32-bit integer size value.

# VTSession (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

An abstract object that provides the common interface to configure VideoToolbox session objects.

## Topics

### Setting Properties

- [VTSessionSetProperty](vtsessionsetproperty%28__key_value_%29.md): Sets a property on a VideoToolbox session.
- [VTSessionSetProperties](vtsessionsetproperties%28__propertydictionary_%29.md): Sets multiple properties at once.

### Getting Properties

- [VTSessionCopyProperty](vtsessioncopyproperty%28__key_allocator_valueout_%29.md): Retrieves a property on a Video Toolbox session.
- [VTSessionCopySerializableProperties](vtsessioncopyserializableproperties%28__allocator_dictionaryout_%29.md): Retrieves the set of serializable property keys and their current values.
- [VTSessionCopySupportedPropertyDictionary](vtsessioncopysupportedpropertydictionary%28__supportedpropertydictionaryout_%29.md): Retrieves a dictionary enumerating all the supported properties of a video toolbox session.
- [Supported Property Dictionary Constants](supported-dictionary-constants.md): Property dictionary key and constant values.

### Data Types

- [VTSessionRef](vtsession.md): A reference to a VideoToolbox compression session, decompression session or pixel transfer session.

### Enumerations

- [Frame Delay](1441330-frame-delay.md): Indicates that no limit should be placed on the compression window.

## See Also

### Data Types

- [VTInt32Point](vtint32point.md): A structure that represents a 32-bit integer point value.
- [VTInt32Size](vtint32size.md): A structure that represents a 32-bit integer size value.
