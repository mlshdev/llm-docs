> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/updatestatus(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/updatestatus(_:))

# updateStatus(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Manually updates the authorization view.

## Declaration

```swift
func updateStatus(_ inSender: Any!) -> Bool
```

## Parameters

- `inSender`: The authorization view to update.

<a id="Discussion"></a>

## Discussion

Calls to [updateStatus(\_:)](updatestatus%28__%29.md) return [true](https://developer.apple.com/documentation/swift/true) if in the unlocked state, [false](https://developer.apple.com/documentation/swift/false) otherwise.

If autoupdates have not been set, you must call [updateStatus(\_:)](updatestatus%28__%29.md) for the authorization view’s initial state to display correctly. The Security Framework calls this method for you when you change the state of the lock (by calling [deauthorize(\_:)](deauthorize%28__%29.md), for example).

## See Also

### Related Documentation

- [setAutoupdate(\_:)](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate(\_:interval:)](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.

# updateStatus: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Manually updates the authorization view.

## Declaration

```objectivec
- (BOOL) updateStatus:(id) inSender;
```

## Parameters

- `inSender`: The authorization view to update.

<a id="Discussion"></a>

## Discussion

Calls to [updateStatus:](updatestatus%28__%29.md) return [true](https://developer.apple.com/documentation/swift/true) if in the unlocked state, [false](https://developer.apple.com/documentation/swift/false) otherwise.

If autoupdates have not been set, you must call [updateStatus:](updatestatus%28__%29.md) for the authorization view’s initial state to display correctly. The Security Framework calls this method for you when you change the state of the lock (by calling [deauthorize:](deauthorize%28__%29.md), for example).

## See Also

### Related Documentation

- [setAutoupdate:](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setAutoupdate:interval:](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
