> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovidersource/availableproperties](https://developer.apple.com/documentation/coremediaio/cmioextensionprovidersource/availableproperties)

# availableProperties (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A set of available properties for a provider.

## Declaration

```swift
var availableProperties: Set<CMIOExtensionProperty> { get }
```

<a id="Discussion"></a>

## Discussion

Don’t change this property value during the life cycle of the associated provider.

## See Also

### Configuring Properties

- [providerProperties(forProperties:)](providerproperties%28forproperties_%29.md): Gets the state of provider properties.
- [setProviderProperties(\_:)](setproviderproperties%28__%29.md): Set the state of provider properties.

# availableProperties (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A set of available properties for a provider.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSSet<NSString *> * availableProperties;
```

<a id="Discussion"></a>

## Discussion

Don’t change this property value during the life cycle of the associated provider.

## See Also

### Configuring Properties

- [providerPropertiesForProperties:error:](providerproperties%28forproperties_%29.md): Gets the state of provider properties.
- [setProviderProperties:error:](setproviderproperties%28__%29.md): Set the state of provider properties.
