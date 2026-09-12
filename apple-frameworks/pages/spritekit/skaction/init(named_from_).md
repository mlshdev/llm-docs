> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/init(named:from:)](https://developer.apple.com/documentation/spritekit/skaction/init(named:from:))

# init(named:from:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action of the given name from an action file.

## Declaration

```swift
init?(named name: String, from url: URL)
```

## Parameters

- `name`: The name of the action
- `url`: The url of the file containing the action

# actionNamed:fromURL: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action of the given name from an action file.

## Declaration

```objectivec
+ (SKAction *) actionNamed:(NSString *) name fromURL:(NSURL *) url;
```

## Parameters

- `name`: The name of the action
- `url`: The url of the file containing the action
