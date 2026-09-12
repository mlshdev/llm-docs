> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamsource/setstreamproperties(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamsource/setstreamproperties(_:))

# setStreamProperties(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets the property state of a stream.

## Declaration

```swift
func setStreamProperties(_ streamProperties: CMIOExtensionStreamProperties) throws
```

## Parameters

- `streamProperties`: A properties object that contains the new property states.

## See Also

### Managing Stream Properties

- [availableProperties](availableproperties.md): A set of properties available for the stream.
- [streamProperties(forProperties:)](streamproperties%28forproperties_%29.md): Gets the states of specified properties.

# setStreamProperties:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets the property state of a stream.

## Declaration

```objectivec
- (BOOL) setStreamProperties:(CMIOExtensionStreamProperties *) streamProperties error:(NSError **) outError;
```

## Parameters

- `streamProperties`: A properties object that contains the new property states.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

## See Also

### Managing Stream Properties

- [availableProperties](availableproperties.md): A set of properties available for the stream.
- [streamPropertiesForProperties:error:](streamproperties%28forproperties_%29.md): Gets the states of specified properties.
