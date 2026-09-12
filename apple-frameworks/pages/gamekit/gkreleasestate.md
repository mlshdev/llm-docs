> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkreleasestate](https://developer.apple.com/documentation/gamekit/gkreleasestate)

# GKReleaseState (Swift)

**Framework:** GameKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Describes the release state of an App Store Connect resource, such as an Achievement or Leaderboard.

## Declaration

```swift
struct GKReleaseState
```

## Topics

### Initializers

- [init(rawValue:)](gkreleasestate/init%28rawvalue_%29.md)

### Type Properties

- [prereleased](gkreleasestate/prereleased.md): The resource has been created in App Store Connect but isn’t yet associated with a released version of an App.
- [released](gkreleasestate/released.md): The resource is associated with a release in App Store Connect. This has no relationship with the “archived” state of a resource (i.e., A resource can be release *and* archived).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the release state

- [releaseState](gkchallengedefinition/releasestate.md): The release state of the challenge definition in App Store Connect.

# GKReleaseState (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Describes the release state of an App Store Connect resource, such as an Achievement or Leaderboard.

## Declaration

```objectivec
enum GKReleaseState : NSUInteger;
```

## Topics

### Enumeration Cases

- [GKReleaseStateUnknown](gkreleasestate/gkreleasestateunknown.md): The system can’t determine the release state of the resource.
- [GKReleaseStatePrereleased](gkreleasestate/prereleased.md): The resource has been created in App Store Connect but isn’t yet associated with a released version of an App.
- [GKReleaseStateReleased](gkreleasestate/released.md): The resource is associated with a release in App Store Connect. This has no relationship with the “archived” state of a resource (i.e., A resource can be release *and* archived).

## See Also

### Getting the release state

- [releaseState](gkchallengedefinition/releasestate.md): The release state of the challenge definition in App Store Connect.
