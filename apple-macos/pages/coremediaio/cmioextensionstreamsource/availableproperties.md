> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamsource/availableproperties](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamsource/availableproperties)

# availableProperties (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A set of properties available for the stream.

## Declaration

```swift
var availableProperties: Set<CMIOExtensionProperty> { get }
```

## See Also

### Managing Stream Properties

- [streamProperties(forProperties:)](streamproperties%28forproperties_%29.md): Gets the states of specified properties.
- [setStreamProperties(\_:)](setstreamproperties%28__%29.md): Sets the property state of a stream.

# availableProperties (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A set of properties available for the stream.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSSet<NSString *> * availableProperties;
```

## See Also

### Managing Stream Properties

- [streamPropertiesForProperties:error:](streamproperties%28forproperties_%29.md): Gets the states of specified properties.
- [setStreamProperties:error:](setstreamproperties%28__%29.md): Sets the property state of a stream.
