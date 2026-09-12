> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laright/state-swift.property](https://developer.apple.com/documentation/localauthentication/laright/state-swift.property)

# state (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The current authorization state for a right.

## Declaration

```swift
var state: LARight.State { get }
```

## See Also

### Monitoring authorization status

- [checkCanAuthorize(completion:)](checkcanauthorize%28completion_%29.md): Checks whether the right has permission to perform authorization.
- [LARight.State](state-swift.enum.md): The possible states for a right during authorization.

# state (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The current authorization state for a right.

## Declaration

```objectivec
@property (nonatomic, readonly) LARightState state;
```

## See Also

### Monitoring authorization status

- [checkCanAuthorizeWithCompletion:](checkcanauthorize%28completion_%29.md): Checks whether the right has permission to perform authorization.
- [LARightState](state-swift.enum.md): The possible states for a right during authorization.
