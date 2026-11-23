> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsessionconfiguration/contentstyle

# contentStyle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The preferred interface style for your app’s content.

## Declaration

```swift
var contentStyle: CPContentStyle { get }
```

<a id="discussion"></a>

## Discussion

The value in this property tells you whether to render your app using a light or dark style. A vehicle might set the value in this property based on ambient light levels and update the value as the levels change.

## See Also

### Getting the configuration details

- [limitedUserInterfaces](limiteduserinterfaces.md): A bitmask of the interface restrictions that currently apply to your app.
- [supportsVideoPlayback](supportsvideoplayback.md): A Boolean value that indicates whether CarPlay supports playing video content.
- [CPContentStyle](../cpcontentstyle.md): The types of content style that the vehicle allows.
- [CPLimitableUserInterface](../cplimitableuserinterface.md): The types of interfaces to which a vehicle can limit access.

# contentStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The preferred interface style for your app’s content.

## Declaration

```objectivec
@property (nonatomic, readonly) CPContentStyle contentStyle;
```

<a id="discussion"></a>

## Discussion

The value in this property tells you whether to render your app using a light or dark style. A vehicle might set the value in this property based on ambient light levels and update the value as the levels change.

## See Also

### Getting the configuration details

- [limitedUserInterfaces](limiteduserinterfaces.md): A bitmask of the interface restrictions that currently apply to your app.
- [supportsVideoPlayback](supportsvideoplayback.md): A Boolean value that indicates whether CarPlay supports playing video content.
- [CPContentStyle](../cpcontentstyle.md): The types of content style that the vehicle allows.
- [CPLimitableUserInterface](../cplimitableuserinterface.md): The types of interfaces to which a vehicle can limit access.
