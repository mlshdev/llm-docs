> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skaction/init(named:from:duration:)

# init(named:from:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action of the given name from an action file with a new duration.

## Declaration

```swift
init?(named name: String, from url: URL, duration: TimeInterval)
```

## Parameters

- `name`: The name of the action
- `url`: The url of the file containing the action
- `duration`: The duration of the action

# actionNamed:fromURL:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action of the given name from an action file with a new duration.

## Declaration

```objectivec
+ (SKAction *) actionNamed:(NSString *) name fromURL:(NSURL *) url duration:(NSTimeInterval) duration;
```

## Parameters

- `name`: The name of the action
- `url`: The url of the file containing the action
- `duration`: The duration of the action
