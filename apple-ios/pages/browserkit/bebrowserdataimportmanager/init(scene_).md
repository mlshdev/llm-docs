> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserkit/bebrowserdataimportmanager/init(scene:)

# init(scene:) (Swift)

**Framework:** BrowserKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes an import manager for a window scene.

## Declaration

```swift
@MainActor init(scene: UIWindowScene?)
```

## Parameters

- `scene`: Your app’s window scene. The manager presents the import sheet in this window.

# initWithScene: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes an import manager for a window scene.

## Declaration

```objectivec
- (instancetype) initWithScene:(UIWindowScene *) scene;
```

## Parameters

- `scene`: Your app’s window scene. The manager presents the import sheet in this window.
