> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/progressmanager/property/key

# key

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A unique identifier for this property type.

## Declaration

```swift
static var key: String { get }
```

<a id="return-value"></a>

## Return Value

A unique string identifier for this property type.

<a id="discussion"></a>

## Discussion

The key should use reverse DNS style notation to ensure uniqueness across different frameworks and applications.
