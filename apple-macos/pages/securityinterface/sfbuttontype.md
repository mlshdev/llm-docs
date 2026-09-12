> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfbuttontype](https://developer.apple.com/documentation/securityinterface/sfbuttontype)

# SFButtonType (Swift)

**Framework:** Security Interface  
**Kind:** Structure  
**Availability:** macOS 10.3+

These constants define the button types used by authorization plug-ins.

## Declaration

```swift
struct SFButtonType
```

## Topics

### Initializers

- [init(\_:)](sfbuttontype/init%28__%29.md)
- [init(rawValue:)](sfbuttontype/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](sfbuttontype/rawvalue.md)

### Constants

- [SFButtonTypeCancel](sfbuttontypecancel.md): Indicates the Cancel button was pressed.
- [SFButtonTypeOK](sfbuttontypeok.md): Indicates the OK button was pressed.
- [SFButtonTypeBack](sfbuttontypeback.md): Indicates the Back button was pressed.
- [SFButtonTypeLogin](sfbuttontypelogin.md): Indicates the Login button was pressed.

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
- [SFViewType](sfviewtype.md): These constants define the view type requested by the authorization plug-in.
- [SecurityInterface Constants](securityinterface-constants.md): Constants in the SecurityInterface framework.
- [SecurityInterface Data Types](securityinterface-data-types.md): Data types found in the Security Interface framework.
- [SecurityInterface Enumerations](securityinterface-enumerations.md)

# SFButtonType (Objective-C)

**Framework:** Security Interface  
**Kind:** Enumeration  
**Availability:** macOS 10.3+

These constants define the button types used by authorization plug-ins.

## Declaration

```objectivec
typedef enum { ... } SFButtonType;
```

## Topics

### Constants

- [SFButtonTypeCancel](sfbuttontypecancel.md): Indicates the Cancel button was pressed.
- [SFButtonTypeOK](sfbuttontypeok.md): Indicates the OK button was pressed.
- [SFButtonTypeBack](sfbuttontypeback.md): Indicates the Back button was pressed.
- [SFButtonTypeLogin](sfbuttontypelogin.md): Indicates the Login button was pressed.

## See Also

### Reference

- [SFAuthorizationViewState](sfauthorizationviewstate.md): Defines the current state of the authorization view.
- [SFViewType](sfviewtype.md): These constants define the view type requested by the authorization plug-in.
- [SecurityInterface Constants](securityinterface-constants.md): Constants in the SecurityInterface framework.
- [SecurityInterface Data Types](securityinterface-data-types.md): Data types found in the Security Interface framework.
- [SecurityInterface Enumerations](securityinterface-enumerations.md)
