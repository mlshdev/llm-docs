> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/init(callbacks:andengineref:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/init(callbacks:andengineref:))

# init(callbacks:andEngineRef:) (Swift)

**Framework:** Security Interface  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes a new authorization plug-in view with the specified callbacks and authorization engine handle.

## Declaration

```swift
init!(callbacks: UnsafePointer<AuthorizationCallbacks>!, andEngineRef engineRef: AuthorizationEngineRef!)
```

## Parameters

- `callbacks`: The structure of type [AuthorizationCallbacks](https://developer.apple.com/documentation/security/authorizationcallbacks) provided to the authorization plug-in in its [AuthorizationPluginCreate](https://developer.apple.com/documentation/security/authorizationplugincreate) function.
- `engineRef`: The handle of type [AuthorizationEngineRef](https://developer.apple.com/documentation/security/authorizationengineref) provided to the authorization plug-in in its MechanismCreate function.

<a id="return-value"></a>

## Return Value

An initialized `SFAuthorizationPluginView` instance.

## See Also

### Related Documentation

- [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995)

# initWithCallbacks:andEngineRef: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes a new authorization plug-in view with the specified callbacks and authorization engine handle.

## Declaration

```objectivec
- (id) initWithCallbacks:(const AuthorizationCallbacks *) callbacks andEngineRef:(AuthorizationEngineRef) engineRef;
```

## Parameters

- `callbacks`: The structure of type [AuthorizationCallbacks](https://developer.apple.com/documentation/security/authorizationcallbacks) provided to the authorization plug-in in its [AuthorizationPluginCreate](https://developer.apple.com/documentation/security/authorizationplugincreate) function.
- `engineRef`: The handle of type [AuthorizationEngineRef](https://developer.apple.com/documentation/security/authorizationengineref) provided to the authorization plug-in in its MechanismCreate function.

<a id="return-value"></a>

## Return Value

An initialized `SFAuthorizationPluginView` instance.

## See Also

### Related Documentation

- [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995)
