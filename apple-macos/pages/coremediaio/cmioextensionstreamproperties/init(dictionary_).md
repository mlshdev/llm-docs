> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/init(dictionary:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a properties object that provides the specified properties and default states.

## Declaration

```swift
init(dictionary propertiesDictionary: [CMIOExtensionProperty : CMIOExtensionPropertyState<AnyObject>])
```

## Parameters

- `propertiesDictionary`: A dictionary of properties and their initial states.

# initWithDictionary: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a properties object that provides the specified properties and default states.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<NSString *,CMIOExtensionPropertyState *> *) propertiesDictionary;
```

## Parameters

- `propertiesDictionary`: A dictionary of properties and their initial states.

## See Also

### Creating Stream Properties

- [streamPropertiesWithDictionary:](streampropertieswithdictionary_.md): Returns a new properties object that provides the specified properties and default states.
