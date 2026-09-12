> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprincipal/embeddedprincipal()](https://developer.apple.com/documentation/professional_video_applications/fxprincipal/embeddedprincipal())

# embeddedPrincipal() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Method  
**Availability:** FxPlug 3.1+

Start your XPC service listening for connections from the host application.

## Declaration

```swift
class func embeddedPrincipal() -> Any!
```

<a id="return-value"></a>

## Return Value

An object used for XPC communication with the in-process embedded principal.

<a id="discussion"></a>

## Discussion

If this method returns `nil`, the host app is unable to communicate with your plug-in’s XPC service.

## See Also

### Type Methods

- [startServicePrincipal()](startserviceprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipal(with:)](startserviceprincipal%28with_%29.md): Start your XPC service listening for connections from the host application.

# embeddedPrincipal (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Method

Start your XPC service listening for connections from the host application.

## Declaration

```objectivec
+ (id) embeddedPrincipal;
```

<a id="return-value"></a>

## Return Value

An object used for XPC communication with the in-process embedded principal.

<a id="discussion"></a>

## Discussion

If this method returns `nil`, the host app is unable to communicate with your plug-in’s XPC service.

## See Also

### Type Methods

- [startServicePrincipal](startserviceprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipalWithDelegate:](startserviceprincipal%28with_%29.md): Start your XPC service listening for connections from the host application.
