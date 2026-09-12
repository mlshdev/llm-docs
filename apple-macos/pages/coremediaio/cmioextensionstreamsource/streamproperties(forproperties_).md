> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamsource/streamproperties(forproperties:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamsource/streamproperties(forproperties:))

# streamProperties(forProperties:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Gets the states of specified properties.

## Declaration

```swift
func streamProperties(forProperties properties: Set<CMIOExtensionProperty>) throws -> CMIOExtensionStreamProperties
```

## Parameters

- `properties`: A set of properties with states to retrieve.

<a id="return-value"></a>

## Return Value

An object that contains the states of the requested properties.

## See Also

### Managing Stream Properties

- [availableProperties](availableproperties.md): A set of properties available for the stream.
- [setStreamProperties(\_:)](setstreamproperties%28__%29.md): Sets the property state of a stream.

# streamPropertiesForProperties:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Gets the states of specified properties.

## Declaration

```objectivec
- (CMIOExtensionStreamProperties *) streamPropertiesForProperties:(NSSet<NSString *> *) properties error:(NSError **) outError;
```

## Parameters

- `properties`: A set of properties with states to retrieve.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

<a id="return-value"></a>

## Return Value

An object that contains the states of the requested properties.

## See Also

### Managing Stream Properties

- [availableProperties](availableproperties.md): A set of properties available for the stream.
- [setStreamProperties:error:](setstreamproperties%28__%29.md): Sets the property state of a stream.
