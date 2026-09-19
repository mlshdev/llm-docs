> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserkit/beimportmetadata/init(supportforimportfromfiles:)

# init(supportForImportFromFiles:) (Swift)

**Framework:** BrowserKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes import metadata with file support information.

## Declaration

```swift
init(supportForImportFromFiles supportImportFromFiles: Bool)
```

## Parameters

- `supportImportFromFiles`: A Boolean value that indicates whether the import supports data from files.

## See Also

### Creating import metadata

- [init(coder:)](init%28coder_%29.md): Initializes import metadata from a decoder.

# initWithSupportForImportFromFiles: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes import metadata with file support information.

## Declaration

```objectivec
- (instancetype) initWithSupportForImportFromFiles:(BOOL) supportImportFromFiles;
```

## Parameters

- `supportImportFromFiles`: A Boolean value that indicates whether the import supports data from files.
