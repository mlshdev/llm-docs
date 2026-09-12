> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/sessiondidbecomeinactive(_:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/sessiondidbecomeinactive(_:))

# sessionDidBecomeInactive(\_:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the session will stop communicating with the current Apple Watch.

## Declaration

```swift
func sessionDidBecomeInactive(_ session: WCSession)
```

## Parameters

- `session`: The session object whose activation state changed.

<a id="Discussion"></a>

## Discussion

You must implement this method to support quick switching between Apple Watch devices in your iPhone app. The session calls this method when it detects that the user has switched to a different Apple Watch. While in the inactive state, the session delivers any pending data to your delegate object and prevents you from initiating any new data transfers. After the last transfer finishes, the session moves to the deactivated state.

Use this method to update any private data structures that might be affected by the impending change to the active Apple Watch. For example, you might clean up data structures and close files related to outgoing content.

## See Also

### Managing Session Activation

- [session(\_:activationDidCompleteWith:error:)](session%28__activationdidcompletewith_error_%29.md): Tells the delegate that the session has finished activating.
- [sessionDidDeactivate(\_:)](sessiondiddeactivate%28__%29.md): Tells the delegate that the session has delivered all the data from the previous session, and that communication with the Apple Watch has ended.

# sessionDidBecomeInactive: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the session will stop communicating with the current Apple Watch.

## Declaration

```objectivec
- (void) sessionDidBecomeInactive:(WCSession *) session;
```

## Parameters

- `session`: The session object whose activation state changed.

<a id="Discussion"></a>

## Discussion

You must implement this method to support quick switching between Apple Watch devices in your iPhone app. The session calls this method when it detects that the user has switched to a different Apple Watch. While in the inactive state, the session delivers any pending data to your delegate object and prevents you from initiating any new data transfers. After the last transfer finishes, the session moves to the deactivated state.

Use this method to update any private data structures that might be affected by the impending change to the active Apple Watch. For example, you might clean up data structures and close files related to outgoing content.

## See Also

### Managing Session Activation

- [session:activationDidCompleteWithState:error:](session%28__activationdidcompletewith_error_%29.md): Tells the delegate that the session has finished activating.
- [sessionDidDeactivate:](sessiondiddeactivate%28__%29.md): Tells the delegate that the session has delivered all the data from the previous session, and that communication with the Apple Watch has ended.
