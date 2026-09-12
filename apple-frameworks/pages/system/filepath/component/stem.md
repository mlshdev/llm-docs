> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/component/stem](https://developer.apple.com/documentation/system/filepath/component/stem)

# stem

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The non-extension portion of this file or directory  component.

## Declaration

```swift
var stem: String { get }
```

<a id="discussion"></a>

## Discussion

Examples:

- `foo.txt => foo`
- `foo.tar.gz => foo.tar`
- `Foo.app => Foo`
- `.hidden => .hidden`
- `..      => ..`
