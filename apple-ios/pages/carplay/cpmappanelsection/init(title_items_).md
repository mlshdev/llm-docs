> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanelsection/init(title:items:)](https://developer.apple.com/documentation/carplay/cpmappanelsection/init(title:items:))

# init(title:items:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a section with items conforming to @c CPMapPanelItem. Only items that adopt @c CPMapPanelItem are supported when displaying panel sections on a @c CPMapTemplate.

## Declaration

```swift
init(title: String?, items: [CPMapPanelItem])
```

## Parameters

- `title`: An optional title for the section.
- `items`: An array of @c CPMapPanelItem conforming objects to display in the section.

# initWithTitle:items: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a section with items conforming to @c CPMapPanelItem. Only items that adopt @c CPMapPanelItem are supported when displaying panel sections on a @c CPMapTemplate.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title items:(NSArray<CPMapPanelItem *> *) items;
```

## Parameters

- `title`: An optional title for the section.
- `items`: An array of @c CPMapPanelItem conforming objects to display in the section.
