> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laright/state-swift.enum](https://developer.apple.com/documentation/localauthentication/laright/state-swift.enum)

# LARight.State (Swift)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The possible states for a right during authorization.

## Declaration

```swift
enum State
```

<a id="overview"></a>

## Overview

You can use key-value observation and the [Combine](../../combine.md) framework to observe the authorization state of an [LARight](../laright.md) instance:

```swift
let right = LARight()
let cancellable = right
    .publisher(for: \.state)
    .sink { _ in
        print("Right updated to \(right.state)")
    }

try await right.authorize(localizedReason: "Access sandcastle competition designs")
```

## Topics

### Authorization states

- [LARight.State.authorizing](state-swift.enum/authorizing.md): The authorization is in progress but not completed.
- [LARight.State.authorized](state-swift.enum/authorized.md): The authorization completed successfully.
- [LARight.State.notAuthorized](state-swift.enum/notauthorized.md): The authorization failed.
- [LARight.State.unknown](state-swift.enum/unknown.md): The authorization is in an unknown state.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authentication and access

- [LARight](../laright.md): A grouped set of requirements that gate access to a resource or operation.
- [LAContext](../lacontext.md): A mechanism for evaluating authentication policies and access controls.

# LARightState (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The possible states for a right during authorization.

## Declaration

```objectivec
enum LARightState : NSInteger;
```

<a id="overview"></a>

## Overview

You can use key-value observation and the [Combine](../../combine.md) framework to observe the authorization state of an [LARight](../laright.md) instance:

```swift
let right = LARight()
let cancellable = right
    .publisher(for: \.state)
    .sink { _ in
        print("Right updated to \(right.state)")
    }

try await right.authorize(localizedReason: "Access sandcastle competition designs")
```

## Topics

### Authorization states

- [LARightStateAuthorizing](state-swift.enum/authorizing.md): The authorization is in progress but not completed.
- [LARightStateAuthorized](state-swift.enum/authorized.md): The authorization completed successfully.
- [LARightStateNotAuthorized](state-swift.enum/notauthorized.md): The authorization failed.
- [LARightStateUnknown](state-swift.enum/unknown.md): The authorization is in an unknown state.

## See Also

### Authentication and access

- [LARight](../laright.md): A grouped set of requirements that gate access to a resource or operation.
- [LAContext](../lacontext.md): A mechanism for evaluating authentication policies and access controls.
