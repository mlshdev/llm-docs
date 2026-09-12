> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/placeholderurl(for:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/placeholderurl(for:))

# placeholderURL(for:) (Swift)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 8.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a placeholder URL for a given document URL.

> Use the [NSFileProviderManager](../nsfileprovidermanager.md) class’s [placeholderURL(for:)](../nsfileprovidermanager/placeholderurl%28for_%29.md) method instead.

## Declaration

```swift
class func placeholderURL(for url: URL) -> URL
```

## Parameters

- `url`: The document URL to be converted.

<a id="return-value"></a>

## Return Value

A placeholder URL for the given document.

<a id="Discussion"></a>

## Discussion

This method maps file URLs into their corresponding placeholder URLs. You typically call this method to generate the placeholder URL before calling [writePlaceholder(at:withMetadata:)](writeplaceholder%28at_withmetadata_%29.md).

You must not override this method.

## See Also

### Managing placeholders

- [writePlaceholder(at:withMetadata:)](writeplaceholder%28at_withmetadata_%29.md): Deprecated. Writes a document placeholder with the provided metadata.

# placeholderURLForURL: (Objective-C)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 11.0) · iPadOS 11.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a placeholder URL for a given document URL.

> Use the [NSFileProviderManager](../nsfileprovidermanager.md) class’s [placeholderURLForURL:](../nsfileprovidermanager/placeholderurl%28for_%29.md) method instead.

## Declaration

```objectivec
+ (NSURL *) placeholderURLForURL:(NSURL *) url;
```

## Parameters

- `url`: The document URL to be converted.

<a id="return-value"></a>

## Return Value

A placeholder URL for the given document.

<a id="Discussion"></a>

## Discussion

This method maps file URLs into their corresponding placeholder URLs. You typically call this method to generate the placeholder URL before calling [writePlaceholderAtURL:withMetadata:error:](writeplaceholder%28at_withmetadata_%29.md).

You must not override this method.

## See Also

### Managing placeholders

- [writePlaceholderAtURL:withMetadata:error:](writeplaceholder%28at_withmetadata_%29.md): Deprecated. Writes a document placeholder with the provided metadata.
