> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/published/projectedvalue](https://developer.apple.com/documentation/combine/published/projectedvalue)

# projectedValue

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The property for which this instance exposes a publisher.

## Declaration

```swift
var projectedValue: Published<Value>.Publisher { mutating get set }
```

<a id="discussion"></a>

## Discussion

The [projectedValue](projectedvalue.md) is the property accessed with the `$` operator.

## See Also

### Publishing the value

- [Published.Publisher](publisher.md): A publisher for properties marked with the `@Published` attribute.
