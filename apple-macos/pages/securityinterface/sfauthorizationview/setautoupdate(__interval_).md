> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/setautoupdate(_:interval:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/setautoupdate(_:interval:))

# setAutoupdate(\_:interval:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the authorization view to update itself at a specific interval.

## Declaration

```swift
func setAutoupdate(_ autoupdate: Bool, interval: TimeInterval)
```

## Parameters

- `autoupdate`: Specifies whether the authorization view should update itself automatically. Set to [true](https://developer.apple.com/documentation/swift/true) to enable autoupdates.
- `interval`: If `autoupdate` is [true](https://developer.apple.com/documentation/swift/true), sets the interval at which updates take place, in seconds.

<a id="Discussion"></a>

## Discussion

If autoupdates are enabled and the authorization times out (for example), the authorization view automatically relocks. If autoupdates are disabled, you have to call the [updateStatus(\_:)](updatestatus%28__%29.md) method to manually update the view if the status changes when the user has not clicked on the lock icon. Autoupdates are disabled by default. Because autoupdates poll, they can affect system performance. For that reason, you might want to set a time interval so that the polling does not take place as often.

## See Also

### Setting up the authorization view

- [setString(\_:)](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights(\_:)](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate(\_:)](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setFlags(\_:)](setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled(\_:)](setenabled%28__%29.md): Sets the current state of the authorization view.

# setAutoupdate:interval: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the authorization view to update itself at a specific interval.

## Declaration

```objectivec
- (void) setAutoupdate:(BOOL) autoupdate interval:(NSTimeInterval) interval;
```

## Parameters

- `autoupdate`: Specifies whether the authorization view should update itself automatically. Set to [true](https://developer.apple.com/documentation/swift/true) to enable autoupdates.
- `interval`: If `autoupdate` is [true](https://developer.apple.com/documentation/swift/true), sets the interval at which updates take place, in seconds.

<a id="Discussion"></a>

## Discussion

If autoupdates are enabled and the authorization times out (for example), the authorization view automatically relocks. If autoupdates are disabled, you have to call the [updateStatus:](updatestatus%28__%29.md) method to manually update the view if the status changes when the user has not clicked on the lock icon. Autoupdates are disabled by default. Because autoupdates poll, they can affect system performance. For that reason, you might want to set a time interval so that the polling does not take place as often.

## See Also

### Setting up the authorization view

- [setString:](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights:](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate:](setautoupdate%28__%29.md): Sets the authorization view to update itself automatically.
- [setFlags:](setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled:](setenabled%28__%29.md): Sets the current state of the authorization view.
