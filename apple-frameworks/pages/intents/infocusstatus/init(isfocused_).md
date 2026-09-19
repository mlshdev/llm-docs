> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/infocusstatus/init(isfocused:)

# init(isFocused:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · watchOS 8.0+

Creates an object that indicates the user’s focus status.

## Declaration

```swift
@nonobjc convenience init(isFocused: Bool? = nil)
```

## Parameters

- `isFocused`: The user’s preference for receiving notifications.

<a id="return-value"></a>

## Return Value

A new status object, or `nil` if the system can’t create one.
