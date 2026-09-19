> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/laenvironment/observer/environment(_:statedidchangefromoldstate:)

# environment(\_:stateDidChangeFromOldState:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

Called when there has been a change in the environment.

## Declaration

```swift
optional func environment(_ environment: LAEnvironment, stateDidChangeFromOldState oldState: LAEnvironment.State)
```

## Parameters

- `oldState`: The old environment state (before update)

<a id="discussion"></a>

## Discussion

Invoked on a queue private to LocalAuthentication framework. At the moment of invocation of this method, @c LAEnvironment.state already contains the new updated state.

# environment:stateDidChangeFromOldState: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

Called when there has been a change in the environment.

## Declaration

```objectivec
- (void) environment:(LAEnvironment *) environment stateDidChangeFromOldState:(LAEnvironmentState *) oldState;
```

## Parameters

- `oldState`: The old environment state (before update)

<a id="discussion"></a>

## Discussion

Invoked on a queue private to LocalAuthentication framework. At the moment of invocation of this method, @c LAEnvironment.state already contains the new updated state.
