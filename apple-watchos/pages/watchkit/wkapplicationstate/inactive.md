> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationstate/inactive](https://developer.apple.com/documentation/watchkit/wkapplicationstate/inactive)

# WKApplicationState.inactive (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 3.0+

The Watch app is running in the foreground, but is not yet responding to actions from controls or gestures.

## Declaration

```swift
case inactive
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

Typically, apps transition quickly through the [WKApplicationState.inactive](inactive.md) state when becoming active or going to the background. A newly launched watchOS app starts in the [WKApplicationState.inactive](inactive.md) state and then quickly transitions to the [WKApplicationState.active](active.md) state.

An active app also transition to this state when the user dismisses the app or stops interacting with it. The app remains in the [WKApplicationState.inactive](inactive.md) state as long as it is the frontmost app (see `Understand Frontmost App State`). Then the system transitions the app to the [WKApplicationState.background](background.md) state before suspending it.

In some situations, the app may run for extended periods in the inactive state. For example, this occurs when the app is running in the dock, or when it is the frontmost app.

When the user scrolls to the app in the dock, the system initially displays the app’s most recent snapshot. Then the app transitions to the foreground, but remains in the [WKApplicationState.inactive](inactive.md) state. The system displays a running preview of the app in the dock, but the app doesn’t respond to actions or gestures.

## See Also

### Constants

- [WKApplicationState.active](active.md): The Watch app is running in the foreground and currently receiving events.
- [WKApplicationState.background](background.md): The Watch app is running in the background.

# WKApplicationStateInactive (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 3.0+

The Watch app is running in the foreground, but is not yet responding to actions from controls or gestures.

## Declaration

```objectivec
WKApplicationStateInactive
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

Typically, apps transition quickly through the [WKApplicationStateInactive](inactive.md) state when becoming active or going to the background. A newly launched watchOS app starts in the [WKApplicationStateInactive](inactive.md) state and then quickly transitions to the [WKApplicationStateActive](active.md) state.

An active app also transition to this state when the user dismisses the app or stops interacting with it. The app remains in the [WKApplicationStateInactive](inactive.md) state as long as it is the frontmost app (see `Understand Frontmost App State`). Then the system transitions the app to the [WKApplicationStateBackground](background.md) state before suspending it.

In some situations, the app may run for extended periods in the inactive state. For example, this occurs when the app is running in the dock, or when it is the frontmost app.

When the user scrolls to the app in the dock, the system initially displays the app’s most recent snapshot. Then the app transitions to the foreground, but remains in the [WKApplicationStateInactive](inactive.md) state. The system displays a running preview of the app in the dock, but the app doesn’t respond to actions or gestures.

## See Also

### Constants

- [WKApplicationStateActive](active.md): The Watch app is running in the foreground and currently receiving events.
- [WKApplicationStateBackground](background.md): The Watch app is running in the background.
