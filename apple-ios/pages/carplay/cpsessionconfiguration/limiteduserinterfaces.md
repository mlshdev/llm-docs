> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsessionconfiguration/limiteduserinterfaces

# limitedUserInterfaces (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A bitmask of the interface restrictions that currently apply to your app.

## Declaration

```swift
var limitedUserInterfaces: CPLimitableUserInterface { get }
```

<a id="discussion"></a>

## Discussion

Use this property to determine which interface features are unavailable or limited. A vehicle might limit interface features for safety reasons or to support vehicle constraints. For example, a vehicle might prevent an app from displaying a keyboard while the vehicle is in motion. The following example shows how to check for the available features from a delegate method:

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

### Getting the configuration details

- [contentStyle](contentstyle.md): The preferred interface style for your app’s content.
- [supportsVideoPlayback](supportsvideoplayback.md): A Boolean value that indicates whether CarPlay supports playing video content.
- [CPContentStyle](../cpcontentstyle.md): The types of content style that the vehicle allows.
- [CPLimitableUserInterface](../cplimitableuserinterface.md): The types of interfaces to which a vehicle can limit access.

# limitedUserInterfaces (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A bitmask of the interface restrictions that currently apply to your app.

## Declaration

```objectivec
@property (nonatomic, readonly) CPLimitableUserInterface limitedUserInterfaces;
```

<a id="discussion"></a>

## Discussion

Use this property to determine which interface features are unavailable or limited. A vehicle might limit interface features for safety reasons or to support vehicle constraints. For example, a vehicle might prevent an app from displaying a keyboard while the vehicle is in motion. The following example shows how to check for the available features from a delegate method:

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

### Getting the configuration details

- [contentStyle](contentstyle.md): The preferred interface style for your app’s content.
- [supportsVideoPlayback](supportsvideoplayback.md): A Boolean value that indicates whether CarPlay supports playing video content.
- [CPContentStyle](../cpcontentstyle.md): The types of content style that the vehicle allows.
- [CPLimitableUserInterface](../cplimitableuserinterface.md): The types of interfaces to which a vehicle can limit access.
