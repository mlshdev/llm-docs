> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplateshouldprovideroutesharing(_:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplateshouldprovideroutesharing(_:))

# mapTemplateShouldProvideRouteSharing(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Determines if the template should provide route sharing information to the vehicle. Apps that participate in route sharing will donate navigation information to the vehicle including the current route, a list of waypoints, and other metadata that allows the vehicle to track the user’s preferred route to their destination.

## Declaration

```swift
optional func mapTemplateShouldProvideRouteSharing(_ mapTemplate: CPMapTemplate) -> Bool
```

<a id="return-value"></a>

## Return Value

YES if the template should provide route sharing, otherwise NO

# mapTemplateShouldProvideRouteSharing: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Determines if the template should provide route sharing information to the vehicle. Apps that participate in route sharing will donate navigation information to the vehicle including the current route, a list of waypoints, and other metadata that allows the vehicle to track the user’s preferred route to their destination.

## Declaration

```objectivec
- (BOOL) mapTemplateShouldProvideRouteSharing:(CPMapTemplate *) mapTemplate;
```

<a id="return-value"></a>

## Return Value

YES if the template should provide route sharing, otherwise NO
