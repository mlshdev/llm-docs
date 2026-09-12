> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/relativeformatstyle/unitsstyle-swift.struct/abbreviated](https://developer.apple.com/documentation/foundation/date/relativeformatstyle/unitsstyle-swift.struct/abbreviated)

# abbreviated

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style that uses abbreviated units, such as “2 mo. ago”.

## Declaration

```swift
static var abbreviated: Date.RelativeFormatStyle.UnitsStyle { get }
```

<a id="Discussion"></a>

## Discussion

This style may give different results in languages other than English.

## See Also

### Modifying a Relative Date Format Units Style

- [narrow](narrow.md): A style that uses the shortest units, such as “2 mo. ago”.
- [spellOut](spellout.md): A style that spells out units, such as “two months ago”.
- [wide](wide.md): A style that uses full representation of units, such as “2 months ago”.
