> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacauxiliarystorage/init(contentsofurl:)](https://developer.apple.com/documentation/virtualization/vzmacauxiliarystorage/init(contentsofurl:))

# init(contentsOfURL:)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+ (deprecated in 27.0)

Initializes an auxiliary storage object with data from the location at the URL you provide.

## Declaration

```swift
init(contentsOfURL URL: URL)
```

## Parameters

- `URL`: The URL of the auxiliary storage on the local file system.

<a id="Discussion"></a>

## Discussion

Use this initializer to load the data from an auxiliary storage object stored on the file system. To create a new auxiliary storage object, use [init(creatingStorageAt:hardwareModel:options:)](init%28creatingstorageat_hardwaremodel_options_%29.md).

## See Also

### Creating the auxiliary storage

- [init(url:)](init%28url_%29-68cz.md): Initializes an auxiliary storage object with data from the location at the URL you provide.
- [init(creatingStorageAt:hardwareModel:options:)](init%28creatingstorageat_hardwaremodel_options_%29.md): Creates an initialized Mac auxiliary storage instance that describes a specific hardware model at a URL you specify.
- [VZMacAuxiliaryStorage.InitializationOptions](initializationoptions.md): Options you can set when creating new auxiliary storage.
