> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/register(_:)-7lhue](https://developer.apple.com/documentation/photos/phphotolibrary/register(_:)-7lhue)

# register(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Registers an observer to be notified when persistent changes occur in the photo library.

## Declaration

```swift
func register(_ observer: any PHPhotoLibraryPersistentChangesObserver)
```

<a id="discussion"></a>

## Discussion

The observer is held weakly by the photo library. The observer’s [photoLibraryPersistentChangesDidUpdate(\_:)](../phphotolibrarypersistentchangesobserver/photolibrarypersistentchangesdidupdate%28__%29.md) method is called on an arbitrary serial queue when changes are committed to the photo library. Use [fetchPersistentChanges(since:)](fetchpersistentchanges%28since_%29.md) to retrieve the specific changes.

Requires read-write photo library authorization ([PHAccessLevel.readWrite](../phaccesslevel/readwrite.md)).

# registerPersistentChangesObserver: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Registers an observer to be notified when persistent changes occur in the photo library.

## Declaration

```objectivec
- (void) registerPersistentChangesObserver:(id<PHPhotoLibraryPersistentChangesObserver>) observer;
```

<a id="discussion"></a>

## Discussion

The observer is held weakly by the photo library. The observer’s [photoLibraryPersistentChangesDidUpdate:](../phphotolibrarypersistentchangesobserver/photolibrarypersistentchangesdidupdate%28__%29.md) method is called on an arbitrary serial queue when changes are committed to the photo library. Use [fetchPersistentChangesSinceToken:error:](fetchpersistentchanges%28since_%29.md) to retrieve the specific changes.

Requires read-write photo library authorization ([PHAccessLevelReadWrite](../phaccesslevel/readwrite.md)).
