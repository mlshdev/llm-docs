> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/anypublisher/init(_:)](https://developer.apple.com/documentation/combine/anypublisher/init(_:))

# init(\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a type-erasing publisher to wrap the provided publisher.

## Declaration

```swift
init<P>(_ publisher: P) where Output == P.Output, Failure == P.Failure, P : Publisher
```

## Parameters

- `publisher`: A publisher to wrap with a type-eraser.
