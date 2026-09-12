> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inshortcutreference/init(intent:)](https://developer.apple.com/documentation/intents/inshortcutreference/init(intent:))

# init(intent:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a shortcut with the specified intent.

## Declaration

```swift
init?(intent: INIntent)
```

## Parameters

- `intent`: The intent to perform when invoking the shortcut. The intent must have a title and be a valid shortcut type.

<a id="return-value"></a>

## Return Value

A new shortcut object if the specified intent is valid; otherwise, returns `nil`.

## See Also

### Creating a Shortcut

- [init(userActivity:)](init%28useractivity_%29.md): Creates a shortcut with the specified user activity.

# initWithIntent: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a shortcut with the specified intent.

## Declaration

```objectivec
- (instancetype) initWithIntent:(INIntent *) intent;
```

## Parameters

- `intent`: The intent to perform when invoking the shortcut. The intent must have a title and be a valid shortcut type.

<a id="return-value"></a>

## Return Value

A new shortcut object if the specified intent is valid; otherwise, returns `nil`.

## See Also

### Creating a Shortcut

- [initWithUserActivity:](init%28useractivity_%29.md): Creates a shortcut with the specified user activity.
