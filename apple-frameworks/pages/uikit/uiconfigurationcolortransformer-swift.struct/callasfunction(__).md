> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationcolortransformer-swift.struct/callasfunction(_:)](https://developer.apple.com/documentation/uikit/uiconfigurationcolortransformer-swift.struct/callasfunction(_:))

# callAsFunction(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Calls the transform closure of the color transformer.

## Declaration

```swift
func callAsFunction(_ input: UIColor) -> UIColor
```

<a id="Discussion"></a>

## Discussion

Using this syntax, you can call the color transformer type as if it were a closure:

```swift
let alphaColorTransformer = UIConfigurationColorTransformer() { baseColor -> UIColor in
    return baseColor.withAlphaComponent(0.5)
}

let baseColor = UIColor.red
let modifiedColor = alphaColorTransformer(baseColor)
```

## See Also

### Calling the color transformer

- [transform](transform.md): The transform closure of the color transformer.
