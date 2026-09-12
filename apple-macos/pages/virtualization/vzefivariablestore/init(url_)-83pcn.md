> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/init(url:)-83pcn](https://developer.apple.com/documentation/virtualization/vzefivariablestore/init(url:)-83pcn)

# init(url:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Initialize the variable store from the URL of an existing file.

## Declaration

```swift
init(url URL: URL)
```

## Parameters

- `URL`: The URL of the location on disk that contains the stored EFI information.

## See Also

### Creating the variable store

- [init(creatingVariableStoreAt:options:)](init%28creatingvariablestoreat_options_%29.md): Creates a new EFI variable store at specified the URL on the filesystem, initialization options, and error-return variable.
- [VZEFIVariableStore.InitializationOptions](initializationoptions.md): Constants that describe the options available when creating a new Extensible Firmware Interface (EFI) variable store.

# initWithURL: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Initialize the variable store from the URL of an existing file.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL of the location on disk that contains the stored EFI information.

## See Also

### Creating the variable store

- [initCreatingVariableStoreAtURL:options:error:](init%28creatingvariablestoreat_options_%29.md): Creates a new EFI variable store at specified the URL on the filesystem, initialization options, and error-return variable.
- [VZEFIVariableStoreInitializationOptions](initializationoptions.md): Constants that describe the options available when creating a new Extensible Firmware Interface (EFI) variable store.
