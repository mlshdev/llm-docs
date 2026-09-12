> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/surfaceshader/name](https://developer.apple.com/documentation/realitykit/custommaterial/surfaceshader/name)

# name

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The name of the surface shader function.

## Declaration

```swift
var name: String
```

<a id="discussion"></a>

## Discussion

This is the name of the Metal function the custom material uses as its surface shader. The name needs to match the name of a Metal function in your Xcode project and can’t include parameters or parentheses.

## See Also

### Accessing surface shader properties

- [library](library.md): The Metal library that contains this surface shader function.
