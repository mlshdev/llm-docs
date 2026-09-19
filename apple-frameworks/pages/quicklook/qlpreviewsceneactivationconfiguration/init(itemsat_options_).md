> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/qlpreviewsceneactivationconfiguration/init(itemsat:options:)

# init(itemsAt:options:) (Swift)

**Framework:** Quick Look  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a preview scene configuration.

## Declaration

```swift
init(itemsAt urls: [URL], options: QLPreviewSceneActivationConfiguration.Options?)
```

## Parameters

- `urls`: An array of the URLs to preview.
- `options`: An optional configuration that contains the index of the initial item to preview.

# initWithItemsAtURLs:options: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a preview scene configuration.

## Declaration

```objectivec
- (instancetype) initWithItemsAtURLs:(NSArray<NSURL *> *) urls options:(QLPreviewSceneOptions *) options;
```

## Parameters

- `urls`: An array of the URLs to preview.
- `options`: An optional configuration that contains the index of the initial item to preview.
