> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/presentedsubitem(at:didresolve:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/presentedsubitem(at:didresolve:))

# presentedSubitem(at:didResolve:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.

## Declaration

```swift
optional func presentedSubitem(at url: URL, didResolve version: NSFileVersion)
```

## Parameters

- `url`: The URL of the item inside the presented directory that was in conflict. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.
- `version`: The version object containing the conflicting change.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to respond to the resolution of a version conflict by a different file presenter. This might occur if a version of your application running on another device resolves the conflict first. You might then use this method to update your user interface to indicate that there is no longer a conflict.

## See Also

### Responding to Version Changes

- [presentedItemDidGain(\_:)](presenteditemdidgain%28__%29.md): Tells the delegate that a new version of the file or file package was added.
- [presentedItemDidLose(\_:)](presenteditemdidlose%28__%29.md): Tells the delegate that a version of the file or file package was removed.
- [presentedItemDidResolveConflict(\_:)](presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitem(at:didGain:)](presentedsubitem%28at_didgain_%29.md): Tells the delegate that the item inside the presented directory gained a new version.
- [presentedSubitem(at:didLose:)](presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.

# presentedSubitemAtURL:didResolveConflictVersion: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.

## Declaration

```objectivec
- (void) presentedSubitemAtURL:(NSURL *) url didResolveConflictVersion:(NSFileVersion *) version;
```

## Parameters

- `url`: The URL of the item inside the presented directory that was in conflict. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.
- `version`: The version object containing the conflicting change.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to respond to the resolution of a version conflict by a different file presenter. This might occur if a version of your application running on another device resolves the conflict first. You might then use this method to update your user interface to indicate that there is no longer a conflict.

## See Also

### Responding to Version Changes

- [presentedItemDidGainVersion:](presenteditemdidgain%28__%29.md): Tells the delegate that a new version of the file or file package was added.
- [presentedItemDidLoseVersion:](presenteditemdidlose%28__%29.md): Tells the delegate that a version of the file or file package was removed.
- [presentedItemDidResolveConflictVersion:](presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitemAtURL:didGainVersion:](presentedsubitem%28at_didgain_%29.md): Tells the delegate that the item inside the presented directory gained a new version.
- [presentedSubitemAtURL:didLoseVersion:](presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.
