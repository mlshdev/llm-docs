> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadconfiguration/init(asset:title:)](https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/init(asset:title:))

# init(asset:title:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a download configuration for a media asset.

## Declaration

```swift
convenience init(asset: AVURLAsset, title: String)
```

## Parameters

- `asset`: The asset the task downloads.
- `title`: A human-readable title for this asset. The system displays this value in the usage pane of the Settings app; choose a title suitable for display in the user’s preferred language.

# downloadConfigurationWithAsset:title: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a download configuration for a media asset.

## Declaration

```objectivec
+ (instancetype) downloadConfigurationWithAsset:(AVURLAsset *) asset title:(NSString *) title;
```

## Parameters

- `asset`: The asset the task downloads.
- `title`: A human-readable title for this asset. The system displays this value in the usage pane of the Settings app; choose a title suitable for display in the user’s preferred language.
