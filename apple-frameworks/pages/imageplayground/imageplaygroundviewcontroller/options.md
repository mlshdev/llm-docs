> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/options](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/options)

# options

**Framework:** Image Playground  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

Options that influence the image-generation process.

## Declaration

```swift
@MainActor @preconcurrency var options: ImagePlaygroundOptions { get set }
```

<a id="discussion"></a>

## Discussion

To specify custom options, modify the value in this property before you present the view controller. If you don’t modify this property, the view controller uses the default set of options.
