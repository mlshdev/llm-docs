> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashreason/init(exception:codes:)](https://developer.apple.com/documentation/crashreportextension/crashreason/init(exception:codes:))

# init(exception:codes:)

**Framework:** CrashReportExtension  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

Creates a crash reason instance with the given parameters.

## Declaration

```swift
init(exception: Int32, codes: [UInt64])
```

## Parameters

- `exception`: The Mach exception type.
- `codes`: An array of exception-specific codes providing additional details.
