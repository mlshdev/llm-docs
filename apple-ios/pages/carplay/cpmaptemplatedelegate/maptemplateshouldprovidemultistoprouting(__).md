> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplateshouldprovidemultistoprouting(_:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplateshouldprovidemultistoprouting(_:))

# mapTemplateShouldProvideMultiStopRouting(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Determines if the template should provide UI for multi-stop routing while actively navigating, including the ability to add and remove stops.

## Declaration

```swift
optional func mapTemplateShouldProvideMultiStopRouting(_ mapTemplate: CPMapTemplate) -> Bool
```

<a id="return-value"></a>

## Return Value

YES if the template should provide multi-stop routing functionalities, otherwise NO

# mapTemplateShouldProvideMultiStopRouting: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Determines if the template should provide UI for multi-stop routing while actively navigating, including the ability to add and remove stops.

## Declaration

```objectivec
- (BOOL) mapTemplateShouldProvideMultiStopRouting:(CPMapTemplate *) mapTemplate;
```

<a id="return-value"></a>

## Return Value

YES if the template should provide multi-stop routing functionalities, otherwise NO
