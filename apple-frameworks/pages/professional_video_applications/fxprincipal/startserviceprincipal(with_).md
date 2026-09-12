> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprincipal/startserviceprincipal(with:)](https://developer.apple.com/documentation/professional_video_applications/fxprincipal/startserviceprincipal(with:))

# startServicePrincipal(with:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Method  
**Availability:** FxPlug 4.1+

Start your XPC service listening for connections from the host application.

## Declaration

```swift
class func startServicePrincipal(with delegate: (any FxPrincipalDelegate)!)
```

## Parameters

- `delegate`: An object that implements the [FxPrincipalDelegate](../fxprincipaldelegate.md) or `nil`.

<a id="discussion"></a>

## Discussion

Once a connection is established, your delegate will be informed of the host application’s ID and version.

## See Also

### Type Methods

- [embeddedPrincipal()](embeddedprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipal()](startserviceprincipal%28%29.md): Start your XPC service listening for connections from the host application.

# startServicePrincipalWithDelegate: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Method

Start your XPC service listening for connections from the host application.

## Declaration

```objectivec
+ (void) startServicePrincipalWithDelegate:(id<FxPrincipalDelegate>) delegate;
```

## Parameters

- `delegate`: An object that implements the [FxPrincipalDelegate](../fxprincipaldelegate.md) or `nil`.

<a id="discussion"></a>

## Discussion

Once a connection is established, your delegate will be informed of the host application’s ID and version.

## See Also

### Type Methods

- [embeddedPrincipal](embeddedprincipal%28%29.md): Start your XPC service listening for connections from the host application.
- [startServicePrincipal](startserviceprincipal%28%29.md): Start your XPC service listening for connections from the host application.
