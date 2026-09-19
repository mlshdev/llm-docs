> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mklookaroundsnapshotter/init(scene:options:)

# init(scene:options:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Create a new snapshotter object with the scene and options you specify.

## Declaration

```swift
init(scene: MKLookAroundScene, options: MKLookAroundSnapshotter.Options)
```

## Parameters

- `scene`: The [MKLookAroundScene](../mklookaroundscene.md) to use as the source for the snapshot.
- `options`: The available [MKLookAroundSnapshotter.Options](options.md).

# initWithScene:options: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Create a new snapshotter object with the scene and options you specify.

## Declaration

```objectivec
- (instancetype) initWithScene:(MKLookAroundScene *) scene options:(MKLookAroundSnapshotOptions *) options;
```

## Parameters

- `scene`: The [MKLookAroundScene](../mklookaroundscene.md) to use as the source for the snapshot.
- `options`: The available [MKLookAroundSnapshotOptions](options.md).
