> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationreading/activityitemsconfigurationpreviewforitem(at:intent:suggestedsize:)](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationreading/activityitemsconfigurationpreviewforitem(at:intent:suggestedsize:))

# activityItemsConfigurationPreviewForItem(at:intent:suggestedSize:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an activity items configuration preview for the specified item and preview size.

## Declaration

```swift
optional func activityItemsConfigurationPreviewForItem(at index: Int, intent: UIActivityItemsConfigurationPreviewIntent, suggestedSize: CGSize) -> NSItemProvider?
```

## See Also

### Managing Previews

- [UIActivityItemsConfigurationPreviewIntent](../uiactivityitemsconfigurationpreviewintent.md): A structure that specifies the types of activity item previews.

# activityItemsConfigurationPreviewForItemAtIndex:intent:suggestedSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an activity items configuration preview for the specified item and preview size.

## Declaration

```objectivec
- (NSItemProvider *) activityItemsConfigurationPreviewForItemAtIndex:(NSInteger) index intent:(UIActivityItemsConfigurationPreviewIntent) intent suggestedSize:(CGSize) suggestedSize;
```

## See Also

### Managing Previews

- [UIActivityItemsConfigurationPreviewIntent](../uiactivityitemsconfigurationpreviewintent.md): A structure that specifies the types of activity item previews.
