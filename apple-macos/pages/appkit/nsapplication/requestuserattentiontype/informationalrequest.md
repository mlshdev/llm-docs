> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsapplication/requestuserattentiontype/informationalrequest

# NSApplication.RequestUserAttentionType.informationalRequest (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The user attention request is an informational request.

## Declaration

```swift
case informationalRequest
```

<a id="Discussion"></a>

## Discussion

The dock icon will bounce for one second. The request, though, remains active until either the app becomes active or the request is canceled.

## See Also

### Constants

- [NSApplication.RequestUserAttentionType.criticalRequest](criticalrequest.md): The user attention request is a critical request.

# NSInformationalRequest (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The user attention request is an informational request.

## Declaration

```objectivec
NSInformationalRequest
```

<a id="Discussion"></a>

## Discussion

The dock icon will bounce for one second. The request, though, remains active until either the app becomes active or the request is canceled.

## See Also

### Constants

- [NSCriticalRequest](criticalrequest.md): The user attention request is a critical request.
