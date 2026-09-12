> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/setautoupdate(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/setautoupdate(_:))

# setAutoupdate(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the authorization view to update itself automatically.

## Declaration

```swift
func setAutoupdate(_ autoupdate: Bool)
```

## Parameters

- `autoupdate`: Specifies whether the authorization view should update itself automatically. Set to [true](https://developer.apple.com/documentation/swift/true) to enable autoupdates.

<a id="Discussion"></a>

## Discussion

If autoupdates are enabled and the authorization times out (for example), the authorization view automatically relocks. If autoupdates are disabled, you have to call the [updateStatus(\_:)](updatestatus%28__%29.md) method to manually update the view if the status changes when the user has not clicked on the lock icon. Autoupdates are disabled by default. Because autoupdates poll, they can affect system performance.

## See Also

### Related Documentation

- [updateStatus(\_:)](updatestatus%28__%29.md): Manually updates the authorization view.

### Setting up the authorization view

- [setString(\_:)](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights(\_:)](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate(\_:interval:)](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags(\_:)](setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled(\_:)](setenabled%28__%29.md): Sets the current state of the authorization view.

# setAutoupdate: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the authorization view to update itself automatically.

## Declaration

```objectivec
- (void) setAutoupdate:(BOOL) autoupdate;
```

## Parameters

- `autoupdate`: Specifies whether the authorization view should update itself automatically. Set to [true](https://developer.apple.com/documentation/swift/true) to enable autoupdates.

<a id="Discussion"></a>

## Discussion

If autoupdates are enabled and the authorization times out (for example), the authorization view automatically relocks. If autoupdates are disabled, you have to call the [updateStatus:](updatestatus%28__%29.md) method to manually update the view if the status changes when the user has not clicked on the lock icon. Autoupdates are disabled by default. Because autoupdates poll, they can affect system performance.

## See Also

### Related Documentation

- [updateStatus:](updatestatus%28__%29.md): Manually updates the authorization view.

### Setting up the authorization view

- [setString:](setstring%28__%29.md): Sets the requested-right string to use with the default authorization rights set.
- [setAuthorizationRights:](setauthorizationrights%28__%29.md): Sets the authorization rights for this view.
- [setAutoupdate:interval:](setautoupdate%28__interval_%29.md): Sets the authorization view to update itself at a specific interval.
- [setFlags:](setflags%28__%29.md): Sets the current authorization flags for the view.
- [setEnabled:](setenabled%28__%29.md): Sets the current state of the authorization view.
