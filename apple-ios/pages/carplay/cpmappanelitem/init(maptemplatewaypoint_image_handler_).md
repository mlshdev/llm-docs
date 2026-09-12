> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanelitem/init(maptemplatewaypoint:image:handler:)](https://developer.apple.com/documentation/carplay/cpmappanelitem/init(maptemplatewaypoint:image:handler:))

# init(mapTemplateWaypoint:image:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPMapTemplateWaypoint.

## Declaration

```swift
init(mapTemplateWaypoint: CPMapTemplateWaypoint, image: UIImage?, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

# initWithMapTemplateWaypoint:image:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map template item wrapping a @c CPMapTemplateWaypoint.

## Declaration

```objectivec
- (instancetype) initWithMapTemplateWaypoint:(CPMapTemplateWaypoint *) mapTemplateWaypoint image:(UIImage *) image handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```
