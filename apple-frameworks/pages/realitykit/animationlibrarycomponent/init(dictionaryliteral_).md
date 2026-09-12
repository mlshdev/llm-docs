> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/init(dictionaryliteral:)](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/init(dictionaryliteral:))

# init(dictionaryLiteral:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates an animation library from a variadic list of key-value pairs.

## Declaration

```swift
init(dictionaryLiteral elements: (String, AnimationResource)...)
```

## Parameters

- `elements`: A list of key-value pairs that make up the dictionary. Each key is a unique animation name, and each value is an animation resource.

<a id="discussion"></a>

## Discussion

Use the [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral) initializer by directly assigning the library to a dictionary literal.

```swift
let animationLibrary: AnimationLibraryComponent = [
    "idle": idleAnimation,
    "walk": walkAnimation
]
```

## See Also

### Creating an animation library component

- [init()](init%28%29.md): Creates an empty animation library.
- [init(animations:)](init%28animations_%29.md): Creates an animation library from a dictionary that associates an animation’s data with its name.
