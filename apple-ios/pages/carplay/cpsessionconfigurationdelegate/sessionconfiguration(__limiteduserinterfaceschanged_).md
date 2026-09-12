> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpsessionconfigurationdelegate/sessionconfiguration(_:limiteduserinterfaceschanged:)](https://developer.apple.com/documentation/carplay/cpsessionconfigurationdelegate/sessionconfiguration(_:limiteduserinterfaceschanged:))

# sessionConfiguration(\_:limitedUserInterfacesChanged:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the system changed keyboard or list limits on the user interface.

## Declaration

```swift
optional func sessionConfiguration(_ sessionConfiguration: CPSessionConfiguration, limitedUserInterfacesChanged limitedUserInterfaces: CPLimitableUserInterface)
```

## Parameters

- `sessionConfiguration`: The current session configuration.
- `limitedUserInterfaces`: A bit mask value indicating the user interface limits that changed.

# sessionConfiguration:limitedUserInterfacesChanged: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the system changed keyboard or list limits on the user interface.

## Declaration

```objectivec
- (void) sessionConfiguration:(CPSessionConfiguration *) sessionConfiguration limitedUserInterfacesChanged:(CPLimitableUserInterface) limitedUserInterfaces;
```

## Parameters

- `sessionConfiguration`: The current session configuration.
- `limitedUserInterfaces`: A bit mask value indicating the user interface limits that changed.
