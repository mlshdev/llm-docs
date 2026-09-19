> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/fileflags/dataless

# dataless

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

File is a dataless placeholder (content is stored remotely).

## Declaration

```swift
static var dataless: FileFlags { get }
```

<a id="discussion"></a>

## Discussion

The system will attempt to materialize the file when accessed according to the dataless file materialization policy of the accessing thread or process. See `getiopolicy_np(3)`.

The corresponding C constant is `SF_DATALESS`.

> **Note**

> This flag is read-only. Attempting to change it will result in undefined behavior.
