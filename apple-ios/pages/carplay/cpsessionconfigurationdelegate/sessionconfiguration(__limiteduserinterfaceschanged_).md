> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsessionconfigurationdelegate/sessionconfiguration(_:limiteduserinterfaceschanged:)

# sessionConfiguration(\_:limitedUserInterfacesChanged:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate about changes to the availability of interface features.

## Declaration

```swift
optional func sessionConfiguration(_ sessionConfiguration: CPSessionConfiguration, limitedUserInterfacesChanged limitedUserInterfaces: CPLimitableUserInterface)
```

## Parameters

- `sessionConfiguration`: The session configuration object that reports the change.
- `limitedUserInterfaces`: The new set of limited user interfaces. Use this value to determine which features to enable or disable in your app. For example, if this value contains the [keyboard](../cplimitableuserinterface/keyboard.md) value, don’t display any templates that show a virtual keyboard.

<a id="discussion"></a>

## Discussion

The following example shows how to determine if keyboard interfaces are supported.

**Swift**

```swift
func sessionConfiguration(_ sessionConfiguration: CPSessionConfiguration,
                                           limitedUserInterfacesChanged limitedUserInterfaces: CPLimitableUserInterface) {
    let hasKeyboard = limitedUserInterfaces.contains(.keyboard)
    // Do something with the value.
}
```

**Objective-C**

```objc
- (void)sessionConfiguration:(CPSessionConfiguration *)sessionConfiguration limitedUserInterfacesChanged:(CPLimitableUserInterface)limitedUserInterfaces {
    Boolean hasKeyboard = limitedUserInterfaces & CPLimitableUserInterfaceKeyboard;
    // Do something with the value.
}
```

## See Also

### Handling environmental changes

- [sessionConfiguration(\_:contentStyleChanged:)](sessionconfiguration%28__contentstylechanged_%29.md): Tells the delegate about changes to the interface’s appearance.

# sessionConfiguration:limitedUserInterfacesChanged: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate about changes to the availability of interface features.

## Declaration

```objectivec
- (void) sessionConfiguration:(CPSessionConfiguration *) sessionConfiguration limitedUserInterfacesChanged:(CPLimitableUserInterface) limitedUserInterfaces;
```

## Parameters

- `sessionConfiguration`: The session configuration object that reports the change.
- `limitedUserInterfaces`: The new set of limited user interfaces. Use this value to determine which features to enable or disable in your app. For example, if this value contains the [CPLimitableUserInterfaceKeyboard](../cplimitableuserinterface/keyboard.md) value, don’t display any templates that show a virtual keyboard.

<a id="discussion"></a>

## Discussion

The following example shows how to determine if keyboard interfaces are supported.

**Swift**

```swift
func sessionConfiguration(_ sessionConfiguration: CPSessionConfiguration,
                                           limitedUserInterfacesChanged limitedUserInterfaces: CPLimitableUserInterface) {
    let hasKeyboard = limitedUserInterfaces.contains(.keyboard)
    // Do something with the value.
}
```

**Objective-C**

```objc
- (void)sessionConfiguration:(CPSessionConfiguration *)sessionConfiguration limitedUserInterfacesChanged:(CPLimitableUserInterface)limitedUserInterfaces {
    Boolean hasKeyboard = limitedUserInterfaces & CPLimitableUserInterfaceKeyboard;
    // Do something with the value.
}
```

## See Also

### Handling environmental changes

- [sessionConfiguration:contentStyleChanged:](sessionconfiguration%28__contentstylechanged_%29.md): Tells the delegate about changes to the interface’s appearance.
