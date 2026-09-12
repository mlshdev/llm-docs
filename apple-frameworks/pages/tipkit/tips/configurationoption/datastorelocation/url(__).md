> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/configurationoption/datastorelocation/url(_:)](https://developer.apple.com/documentation/tipkit/tips/configurationoption/datastorelocation/url(_:))

# url(\_:)

**Framework:** TipKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Configuration option for persisting tips at a custom on-disk location.

## Declaration

```swift
static func url(_ url: URL) -> Tips.ConfigurationOption.DatastoreLocation
```

## Parameters

- `url`: URL for on-disk location of the tips datastore.

<a id="discussion"></a>

## Discussion

```swift
do {
    let tipsDatastoreLocation = URL.applicationSupportDirectory.appendingPathComponent("LandmarkTips")
    // Save the tips datastore at the specified URL.
    try Tips.configure([
        .datastoreLocation(.url(tipsDatastoreLocation))
    ])
}
catch {
    print("Error initializing TipKit \(error)")
}
```
