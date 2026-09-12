> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/lexicallynormalize()](https://developer.apple.com/documentation/system/filepath/lexicallynormalize())

# lexicallyNormalize()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Collapse `.` and `..` components lexically (i.e. without following symlinks).

## Declaration

```swift
mutating func lexicallyNormalize()
```

<a id="discussion"></a>

## Discussion

Examples:

- `/usr/./local/bin/.. => /usr/local`
- `/../usr/local/bin   => /usr/local/bin`
- `../usr/local/../bin => ../usr/bin`
