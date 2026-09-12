> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlmodelmetadata/init(author:shortdescription:license:version:additional:)](https://developer.apple.com/documentation/createml/mlmodelmetadata/init(author:shortdescription:license:version:additional:))

# init(author:shortDescription:license:version:additional:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new metadata instance for a machine learning model.

## Declaration

```swift
init(author: String = NSFullUserName(), shortDescription: String = "A model trained using CreateML for use with CoreML.", license: String? = nil, version: String = "1", additional: [String : String]? = nil)
```

## Parameters

- `author`: The author of the model.
- `shortDescription`: A short description of the model.
- `license`: The license governing the use of the model.
- `version`: The model version.
- `additional`: A dictionary that you can use to store arbitrary key value pairs.
