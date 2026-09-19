> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionproviderproperties/init(dictionary:)

# init(dictionary:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a provider properties object with the specified properties.

## Declaration

```swift
init(dictionary propertiesDictionary: [CMIOExtensionProperty : CMIOExtensionPropertyState<AnyObject>])
```

## Parameters

- `propertiesDictionary`: A dictionary of property states.

# initWithDictionary: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a provider properties object with the specified properties.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<NSString *,CMIOExtensionPropertyState *> *) propertiesDictionary;
```

## Parameters

- `propertiesDictionary`: A dictionary of property states.

## See Also

### Creating Provider Properties

- [providerPropertiesWithDictionary:](providerpropertieswithdictionary_.md): Returns a new provider properties object with the specified properties.
