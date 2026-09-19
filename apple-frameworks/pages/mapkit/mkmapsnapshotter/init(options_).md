> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/init(options:)

# init(options:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a snapshotter object based on the specified options.

## Declaration

```swift
init(options: MKMapSnapshotter.Options)
```

## Parameters

- `options`: The options to use when capturing the map imagery. See [MKMapSnapshotter.Options](options.md). This parameter may not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized snapshotter object.

## See Also

### Creating a snapshotter object

- [MKMapSnapshotter.Options](options.md): The options the snapshotter initializer uses to create a snapshotter to capture map-based imagery.

# initWithOptions: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a snapshotter object based on the specified options.

## Declaration

```objectivec
- (instancetype) initWithOptions:(MKMapSnapshotOptions *) options;
```

## Parameters

- `options`: The options to use when capturing the map imagery. See [MKMapSnapshotOptions](options.md). This parameter may not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized snapshotter object.

## See Also

### Creating a snapshotter object

- [MKMapSnapshotOptions](options.md): The options the snapshotter initializer uses to create a snapshotter to capture map-based imagery.
