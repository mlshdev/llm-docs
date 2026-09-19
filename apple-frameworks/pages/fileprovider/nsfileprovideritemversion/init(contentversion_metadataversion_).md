> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideritemversion/init(contentversion:metadataversion:)

# init(contentVersion:metadataVersion:) (Swift)

**Framework:** File Provider  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new version object.

## Declaration

```swift
init(contentVersion: Data, metadataVersion: Data)
```

## Parameters

- `contentVersion`: An opaque version object for the item’s content.
- `metadataVersion`: An opaque version object for the item’s metadata.

# initWithContentVersion:metadataVersion: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new version object.

## Declaration

```objectivec
- (instancetype) initWithContentVersion:(NSData *) contentVersion metadataVersion:(NSData *) metadataVersion;
```

## Parameters

- `contentVersion`: An opaque version object for the item’s content.
- `metadataVersion`: An opaque version object for the item’s metadata.
