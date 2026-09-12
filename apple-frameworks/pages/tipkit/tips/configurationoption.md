> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/configurationoption](https://developer.apple.com/documentation/tipkit/tips/configurationoption)

# ConfigurationOption

**Framework:** TipKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that marks an object as a tip configuration.

## Declaration

```swift
struct ConfigurationOption
```

## Topics

### Structures

- [CloudKitContainer](configurationoption/cloudkitcontainer.md): A type for specifying the CloudKit container used for syncing tips.
- [DatastoreLocation](configurationoption/datastorelocation.md): A type for specifying a custom location for your tips datastore.
- [DisplayFrequency](configurationoption/displayfrequency.md): A type for specifying the minimum duration after one tip is shown before another tip will become eligible.

### Type Methods

- [cloudKitContainer(\_:)](configurationoption/cloudkitcontainer%28__%29.md): Sets the CloudKit container used for syncing tips.
- [datastoreLocation(\_:)](configurationoption/datastorelocation%28__%29.md): Specify a custom location for your tips datastore.
- [displayFrequency(\_:)](configurationoption/displayfrequency%28__%29.md): Customizes how often new tips are presented in your app after another tip has been displayed.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuration

- [configure(\_:)](configure%28__%29.md): Loads and configures the persistent state of all tips in your app.
