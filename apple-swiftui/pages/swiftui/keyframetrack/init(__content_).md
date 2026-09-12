> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keyframetrack/init(_:content:)](https://developer.apple.com/documentation/swiftui/keyframetrack/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an instance that animates the property of the root value at the given key path.

## Declaration

```swift
init(_ keyPath: WritableKeyPath<Root, Value>, @KeyframeTrackContentBuilder<Value> content: () -> Content)
```

## Parameters

- `keyPath`: The property to animate.

## See Also

### Creating a keyframe track

- [init(content:)](init%28content_%29.md): Creates an instance that animates the entire value from the root of the key path.
