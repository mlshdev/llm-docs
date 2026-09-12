> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties/devicepropertieswithdictionary:](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties/devicepropertieswithdictionary:)

# devicePropertiesWithDictionary:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new properties object with a dictionary of property states.

## Declaration

```objectivec
+ (instancetype) devicePropertiesWithDictionary:(NSDictionary<NSString *,CMIOExtensionPropertyState *> *) propertiesDictionary;
```

## Parameters

- `propertiesDictionary`: The dictionary of properties and their states.

<a id="return-value"></a>

## Return Value

A device properties object.

## See Also

### Creating Device Properties

- [initWithDictionary:](init%28dictionary_%29.md): Creates a properties object with a dictionary of property states.
