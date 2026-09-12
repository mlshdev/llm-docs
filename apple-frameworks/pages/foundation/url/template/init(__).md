> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/template/init(_:)](https://developer.apple.com/documentation/foundation/url/template/init(_:))

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a new template from its text form.

## Declaration

```swift
init?(_ template: String)
```

<a id="discussion"></a>

## Discussion

The template string needs to be a valid RFC 6570 template.

This will parse the template and return `nil` if the template is invalid.
