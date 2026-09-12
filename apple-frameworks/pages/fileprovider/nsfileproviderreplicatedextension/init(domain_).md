> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderreplicatedextension/init(domain:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderreplicatedextension/init(domain:))

# init(domain:) (Swift)

**Framework:** File Provider  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Creates an instance of the file provider for the specified domain.

## Declaration

```swift
init(domain: NSFileProviderDomain)
```

## Parameters

- `domain`: The domain for the file provider.

## See Also

### Creating and Removing File Providers

- [invalidate()](invalidate%28%29.md): Tells the file provider to perform any necessary cleanup so that the system can deallocate it.

# initWithDomain: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Creates an instance of the file provider for the specified domain.

## Declaration

```objectivec
- (instancetype) initWithDomain:(NSFileProviderDomain *) domain;
```

## Parameters

- `domain`: The domain for the file provider.

## See Also

### Creating and Removing File Providers

- [invalidate](invalidate%28%29.md): Tells the file provider to perform any necessary cleanup so that the system can deallocate it.
