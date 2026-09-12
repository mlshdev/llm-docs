> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/streampropertieswithdictionary:](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/streampropertieswithdictionary:)

# streamPropertiesWithDictionary:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new properties object that provides the specified properties and default states.

## Declaration

```objectivec
+ (instancetype) streamPropertiesWithDictionary:(NSDictionary<NSString *,CMIOExtensionPropertyState *> *) propertiesDictionary;
```

## Parameters

- `propertiesDictionary`: A dictionary of properties and their initial states.

<a id="return-value"></a>

## Return Value

A new stream properties object.

## See Also

### Creating Stream Properties

- [initWithDictionary:](init%28dictionary_%29.md): Creates a properties object that provides the specified properties and default states.
