> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shcustomcatalog/add(from:)](https://developer.apple.com/documentation/shazamkit/shcustomcatalog/add(from:))

# add(from:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a saved custom catalog from a file.

## Declaration

```swift
func add(from customCatalogURL: URL) throws
```

## Parameters

- `customCatalogURL`: The file URL for a custom catalog.

## See Also

### Loading and saving a custom catalog

- [write(to:)](write%28to_%29.md): Deprecated. Saves the custom catalog to a local file.

# addCustomCatalogFromURL:error: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a saved custom catalog from a file.

## Declaration

```objectivec
- (BOOL) addCustomCatalogFromURL:(NSURL *) customCatalogURL error:(NSError **) error;
```

## Parameters

- `customCatalogURL`: The file URL for a custom catalog.
- `error`: An output value in Objective-C that indicates the type of error; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Loading and saving a custom catalog

- [writeToURL:error:](write%28to_%29.md): Deprecated. Saves the custom catalog to a local file.
