> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpsessionconfigurationdelegate/sessionconfiguration(_:contentstylechanged:)](https://developer.apple.com/documentation/carplay/cpsessionconfigurationdelegate/sessionconfiguration(_:contentstylechanged:))

# sessionConfiguration(\_:contentStyleChanged:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the vehicle changed its selected content style.

## Declaration

```swift
optional func sessionConfiguration(_ sessionConfiguration: CPSessionConfiguration, contentStyleChanged contentStyle: CPContentStyle)
```

## Parameters

- `sessionConfiguration`: The current session configuration.
- `contentStyle`: The vehicle’s selected content style.

<a id="Discussion"></a>

## Discussion

The vehicle selects the content style according to the ambient light level, which can change periodically. Use this method to make sure your navigation app is always drawing the most appropriate style of map content in its base view.

# sessionConfiguration:contentStyleChanged: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the vehicle changed its selected content style.

## Declaration

```objectivec
- (void) sessionConfiguration:(CPSessionConfiguration *) sessionConfiguration contentStyleChanged:(CPContentStyle) contentStyle;
```

## Parameters

- `sessionConfiguration`: The current session configuration.
- `contentStyle`: The vehicle’s selected content style.

<a id="Discussion"></a>

## Discussion

The vehicle selects the content style according to the ambient light level, which can change periodically. Use this method to make sure your navigation app is always drawing the most appropriate style of map content in its base view.
