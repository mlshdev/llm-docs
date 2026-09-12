> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfiguration/init(objects:)](https://developer.apple.com/documentation/uikit/uiactivityitemsconfiguration/init(objects:))

# init(objects:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns an activity items configuration with the specified objects.

## Declaration

```swift
init(objects: [any NSItemProviderWriting])
```

## See Also

### Creating an activity items configuration

- [init(itemProviders:)](init%28itemproviders_%29.md): Initializes and returns an activity items configuration with the specified item providers.

# initWithObjects: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns an activity items configuration with the specified objects.

## Declaration

```objectivec
- (instancetype) initWithObjects:(NSArray<id<NSItemProviderWriting>> *) objects;
```

## See Also

### Creating an activity items configuration

- [initWithItemProviders:](init%28itemproviders_%29.md): Initializes and returns an activity items configuration with the specified item providers.
- [activityItemsConfigurationWithObjects:](activityitemsconfigurationwithobjects_.md): Creates an activity items configuration with the specified objects.
- [activityItemsConfigurationWithItemProviders:](activityitemsconfigurationwithitemproviders_.md): Creates an activity items configuration with the specified item providers.
