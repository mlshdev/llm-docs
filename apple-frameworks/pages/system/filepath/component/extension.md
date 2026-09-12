> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/component/extension](https://developer.apple.com/documentation/system/filepath/component/extension)

# extension

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The extension of this file or directory component.

## Declaration

```swift
var `extension`: String? { get }
```

<a id="discussion"></a>

## Discussion

If `self` does not contain a `.` anywhere, or only at the start, returns `nil`. Otherwise, returns everything after the dot.

Examples:

- `foo.txt    => txt`
- `foo.tar.gz => gz`
- `Foo.app    => app`
- `.hidden    => nil`
- `..         => nil`
