> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/fxprincipalapi/serviceprincipal()

# servicePrincipal() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Retrieves a pointer to the proxy object used for sandboxed out-of-process tasks.

## Declaration

```swift
func servicePrincipal() -> Any!
```

<a id="return-value"></a>

## Return Value

An object used for XPC communication with the out-of-process service principal.

<a id="discussion"></a>

## Discussion

If this method returns `nil`, the host app is unable to communicate with your plug-in’s XPC service.

# servicePrincipal (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Retrieves a pointer to the proxy object used for sandboxed out-of-process tasks.

## Declaration

```objectivec
- (id) servicePrincipal;
```

<a id="return-value"></a>

## Return Value

An object used for XPC communication with the out-of-process service principal.

<a id="discussion"></a>

## Discussion

If this method returns `nil`, the host app is unable to communicate with your plug-in’s XPC service.
