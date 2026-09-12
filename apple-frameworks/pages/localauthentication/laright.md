> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laright](https://developer.apple.com/documentation/localauthentication/laright)

# LARight (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A grouped set of requirements that gate access to a resource or operation.

## Declaration

```swift
class LARight
```

<a id="overview"></a>

## Overview

Use [LARight](laright.md) instances to protect access to portions of your app that may contain sensitive information. By default, [LARight](laright.md) instances require people to authenticate with Face ID, Touch ID, Apple Watch, or the device passcode. The following creates an [LARight](laright.md) with the default authentication requirements:

```swift
let loginRight = LARight()
    
func login() async throws {
    try await loginRight.authorize(localizedReason: "Access sandcastle competition designs")
}

func logout() async {
    await loginRight.deauthorize()
}
```

## Topics

### Authorizing a right

- [init()](laright/init%28%29.md): Creates a right using the default authorization requirements.
- [init(requirement:)](laright/init%28requirement_%29.md): Creates a right with the authentication requirements you supply.
- [tag](laright/tag.md): An integer you use to identify a right.
- [authorize(localizedReason:completion:)](laright/authorize%28localizedreason_completion_%29.md): Performs an authorization on the right.
- [authorize(localizedReason:in:completion:)](laright/authorize%28localizedreason_in_completion_%29.md): Performs an authorization on the right with a window context you supply.

### Deauthorizing a right

- [deauthorize(completion:)](laright/deauthorize%28completion_%29.md): Invalidates a previously authorized right.

### Monitoring authorization status

- [checkCanAuthorize(completion:)](laright/checkcanauthorize%28completion_%29.md): Checks whether the right has permission to perform authorization.
- [state](laright/state-swift.property.md): The current authorization state for a right.
- [LARight.State](laright/state-swift.enum.md): The possible states for a right during authorization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [LAPersistedRight](lapersistedright.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Authentication and access

- [LARight.State](laright/state-swift.enum.md): The possible states for a right during authorization.
- [LAContext](lacontext.md): A mechanism for evaluating authentication policies and access controls.

# LARight (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A grouped set of requirements that gate access to a resource or operation.

## Declaration

```objectivec
@interface LARight : NSObject
```

<a id="overview"></a>

## Overview

Use [LARight](laright.md) instances to protect access to portions of your app that may contain sensitive information. By default, [LARight](laright.md) instances require people to authenticate with Face ID, Touch ID, Apple Watch, or the device passcode. The following creates an [LARight](laright.md) with the default authentication requirements:

```swift
let loginRight = LARight()
    
func login() async throws {
    try await loginRight.authorize(localizedReason: "Access sandcastle competition designs")
}

func logout() async {
    await loginRight.deauthorize()
}
```

## Topics

### Authorizing a right

- [init](laright/init%28%29.md): Creates a right using the default authorization requirements.
- [initWithRequirement:](laright/init%28requirement_%29.md): Creates a right with the authentication requirements you supply.
- [tag](laright/tag.md): An integer you use to identify a right.
- [authorizeWithLocalizedReason:completion:](laright/authorize%28localizedreason_completion_%29.md): Performs an authorization on the right.
- [authorizeWithLocalizedReason:inPresentationContext:completion:](laright/authorize%28localizedreason_in_completion_%29.md): Performs an authorization on the right with a window context you supply.

### Deauthorizing a right

- [deauthorizeWithCompletion:](laright/deauthorize%28completion_%29.md): Invalidates a previously authorized right.

### Monitoring authorization status

- [checkCanAuthorizeWithCompletion:](laright/checkcanauthorize%28completion_%29.md): Checks whether the right has permission to perform authorization.
- [state](laright/state-swift.property.md): The current authorization state for a right.
- [LARightState](laright/state-swift.enum.md): The possible states for a right during authorization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [LAPersistedRight](lapersistedright.md)

## See Also

### Authentication and access

- [LARightState](laright/state-swift.enum.md): The possible states for a right during authorization.
- [LAContext](lacontext.md): A mechanism for evaluating authentication policies and access controls.
