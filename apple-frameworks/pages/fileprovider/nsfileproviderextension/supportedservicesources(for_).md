> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/supportedservicesources(for:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/supportedservicesources(for:))

# supportedServiceSources(for:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Return an array of service sources that let the host app perform actions associated with the specified item.

## Declaration

```swift
func supportedServiceSources(for itemIdentifier: NSFileProviderItemIdentifier) throws -> [any NSFileProviderServiceSource]
```

## See Also

### Working with services

- [NSFileProviderServiceSource](../nsfileproviderservicesource.md): A service that provides a custom communication channel between the host app and the File Provider extension.

# supportedServiceSourcesForItemIdentifier:error: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Return an array of service sources that let the host app perform actions associated with the specified item.

## Declaration

```objectivec
- (NSArray<id<NSFileProviderServiceSource>> *) supportedServiceSourcesForItemIdentifier:(NSFileProviderItemIdentifier) itemIdentifier error:(NSError **) error;
```

## See Also

### Working with services

- [NSFileProviderServiceSource](../nsfileproviderservicesource.md): A service that provides a custom communication channel between the host app and the File Provider extension.
