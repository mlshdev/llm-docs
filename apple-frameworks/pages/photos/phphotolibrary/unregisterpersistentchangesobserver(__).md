> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/unregisterpersistentchangesobserver(_:)](https://developer.apple.com/documentation/photos/phphotolibrary/unregisterpersistentchangesobserver(_:))

# unregisterPersistentChangesObserver(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Unregisters a previously registered persistent changes observer.

## Declaration

```swift
func unregisterPersistentChangesObserver(_ observer: any PHPhotoLibraryPersistentChangesObserver)
```

<a id="discussion"></a>

## Discussion

After calling this method, the observer will no longer receive persistent changes callbacks.

# unregisterPersistentChangesObserver: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Unregisters a previously registered persistent changes observer.

## Declaration

```objectivec
- (void) unregisterPersistentChangesObserver:(id<PHPhotoLibraryPersistentChangesObserver>) observer;
```

<a id="discussion"></a>

## Discussion

After calling this method, the observer will no longer receive persistent changes callbacks.
