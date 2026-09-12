> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacauxiliarystorage/init(creatingstorageat:hardwaremodel:options:)](https://developer.apple.com/documentation/virtualization/vzmacauxiliarystorage/init(creatingstorageat:hardwaremodel:options:))

# init(creatingStorageAt:hardwareModel:options:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates an initialized Mac auxiliary storage instance that describes a specific hardware model at a URL you specify.

## Declaration

```swift
init(creatingStorageAt URL: URL, hardwareModel: VZMacHardwareModel, options: VZMacAuxiliaryStorage.InitializationOptions = []) throws
```

## Parameters

- `URL`: The `URL` to write the auxiliary storage to on the local file system.
- `hardwareModel`: The [VZMacHardwareModel](../vzmachardwaremodel.md) model to use. The auxiliary storage can have different layouts for different hardware models.
- `options`: Initialization options from the available [VZMacAuxiliaryStorage.InitializationOptions](initializationoptions.md).

<a id="return-value"></a>

## Return Value

Returns a newly initialized `VZMacAuxiliaryStorage` object on success or `nil` if there was an error. On failure,  `error` contains the `NSError` that describes reason for the failure.

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

Use this method to create a new auxiliary storage object that describes a specific hardware model. To restore data from a previously saved existing auxiliary storage object, use [init(contentsOfURL:)](init%28contentsofurl_%29.md).

## See Also

### Creating the auxiliary storage

- [init(contentsOfURL:)](init%28contentsofurl_%29.md): Deprecated. Initializes an auxiliary storage object with data from the location at the URL you provide.
- [init(url:)](init%28url_%29-68cz.md): Initializes an auxiliary storage object with data from the location at the URL you provide.
- [VZMacAuxiliaryStorage.InitializationOptions](initializationoptions.md): Options you can set when creating new auxiliary storage.

# initCreatingStorageAtURL:hardwareModel:options:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates an initialized Mac auxiliary storage instance that describes a specific hardware model at a URL you specify.

## Declaration

```objectivec
- (instancetype) initCreatingStorageAtURL:(NSURL *) URL hardwareModel:(VZMacHardwareModel *) hardwareModel options:(VZMacAuxiliaryStorageInitializationOptions) options error:(NSError **) error;
```

## Parameters

- `URL`: The `URL` to write the auxiliary storage to on the local file system.
- `hardwareModel`: The [VZMacHardwareModel](../vzmachardwaremodel.md) model to use. The auxiliary storage can have different layouts for different hardware models.
- `options`: Initialization options from the available [VZMacAuxiliaryStorageInitializationOptions](initializationoptions.md).
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

Returns a newly initialized `VZMacAuxiliaryStorage` object on success or `nil` if there was an error. On failure,  `error` contains the `NSError` that describes reason for the failure.

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

Use this method to create a new auxiliary storage object that describes a specific hardware model. To restore data from a previously saved existing auxiliary storage object, use [init(contentsOfURL:)](init%28contentsofurl_%29.md).

## See Also

### Creating the auxiliary storage

- [initWithURL:](init%28url_%29-68cz.md): Initializes an auxiliary storage object with data from the location at the URL you provide.
- [VZMacAuxiliaryStorageInitializationOptions](initializationoptions.md): Options you can set when creating new auxiliary storage.
