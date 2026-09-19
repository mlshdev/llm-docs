> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/fxprincipal/startserviceprincipal()

# startServicePrincipal() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Method  
**Availability:** FxPlug 3.1+

Start your XPC service listening for connections from the host application.

## Declaration

```swift
class func startServicePrincipal()
```

<a id="discussion"></a>

## Discussion

The purpose of this method is so that plug-ins don’t have to link against `PlugInKit.framework`. You can simply link against `FxPlug.framework` and call `[FxPrincipal startServicePrincipal]` from the service principal’s `main()` function.

## See Also

### Type Methods

- [embeddedPrincipal()](embeddedprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipal(with:)](startserviceprincipal%28with_%29.md): Start your XPC service listening for connections from the host application.

# startServicePrincipal (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Method

Start your XPC service listening for connections from the host application.

## Declaration

```objectivec
+ (void) startServicePrincipal;
```

<a id="discussion"></a>

## Discussion

The purpose of this method is so that plug-ins don’t have to link against `PlugInKit.framework`. You can simply link against `FxPlug.framework` and call `[FxPrincipal startServicePrincipal]` from the service principal’s `main()` function.

## See Also

### Type Methods

- [embeddedPrincipal](embeddedprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipalWithDelegate:](startserviceprincipal%28with_%29.md): Start your XPC service listening for connections from the host application.
