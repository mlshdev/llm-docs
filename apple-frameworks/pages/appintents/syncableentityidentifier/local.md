> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/syncableentityidentifier/local

# local

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The identifier you use to refer to the entity on the current device.

## Declaration

```swift
let local: LocalID?
```

<a id="discussion"></a>

## Discussion

Use this property to retrieve the local identifier value you specified at initialization time. When the framework performs entity resolution across devices, the value of this property is `nil`.
