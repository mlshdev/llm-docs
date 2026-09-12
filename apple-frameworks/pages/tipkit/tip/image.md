> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/image](https://developer.apple.com/documentation/tipkit/tip/image)

# image

**Framework:** TipKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The image associated with the tip.

## Declaration

```swift
var image: Image? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to display an icon to the left of the `title` and `message` of your tip. This property is `Optional` and defaults to a value of `nil`.

## See Also

### Setting tip content

- [title](title.md): A title that names the tip.
- [message](message.md): A short description of how to use the tip’s feature.
- [id](id.md): The tip’s unique identifier.
