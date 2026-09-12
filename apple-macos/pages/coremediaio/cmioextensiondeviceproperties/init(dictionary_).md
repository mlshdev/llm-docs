> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties/init(dictionary:)](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a properties object with a dictionary of property states.

## Declaration

```swift
init(dictionary propertiesDictionary: [CMIOExtensionProperty : CMIOExtensionPropertyState<AnyObject>])
```

## Parameters

- `propertiesDictionary`: The dictionary of properties and their states.

# initWithDictionary: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a properties object with a dictionary of property states.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<NSString *,CMIOExtensionPropertyState *> *) propertiesDictionary;
```

## Parameters

- `propertiesDictionary`: The dictionary of properties and their states.

## See Also

### Creating Device Properties

- [devicePropertiesWithDictionary:](devicepropertieswithdictionary_.md): Returns a new properties object with a dictionary of property states.
