> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/init(labels:configuration:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/init(labels:configuration:))

# init(labels:configuration:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a full-connected network multi-label classifier.

## Declaration

```swift
init(labels: Set<Label>, configuration: FullyConnectedNetworkConfiguration = defaultConfiguration)
```

## Parameters

- `labels`: The labels used to train the multi-label classifier.
- `configuration`: The configuration.
