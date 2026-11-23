> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsessionconfigurationdelegate

# CPSessionConfigurationDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Methods you use to respond to changes in the CarPlay environment.

## Declaration

```swift
@MainActor protocol CPSessionConfigurationDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement this protocol in the custom delegate object you create and assign to a [CPSessionConfiguration](cpsessionconfiguration.md) object. When the CarPlay environment changes, the session configuration reports the changes to the methods of this protocol. For example, vehicles typically disable keyboard input when the vehicle starts moving and reenable it when the vehicle parks. Use your implementations of these methods to update your app’s interface.

## Topics

### Handling environmental changes

- [sessionConfiguration(\_:contentStyleChanged:)](cpsessionconfigurationdelegate/sessionconfiguration%28__contentstylechanged_%29.md): Tells the delegate about changes to the interface’s appearance.
- [sessionConfiguration(\_:limitedUserInterfacesChanged:)](cpsessionconfigurationdelegate/sessionconfiguration%28__limiteduserinterfaceschanged_%29.md): Tells the delegate about changes to the availability of interface features.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a session configuration

- [init(delegate:)](cpsessionconfiguration/init%28delegate_%29.md): Configures a session configuration with the custom delegate object you provide.

# CPSessionConfigurationDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Methods you use to respond to changes in the CarPlay environment.

## Declaration

```objectivec
@protocol CPSessionConfigurationDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Implement this protocol in the custom delegate object you create and assign to a [CPSessionConfiguration](cpsessionconfiguration.md) object. When the CarPlay environment changes, the session configuration reports the changes to the methods of this protocol. For example, vehicles typically disable keyboard input when the vehicle starts moving and reenable it when the vehicle parks. Use your implementations of these methods to update your app’s interface.

## Topics

### Handling environmental changes

- [sessionConfiguration:contentStyleChanged:](cpsessionconfigurationdelegate/sessionconfiguration%28__contentstylechanged_%29.md): Tells the delegate about changes to the interface’s appearance.
- [sessionConfiguration:limitedUserInterfacesChanged:](cpsessionconfigurationdelegate/sessionconfiguration%28__limiteduserinterfaceschanged_%29.md): Tells the delegate about changes to the availability of interface features.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a session configuration

- [initWithDelegate:](cpsessionconfiguration/init%28delegate_%29.md): Configures a session configuration with the custom delegate object you provide.
