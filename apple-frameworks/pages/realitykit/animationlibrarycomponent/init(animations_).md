> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/init(animations:)](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/init(animations:))

# init(animations:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates an animation library from a dictionary that associates an animation’s data with its name.

## Declaration

```swift
init(animations: [String : AnimationResource])
```

## Parameters

- `animations`: A dictionary of animation resources that you key by name.

## See Also

### Creating an animation library component

- [init()](init%28%29.md): Creates an empty animation library.
- [init(dictionaryLiteral:)](init%28dictionaryliteral_%29.md): Creates an animation library from a variadic list of key-value pairs.
