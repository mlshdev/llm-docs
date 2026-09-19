> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iopropertyname

# IOPropertyName

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

A string type for specifying the name of a property in the system’s registry.

## Declaration

```objectivec
typedef char[128] IOPropertyName;
```

## See Also

### Managing the Registry Properties

- [CopyProperties](ioservice/copyproperties.md): Returns the registry properties associated with the current service.
- [SetProperties](ioservice/setproperties.md): Sends the dictionary of properties to the current service object.
- [SearchProperty](ioservice/searchproperty.md): Searches for a property with the specified name in the current service or one of its parent services, and returns the corresponding value.
- [IORegistryPlaneName](ioregistryplanename.md): A string type for specifying the name of a plane in the system’s registry.
- [Search Options](3325572-search_options.md): Options to apply when searching for registry properties.
