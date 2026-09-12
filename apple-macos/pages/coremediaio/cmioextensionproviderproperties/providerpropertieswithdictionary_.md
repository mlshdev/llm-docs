> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproviderproperties/providerpropertieswithdictionary:](https://developer.apple.com/documentation/coremediaio/cmioextensionproviderproperties/providerpropertieswithdictionary:)

# providerPropertiesWithDictionary:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new provider properties object with the specified properties.

## Declaration

```objectivec
+ (instancetype) providerPropertiesWithDictionary:(NSDictionary<NSString *,CMIOExtensionPropertyState *> *) propertiesDictionary;
```

## Parameters

- `propertiesDictionary`: A dictionary of property states.

## See Also

### Creating Provider Properties

- [initWithDictionary:](init%28dictionary_%29.md): Creates a provider properties object with the specified properties.
