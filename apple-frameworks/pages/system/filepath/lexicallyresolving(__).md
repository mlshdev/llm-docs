> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/lexicallyresolving(_:)](https://developer.apple.com/documentation/system/filepath/lexicallyresolving(_:))

# lexicallyResolving(\_:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Create a new `FilePath` by resolving `subpath` relative to `self`, ensuring that the result is lexically contained within `self`.

## Declaration

```swift
func lexicallyResolving(_ subpath: FilePath) -> FilePath?
```

<a id="discussion"></a>

## Discussion

`subpath` will be lexically normalized (see `lexicallyNormalize`) as part of resolution, meaning any contained `.` and `..` components will be collapsed without resolving symlinks. Any root in `subpath` will be ignored.

Returns `nil` if the result would “escape” from `self` through use of the special directory component `..`.

This is useful for protecting against arbitrary path traversal from an untrusted subpath: the result is guaranteed to be lexically contained within `self`. Since this operation does not consult the file system to resolve symlinks, any escaping symlinks nested inside of `self` can still be targeted by the result.

Example:

```swift
let staticContent: FilePath = "/var/www/my-website/static"
let links: [FilePath] =
  ["index.html", "/assets/main.css", "../../../../etc/passwd"]
links.map { staticContent.lexicallyResolving($0) }
  // ["/var/www/my-website/static/index.html",
  //  "/var/www/my-website/static/assets/main.css",
  //  nil]
```
