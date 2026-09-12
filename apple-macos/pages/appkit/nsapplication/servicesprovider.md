> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/servicesprovider](https://developer.apple.com/documentation/appkit/nsapplication/servicesprovider)

# servicesProvider (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the services the current app advertises in the Services menu of other apps.

## Declaration

```swift
var servicesProvider: Any? { get set }
```

<a id="return-value"></a>

## Return Value

The app’s service provider object.

<a id="Discussion"></a>

## Discussion

The service provider performs all advertised services for the app. When another app requests a service from the current app, the app object forwards the request to its service provider. Service requests can arrive immediately after the service provider is set, so assign an object to this property only when your app is ready to receive requests.

## See Also

### Providing services

- [validRequestor(forSendType:returnType:)](validrequestor%28forsendtype_returntype_%29.md): Indicates whether the receiver can send and receive the specified pasteboard types.

# servicesProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the services the current app advertises in the Services menu of other apps.

## Declaration

```objectivec
@property (strong, nullable) id servicesProvider;
```

<a id="return-value"></a>

## Return Value

The app’s service provider object.

<a id="Discussion"></a>

## Discussion

The service provider performs all advertised services for the app. When another app requests a service from the current app, the app object forwards the request to its service provider. Service requests can arrive immediately after the service provider is set, so assign an object to this property only when your app is ready to receive requests.

## See Also

### Providing services

- [validRequestorForSendType:returnType:](validrequestor%28forsendtype_returntype_%29.md): Indicates whether the receiver can send and receive the specified pasteboard types.
