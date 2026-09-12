> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprincipaldelegate/didestablishconnection(withhost:version:)](https://developer.apple.com/documentation/professional_video_applications/fxprincipaldelegate/didestablishconnection(withhost:version:))

# didEstablishConnection(withHost:version:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Notifies your XPC service that a connection was established with the host.

## Declaration

```swift
optional func didEstablishConnection(withHost hostBundleIdentifier: String!, version hostVersionString: String!)
```

## Parameters

- `hostBundleIdentifier`: The NSBundleIdentifier of the host application that launched this XPC service.
- `hostVersionString`: The NSShortVersionString of the host application that launched this XPC service.

<a id="discussion"></a>

## Discussion

Your delegate can implement this protocol to be informed of which host application is calling your plug-in.

# didEstablishConnectionWithHost:version: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Notifies your XPC service that a connection was established with the host.

## Declaration

```objectivec
- (void) didEstablishConnectionWithHost:(NSString *) hostBundleIdentifier version:(NSString *) hostVersionString;
```

## Parameters

- `hostBundleIdentifier`: The NSBundleIdentifier of the host application that launched this XPC service.
- `hostVersionString`: The NSShortVersionString of the host application that launched this XPC service.

<a id="discussion"></a>

## Discussion

Your delegate can implement this protocol to be informed of which host application is calling your plug-in.
