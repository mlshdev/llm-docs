> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnimagerenderingsessionconfiguration/init(quality:renderingversion:)](https://developer.apple.com/documentation/cinematic/cnimagerenderingsessionconfiguration/init(quality:renderingversion:))

# init(quality:renderingVersion:) (Swift)

**Framework:** Cinematic  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Initialize with a specific rendering version.

## Declaration

```swift
init?(quality: CNRenderingQuality, renderingVersion: Int)
```

## Parameters

- `quality`: The quality level for the rendering session.
- `renderingVersion`: Should be obtained from `latestRenderingVersion`. Pinning a version from a prior build ensures rendering output is stable across OS updates. Use `isRenderingVersionSupported:` to verify the version is still supported before using it.

# initWithQuality:renderingVersion: (Objective-C)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Initialize with a specific rendering version.

## Declaration

```objectivec
- (instancetype) initWithQuality:(CNRenderingQuality) quality renderingVersion:(NSInteger) renderingVersion;
```

## Parameters

- `quality`: The quality level for the rendering session.
- `renderingVersion`: Should be obtained from `latestRenderingVersion`. Pinning a version from a prior build ensures rendering output is stable across OS updates. Use `isRenderingVersionSupported:` to verify the version is still supported before using it.
