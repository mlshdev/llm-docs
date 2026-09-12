> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/openoptions/loadrule(_:)](https://developer.apple.com/documentation/usdkit/usdstage/openoptions/loadrule(_:))

# loadRule(\_:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specifies the rule used to determine if referenced payloads are loaded.

## Declaration

```swift
static func loadRule(_ rule: USDStage.InitialLoadRule) -> USDStage.OpenOptions
```

<a id="discussion"></a>

## Discussion

The default is `.all`, so all loadable prims will be automatically loaded.
