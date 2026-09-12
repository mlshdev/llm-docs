> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axfeatureoverridesession](https://developer.apple.com/documentation/accessibility/axfeatureoverridesession)

# AXFeatureOverrideSession (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A token object that represents an override session held by your app.

## Declaration

```swift
class AXFeatureOverrideSession
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Override sessions

- [AXFeatureOverrideSessionManager](axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSession.Options](axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionErrorDomain](axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError](axfeatureoverridesessionerror-swift.struct.md)
- [AXFeatureOverrideSessionError.Code](axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)

# AXFeatureOverrideSession (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A token object that represents an override session held by your app.

## Declaration

```objectivec
@interface AXFeatureOverrideSession : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Override sessions

- [AXFeatureOverrideSessionManager](axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSessionOptions](axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionErrorDomain](axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError](axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)
