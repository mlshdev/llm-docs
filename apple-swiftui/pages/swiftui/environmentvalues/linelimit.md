> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/linelimit](https://developer.apple.com/documentation/swiftui/environmentvalues/linelimit)

# lineLimit

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum number of lines that text can occupy in a view.

## Declaration

```swift
var lineLimit: Int? { get set }
```

<a id="discussion"></a>

## Discussion

The maximum number of lines is `1` if the value is less than `1`. If the value is `nil`, the text uses as many lines as required. The default is `nil`.

## See Also

### Limiting line count for multiline text

- [lineLimit(\_:)](../view/linelimit%28__%29.md): Sets to a closed range the number of lines that text can occupy in this view.
- [lineLimit(\_:reservesSpace:)](../view/linelimit%28__reservesspace_%29.md): Sets a limit for the number of lines text can occupy in this view.
