> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromiseprovider/init(filetype:delegate:)](https://developer.apple.com/documentation/appkit/nsfilepromiseprovider/init(filetype:delegate:))

# init(fileType:delegate:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Initializes a file promise provider for a certain file type.

## Declaration

```swift
convenience init(fileType: String, delegate: any NSFilePromiseProviderDelegate)
```

## Parameters

- `fileType`: A string describing the file type.
- `delegate`: An object that conforms to the NSFilePromiseProviderDelegate protocol, for providing promised file data.

## See Also

### Initializers

- [init()](init%28%29.md): Initializes a file promise provider.

# initWithFileType:delegate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Initializes a file promise provider for a certain file type.

## Declaration

```objectivec
- (instancetype) initWithFileType:(NSString *) fileType delegate:(id<NSFilePromiseProviderDelegate>) delegate;
```

## Parameters

- `fileType`: A string describing the file type.
- `delegate`: An object that conforms to the NSFilePromiseProviderDelegate protocol, for providing promised file data.

## See Also

### Initializers

- [init](init%28%29.md): Initializes a file promise provider.
