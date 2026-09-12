> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/deauthorize(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/deauthorize(_:))

# deauthorize(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the authorization state to unauthorized and locks the lock icon in the view.

## Declaration

```swift
func deauthorize(_ inSender: Any!) -> Bool
```

## Parameters

- `inSender`: The authorization view to lock.

<a id="Discussion"></a>

## Discussion

If this method succeeds, it returns [true](https://developer.apple.com/documentation/swift/true); if it fails, the lock icon remains unlocked and the method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting the authorization state

- [authorize(\_:)](authorize%28__%29.md): Attempts to unlock the lock icon in the view.

# deauthorize: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the authorization state to unauthorized and locks the lock icon in the view.

## Declaration

```objectivec
- (BOOL) deauthorize:(id) inSender;
```

## Parameters

- `inSender`: The authorization view to lock.

<a id="Discussion"></a>

## Discussion

If this method succeeds, it returns [true](https://developer.apple.com/documentation/swift/true); if it fails, the lock icon remains unlocked and the method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting the authorization state

- [authorize:](authorize%28__%29.md): Attempts to unlock the lock icon in the view.
