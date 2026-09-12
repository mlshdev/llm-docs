> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacauxiliarystorage/init(url:)-68cz](https://developer.apple.com/documentation/virtualization/vzmacauxiliarystorage/init(url:)-68cz)

# init(url:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Initializes an auxiliary storage object with data from the location at the URL you provide.

## Declaration

```swift
init(url URL: URL)
```

## Parameters

- `URL`: The URL of the auxiliary storage on the local file system.

## See Also

### Creating the auxiliary storage

- [init(contentsOfURL:)](init%28contentsofurl_%29.md): Deprecated. Initializes an auxiliary storage object with data from the location at the URL you provide.
- [init(creatingStorageAt:hardwareModel:options:)](init%28creatingstorageat_hardwaremodel_options_%29.md): Creates an initialized Mac auxiliary storage instance that describes a specific hardware model at a URL you specify.
- [VZMacAuxiliaryStorage.InitializationOptions](initializationoptions.md): Options you can set when creating new auxiliary storage.

# initWithURL: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Initializes an auxiliary storage object with data from the location at the URL you provide.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL of the auxiliary storage on the local file system.

## See Also

### Creating the auxiliary storage

- [initCreatingStorageAtURL:hardwareModel:options:error:](init%28creatingstorageat_hardwaremodel_options_%29.md): Creates an initialized Mac auxiliary storage instance that describes a specific hardware model at a URL you specify.
- [VZMacAuxiliaryStorageInitializationOptions](initializationoptions.md): Options you can set when creating new auxiliary storage.
