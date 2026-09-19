> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/safariservices/sfaddtohomescreeninfo/init(manifest:)

# init(manifest:) (Swift)

**Framework:** Safari Services  
**Kind:** Initializer  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · visionOS 2.2+

Initializes a Home Screen information object with the supplied web app manifest.

## Declaration

```swift
init(manifest: BEWebAppManifest)
```

## Parameters

- `manifest`: The web app manifest for the bookmark.

# initWithManifest: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · visionOS 2.2+

Initializes a Home Screen information object with the supplied web app manifest.

## Declaration

```objectivec
- (SFAddToHomeScreenInfo *) initWithManifest:(BEWebAppManifest *) manifest;
```

## Parameters

- `manifest`: The web app manifest for the bookmark.
