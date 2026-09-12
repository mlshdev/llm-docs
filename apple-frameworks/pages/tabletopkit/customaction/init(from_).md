> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/customaction/init(from:)](https://developer.apple.com/documentation/tabletopkit/customaction/init(from:))

# init(from:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Creates an instance of `CustomAction` initialized from the provided `TabletopAction`. If the provided action is not a custom action, this initializer returns `nil`.

## Declaration

```swift
init?(from action: some TabletopAction)
```

## Parameters

- `action`: The action to initialize this instance from.
