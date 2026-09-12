> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alternatingrowbackgroundbehavior/automatic](https://developer.apple.com/documentation/swiftui/alternatingrowbackgroundbehavior/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 14.0+

The automatic alternating row background behavior.

## Declaration

```swift
static let automatic: AlternatingRowBackgroundBehavior
```

<a id="discussion"></a>

## Discussion

This defers to default component behavior for alternating row backgrounds. Some components, such as `Table` on macOS, will default to having alternating row backgrounds; while List does not.

## See Also

### Getting alternating row background behavior

- [enabled](enabled.md): Alternating rows will be enabled for applicable views.
- [disabled](disabled.md): Alternating rows will be disabled for applicable views.
