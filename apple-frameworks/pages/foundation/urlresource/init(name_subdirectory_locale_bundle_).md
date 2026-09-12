> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresource/init(name:subdirectory:locale:bundle:)](https://developer.apple.com/documentation/foundation/urlresource/init(name:subdirectory:locale:bundle:))

# init(name:subdirectory:locale:bundle:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a URL resource from the given bundle, name, and subdirectory, optionally specifying a locale.

## Declaration

```swift
init(name: String, subdirectory: String? = nil, locale: Locale = .current, bundle: Bundle = .main)
```

## Parameters

- `name`: The name of the resource in the bundle. This should include both the resource name and its extension, to avoid confusion.
- `subdirectory`: The subdirectory, if any, of the resource.
- `locale`: The locale of the resource, as provided by the process that creates the resource. This defaults to [current](../locale/current.md).
- `bundle`: The bundle containing the resource. This defaults to [main](../bundle/main.md).
