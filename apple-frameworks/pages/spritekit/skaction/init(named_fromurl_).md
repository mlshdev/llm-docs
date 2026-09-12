> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/init(named:fromurl:)](https://developer.apple.com/documentation/spritekit/skaction/init(named:fromurl:))

# init(named:fromURL:)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action of the given name from an action file.

## Declaration

```swift
init?(named name: String, fromURL url: URL)
```

## Parameters

- `name`: The name of the action.
- `url`: The URL of the file containing the action.

<a id="return-value"></a>

## Return Value

A new action object.
