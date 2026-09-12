> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/authorize(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/authorize(_:))

# authorize(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Attempts to unlock the lock icon in the view.

## Declaration

```swift
func authorize(_ inSender: Any!) -> Bool
```

## Parameters

- `inSender`: The authorization view to unlock.

<a id="Discussion"></a>

## Discussion

This method has the same behavior as if the user clicked on the lock icon; if the user is authorized, the lock icon unlocks. If this method succeeds, it returns [true](https://developer.apple.com/documentation/swift/true); if it fails, the lock icon remains locked and the method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [deauthorize(\_:)](deauthorize%28__%29.md): Sets the authorization state to unauthorized and locks the lock icon in the view.
- [authorizationState()](authorizationstate%28%29.md): Returns the current state of the authorization view.

### Setting the authorization state

- [deauthorize(\_:)](deauthorize%28__%29.md): Sets the authorization state to unauthorized and locks the lock icon in the view.

# authorize: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Attempts to unlock the lock icon in the view.

## Declaration

```objectivec
- (BOOL) authorize:(id) inSender;
```

## Parameters

- `inSender`: The authorization view to unlock.

<a id="Discussion"></a>

## Discussion

This method has the same behavior as if the user clicked on the lock icon; if the user is authorized, the lock icon unlocks. If this method succeeds, it returns [true](https://developer.apple.com/documentation/swift/true); if it fails, the lock icon remains locked and the method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [deauthorize:](deauthorize%28__%29.md): Sets the authorization state to unauthorized and locks the lock icon in the view.
- [authorizationState](authorizationstate%28%29.md): Returns the current state of the authorization view.

### Setting the authorization state

- [deauthorize:](deauthorize%28__%29.md): Sets the authorization state to unauthorized and locks the lock icon in the view.
