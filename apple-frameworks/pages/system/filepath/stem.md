> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/stem](https://developer.apple.com/documentation/system/filepath/stem)

# stem

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The non-extension portion of the file or directory last component.

## Declaration

```swift
var stem: String? { get }
```

<a id="discussion"></a>

## Discussion

Returns `nil` if `lastComponent` is `nil`

- `/tmp/foo.txt                 => foo`
- `/Applications/Foo.app/        => Foo`
- `/Applications/Foo.app/bar.txt => bar`
- `/tmp/.hidden                 => .hidden`
- `/tmp/..                      => ..`
- `/                            => nil`
