> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inshortcutreference/init(useractivity:)](https://developer.apple.com/documentation/intents/inshortcutreference/init(useractivity:))

# init(userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a shortcut with the specified user activity.

## Declaration

```swift
init(userActivity: NSUserActivity)
```

## Parameters

- `userActivity`: The user activity indicating the action to perform when invoking the shortcut.

<a id="return-value"></a>

## Return Value

A new shortcut object initialized with the specified user activitiy.

## See Also

### Creating a Shortcut

- [init(intent:)](init%28intent_%29.md): Creates a shortcut with the specified intent.

# initWithUserActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a shortcut with the specified user activity.

## Declaration

```objectivec
- (instancetype) initWithUserActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The user activity indicating the action to perform when invoking the shortcut.

<a id="return-value"></a>

## Return Value

A new shortcut object initialized with the specified user activitiy.

## See Also

### Creating a Shortcut

- [initWithIntent:](init%28intent_%29.md): Creates a shortcut with the specified intent.
