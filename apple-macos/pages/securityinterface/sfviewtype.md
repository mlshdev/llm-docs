> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfviewtype](https://developer.apple.com/documentation/securityinterface/sfviewtype)

# SFViewType (Swift)

**Framework:** Security Interface  
**Kind:** Structure  
**Availability:** macOS 10.3+

These constants define the view type requested by the authorization plug-in.

## Declaration

```swift
struct SFViewType
```

## Topics

### Initializers

- [init(\_:)](sfviewtype/init%28__%29.md)
- [init(rawValue:)](sfviewtype/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](sfviewtype/rawvalue.md)

### Constants

- [SFViewTypeIdentityAndCredentials](sfviewtypeidentityandcredentials.md): Indicates a view that contains controls for identity and credentials was requested by the authorization plug-in.
- [SFViewTypeCredentials](sfviewtypecredentials.md): Indicates a view that contains controls for credentials was requested by the authorization plug-in.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Reference

- [SFAuthorizationViewState](sfauthorizationviewstate.md): Defines the current state of the authorization view.
- [SFButtonType](sfbuttontype.md): These constants define the button types used by authorization plug-ins.
- [SecurityInterface Constants](securityinterface-constants.md): Constants in the SecurityInterface framework.
- [SecurityInterface Data Types](securityinterface-data-types.md): Data types found in the Security Interface framework.
- [SecurityInterface Enumerations](securityinterface-enumerations.md)

# SFViewType (Objective-C)

**Framework:** Security Interface  
**Kind:** Enumeration  
**Availability:** macOS 10.3+

These constants define the view type requested by the authorization plug-in.

## Declaration

```objectivec
typedef enum { ... } SFViewType;
```

## Topics

### Constants

- [SFViewTypeIdentityAndCredentials](sfviewtypeidentityandcredentials.md): Indicates a view that contains controls for identity and credentials was requested by the authorization plug-in.
- [SFViewTypeCredentials](sfviewtypecredentials.md): Indicates a view that contains controls for credentials was requested by the authorization plug-in.

## See Also

### Reference

- [SFAuthorizationViewState](sfauthorizationviewstate.md): Defines the current state of the authorization view.
- [SFButtonType](sfbuttontype.md): These constants define the button types used by authorization plug-ins.
- [SecurityInterface Constants](securityinterface-constants.md): Constants in the SecurityInterface framework.
- [SecurityInterface Data Types](securityinterface-data-types.md): Data types found in the Security Interface framework.
- [SecurityInterface Enumerations](securityinterface-enumerations.md)
