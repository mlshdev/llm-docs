> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/timelineprovidercontext/environmentvariants-swift.struct/subscript(_:)

# subscript(\_:)

**Framework:** WidgetKit  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Returns the widget environment variants for a key path to an environment values instance.

## Declaration

```swift
subscript<T>(keyPath: WritableKeyPath<EnvironmentValues, T>) -> [T]? { get }
```
