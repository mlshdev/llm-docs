> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproviderproperties/propertiesdictionary](https://developer.apple.com/documentation/coremediaio/cmioextensionproviderproperties/propertiesdictionary)

# propertiesDictionary (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A dictionary of properties for a provider.

## Declaration

```swift
var propertiesDictionary: [CMIOExtensionProperty : CMIOExtensionPropertyState<AnyObject>] { get set }
```

## See Also

### Managing Properties

- [name](name.md): The provider name.
- [manufacturer](manufacturer.md): The provider manufacturer.
- [setPropertyState(\_:forProperty:)](setpropertystate%28__forproperty_%29.md): Sets a state value for the specified property.

# propertiesDictionary (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A dictionary of properties for a provider.

## Declaration

```objectivec
@property (atomic, copy) NSDictionary<NSString *,CMIOExtensionPropertyState *> * propertiesDictionary;
```

## See Also

### Managing Properties

- [name](name.md): The provider name.
- [manufacturer](manufacturer.md): The provider manufacturer.
- [setPropertyState:forProperty:](setpropertystate%28__forproperty_%29.md): Sets a state value for the specified property.
