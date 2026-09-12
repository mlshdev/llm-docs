> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfiguration/previewprovider](https://developer.apple.com/documentation/uikit/uiactivityitemsconfiguration/previewprovider)

# previewProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A closure that provides previews for the activity items.

## Declaration

```swift
var previewProvider: ((Int, UIActivityItemsConfigurationPreviewIntent, CGSize) -> NSItemProvider?)? { get set }
```

## See Also

### Managing previews

- [UIActivityItemsConfigurationPreviewIntent](../uiactivityitemsconfigurationpreviewintent.md): A structure that specifies the types of activity item previews.

# previewProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A closure that provides previews for the activity items.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSItemProvider * (^previewProvider)(NSInteger index, UIActivityItemsConfigurationPreviewIntent intent, CGSize suggestedSize);
```

## See Also

### Managing previews

- [UIActivityItemsConfigurationPreviewIntent](../uiactivityitemsconfigurationpreviewintent.md): A structure that specifies the types of activity item previews.
