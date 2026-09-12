> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/ocrtool/init(name:description:)](https://developer.apple.com/documentation/vision/ocrtool/init(name:description:))

# init(name:description:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a tool for recognizing text in images.

## Declaration

```swift
init(name: String? = nil, description: String? = nil)
```

## Parameters

- `name`: The name of the tool as exposed to the model. If not provided, a default name is used.
- `description`: A description of what the tool does, used by the model to determine when to call it. If not provided, a default description is used.
