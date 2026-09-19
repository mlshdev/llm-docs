> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsimagerep/registrydidchangenotification

# registryDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted whenever the image representation class registry changes.

## Declaration

```swift
class let registryDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the image class that is registered or unregistered. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSImageRep.RegistryDidChangeMessage](registrydidchangemessage.md).

# NSImageRepRegistryDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted whenever the image representation class registry changes.

## Declaration

```objectivec
extern NSNotificationName NSImageRepRegistryDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the image class that is registered or unregistered. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSImageRep.RegistryDidChangeMessage](registrydidchangemessage.md).

## See Also

### Notifications

- [NSImageRepRegistryChangedNotification](../nsimagerepregistrychangednotification.md): Deprecated. Posted whenever the image representation class registry changes.
