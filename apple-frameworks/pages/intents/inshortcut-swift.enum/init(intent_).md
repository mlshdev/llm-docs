> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inshortcut-swift.enum/init(intent:)](https://developer.apple.com/documentation/intents/inshortcut-swift.enum/init(intent:))

# init(intent:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 11.0+ · watchOS 5.0+

Creates a shortcut with the specified intent.

## Declaration

```swift
init?(intent: INIntent)
```

## Parameters

- `intent`: The intent to perform when invoking the shortcut. The intent must have a title and be a valid shortcut type.

<a id="Discussion"></a>

## Discussion

Returns `nil` for invalid intents.

## See Also

### Creating a Shortcut

- [init(userActivity:)](init%28useractivity_%29.md): Creates a shortcut with the specified user activity.
