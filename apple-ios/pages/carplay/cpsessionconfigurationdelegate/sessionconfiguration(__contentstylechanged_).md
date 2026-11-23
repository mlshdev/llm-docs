> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsessionconfigurationdelegate/sessionconfiguration(_:contentstylechanged:)

# sessionConfiguration(\_:contentStyleChanged:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate about changes to the interface’s appearance.

## Declaration

```swift
optional func sessionConfiguration(_ sessionConfiguration: CPSessionConfiguration, contentStyleChanged contentStyle: CPContentStyle)
```

## Parameters

- `sessionConfiguration`: The session configuration object that reports the change.

<a id="discussion"></a>

## Discussion

Use this method to toggle your interface between a light or dark style. When the ambient light levels change, a vehicle might update this value to ensure content on the center display remains easy to see.

## See Also

### Handling environmental changes

- [sessionConfiguration(\_:limitedUserInterfacesChanged:)](sessionconfiguration%28__limiteduserinterfaceschanged_%29.md): Tells the delegate about changes to the availability of interface features.

# sessionConfiguration:contentStyleChanged: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate about changes to the interface’s appearance.

## Declaration

```objectivec
- (void) sessionConfiguration:(CPSessionConfiguration *) sessionConfiguration contentStyleChanged:(CPContentStyle) contentStyle;
```

## Parameters

- `sessionConfiguration`: The session configuration object that reports the change.

<a id="discussion"></a>

## Discussion

Use this method to toggle your interface between a light or dark style. When the ambient light levels change, a vehicle might update this value to ensure content on the center display remains easy to see.

## See Also

### Handling environmental changes

- [sessionConfiguration:limitedUserInterfacesChanged:](sessionconfiguration%28__limiteduserinterfaceschanged_%29.md): Tells the delegate about changes to the availability of interface features.
