> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationviewstate](https://developer.apple.com/documentation/securityinterface/sfauthorizationviewstate)

# SFAuthorizationViewState (Swift)

**Framework:** Security Interface  
**Kind:** Structure  
**Availability:** macOS 10.3+

Defines the current state of the authorization view.

## Declaration

```swift
struct SFAuthorizationViewState
```

<a id="overview"></a>

## Overview

These constants are described in Constants in [SFAuthorizationView](sfauthorizationview.md).

## Topics

### Initializers

- [init(\_:)](sfauthorizationviewstate/init%28__%29.md)
- [init(rawValue:)](sfauthorizationviewstate/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](sfauthorizationviewstate/rawvalue.md)

### Constants

- [SFAuthorizationStartupState](sfauthorizationstartupstate.md): Indicates that the state is starting up
- [SFAuthorizationViewInProgressState](sfauthorizationviewinprogressstate.md): Indicates that the state is in progress
- [SFAuthorizationViewLockedState](sfauthorizationviewlockedstate.md): Indicates that the state is locked
- [SFAuthorizationViewUnlockedState](sfauthorizationviewunlockedstate.md): Indicates that the state is unlocked

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Reference

- [SFButtonType](sfbuttontype.md): These constants define the button types used by authorization plug-ins.
- [SFViewType](sfviewtype.md): These constants define the view type requested by the authorization plug-in.
- [SecurityInterface Constants](securityinterface-constants.md): Constants in the SecurityInterface framework.
- [SecurityInterface Data Types](securityinterface-data-types.md): Data types found in the Security Interface framework.
- [SecurityInterface Enumerations](securityinterface-enumerations.md)

# SFAuthorizationViewState (Objective-C)

**Framework:** Security Interface  
**Kind:** Enumeration  
**Availability:** macOS 10.3+

Defines the current state of the authorization view.

## Declaration

```objectivec
typedef enum { ... } SFAuthorizationViewState;
```

<a id="overview"></a>

## Overview

These constants are described in Constants in [SFAuthorizationView](sfauthorizationview.md).

## Topics

### Constants

- [SFAuthorizationStartupState](sfauthorizationstartupstate.md): Indicates that the state is starting up
- [SFAuthorizationViewInProgressState](sfauthorizationviewinprogressstate.md): Indicates that the state is in progress
- [SFAuthorizationViewLockedState](sfauthorizationviewlockedstate.md): Indicates that the state is locked
- [SFAuthorizationViewUnlockedState](sfauthorizationviewunlockedstate.md): Indicates that the state is unlocked

## See Also

### Reference

- [SFButtonType](sfbuttontype.md): These constants define the button types used by authorization plug-ins.
- [SFViewType](sfviewtype.md): These constants define the view type requested by the authorization plug-in.
- [SecurityInterface Constants](securityinterface-constants.md): Constants in the SecurityInterface framework.
- [SecurityInterface Data Types](securityinterface-data-types.md): Data types found in the Security Interface framework.
- [SecurityInterface Enumerations](securityinterface-enumerations.md)
