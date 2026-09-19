> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/fxprincipaldelegate/didestablishconnection(withhost:version:)

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
