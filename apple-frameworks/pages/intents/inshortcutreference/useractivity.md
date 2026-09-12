> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inshortcutreference/useractivity](https://developer.apple.com/documentation/intents/inshortcutreference/useractivity)

# userActivity (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The user activity that defines the action to perform when invoking the shortcut.

## Declaration

```swift
var userActivity: NSUserActivity? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when you create the shortcut with an [INIntent](../inintent.md) object.

# userActivity (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The user activity that defines the action to perform when invoking the shortcut.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSUserActivity * userActivity;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSUserActivity * userActivity;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when you create the shortcut with an [INIntent](../inintent.md) object.
