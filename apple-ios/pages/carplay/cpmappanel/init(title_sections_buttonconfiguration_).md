> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanel/init(title:sections:buttonconfiguration:)](https://developer.apple.com/documentation/carplay/cpmappanel/init(title:sections:buttonconfiguration:))

# init(title:sections:buttonConfiguration:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a new overlay page.

## Declaration

```swift
init(title: String?, sections: [CPMapPanelSection], buttonConfiguration: CPMapPanelButtonConfiguration?)
```

## Parameters

- `title`: An optional title for the page.
- `sections`: An array of @c CPPanelListSection objects describing the content of the page.
- `buttonConfiguration`: An optional button configuration for the page.

<a id="return-value"></a>

## Return Value

A new @c CPPanelList instance

# initWithTitle:sections:buttonConfiguration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a new overlay page.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title sections:(NSArray<CPMapPanelSection *> *) sections buttonConfiguration:(CPMapPanelButtonConfiguration *) buttonConfiguration;
```

## Parameters

- `title`: An optional title for the page.
- `sections`: An array of @c CPPanelListSection objects describing the content of the page.
- `buttonConfiguration`: An optional button configuration for the page.

<a id="return-value"></a>

## Return Value

A new @c CPPanelList instance
