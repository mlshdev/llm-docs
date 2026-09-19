> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileproviderknownfolderlocations/location/init(existingitemidentifier:)

# init(existingItemIdentifier:) (Swift)

**Framework:** File Provider  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Initialize a location with the item identifier of a folder that already exists on the server.

## Declaration

```swift
init(existingItemIdentifier: NSFileProviderItemIdentifier)
```

<a id="discussion"></a>

## Discussion

If the known folder already exists on the server, the provider can specify the exact identifier of the item that needs to be used to back the known folder.

# initWithExistingItemIdentifier: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Initialize a location with the item identifier of a folder that already exists on the server.

## Declaration

```objectivec
- (instancetype) initWithExistingItemIdentifier:(NSFileProviderItemIdentifier) existingItemIdentifier;
```

<a id="discussion"></a>

## Discussion

If the known folder already exists on the server, the provider can specify the exact identifier of the item that needs to be used to back the known folder.
