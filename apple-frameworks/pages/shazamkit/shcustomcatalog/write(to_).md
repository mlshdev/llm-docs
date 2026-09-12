> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shcustomcatalog/write(to:)](https://developer.apple.com/documentation/shazamkit/shcustomcatalog/write(to:))

# write(to:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Saves the custom catalog to a local file.

> Use dataRepresentation

## Declaration

```swift
func write(to destinationURL: URL) throws
```

## Parameters

- `destinationURL`: A URL for the saved custom catalog file.

<a id="Discussion"></a>

## Discussion

If `destinationURL` is a directory, the system creates a `Signatures.shazamcatalog` file.

## See Also

### Loading and saving a custom catalog

- [add(from:)](add%28from_%29.md): Loads a saved custom catalog from a file.

# writeToURL:error: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Saves the custom catalog to a local file.

> Use dataRepresentation

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) destinationURL error:(NSError **) error;
```

## Parameters

- `destinationURL`: A URL for the saved custom catalog file.
- `error`: An output value in Objective-C that indicates the type of error; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

`YES` if the catalog writes to the file; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

If `destinationURL` is a directory, the system creates a `Signatures.shazamcatalog` file.

## See Also

### Loading and saving a custom catalog

- [addCustomCatalogFromURL:error:](add%28from_%29.md): Loads a saved custom catalog from a file.
