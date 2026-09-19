> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkclassifier/init(labels:configuration:)

# init(labels:configuration:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a fully connected network classifier.

## Declaration

```swift
init(labels: Set<Label>, configuration: FullyConnectedNetworkConfiguration = .init())
```

## Parameters

- `labels`: The labels used to train the classifier.
- `configuration`: The configuration.
