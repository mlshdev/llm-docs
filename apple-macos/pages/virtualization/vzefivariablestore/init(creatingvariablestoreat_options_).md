> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/init(creatingvariablestoreat:options:)](https://developer.apple.com/documentation/virtualization/vzefivariablestore/init(creatingvariablestoreat:options:))

# init(creatingVariableStoreAt:options:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a new EFI variable store at specified the URL on the filesystem, initialization options, and error-return variable.

## Declaration

```swift
init(creatingVariableStoreAt URL: URL, options: VZEFIVariableStore.InitializationOptions = []) throws
```

## Parameters

- `URL`: A URL that specifies the location on disk at which to store the EFI information.
- `options`: An array of possible [VZEFIVariableStore.InitializationOptions](initializationoptions.md).

## See Also

### Creating the variable store

- [init(url:)](init%28url_%29-83pcn.md): Initialize the variable store from the URL of an existing file.
- [VZEFIVariableStore.InitializationOptions](initializationoptions.md): Constants that describe the options available when creating a new Extensible Firmware Interface (EFI) variable store.

# initCreatingVariableStoreAtURL:options:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates a new EFI variable store at specified the URL on the filesystem, initialization options, and error-return variable.

## Declaration

```objectivec
- (instancetype) initCreatingVariableStoreAtURL:(NSURL *) URL options:(VZEFIVariableStoreInitializationOptions) options error:(NSError **) error;
```

## Parameters

- `URL`: A URL that specifies the location on disk at which to store the EFI information.
- `options`: An array of possible [VZEFIVariableStoreInitializationOptions](initializationoptions.md).
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Creating the variable store

- [initWithURL:](init%28url_%29-83pcn.md): Initialize the variable store from the URL of an existing file.
- [VZEFIVariableStoreInitializationOptions](initializationoptions.md): Constants that describe the options available when creating a new Extensible Firmware Interface (EFI) variable store.
