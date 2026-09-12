> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/presenteditemdidlose(_:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/presenteditemdidlose(_:))

# presentedItemDidLose(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a version of the file or file package was removed.

## Declaration

```swift
optional func presentedItemDidLose(_ version: NSFileVersion)
```

## Parameters

- `version`: The file version object containing information about the version that was removed.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to determine how to handle the loss of the specified file version. You can try to revert the presented document to a previous version or you might want to prompt the user about how to proceed.

## See Also

### Responding to Version Changes

- [presentedItemDidGain(\_:)](presenteditemdidgain%28__%29.md): Tells the delegate that a new version of the file or file package was added.
- [presentedItemDidResolveConflict(\_:)](presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitem(at:didGain:)](presentedsubitem%28at_didgain_%29.md): Tells the delegate that the item inside the presented directory gained a new version.
- [presentedSubitem(at:didLose:)](presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.
- [presentedSubitem(at:didResolve:)](presentedsubitem%28at_didresolve_%29.md): Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.

# presentedItemDidLoseVersion: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a version of the file or file package was removed.

## Declaration

```objectivec
- (void) presentedItemDidLoseVersion:(NSFileVersion *) version;
```

## Parameters

- `version`: The file version object containing information about the version that was removed.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to determine how to handle the loss of the specified file version. You can try to revert the presented document to a previous version or you might want to prompt the user about how to proceed.

## See Also

### Responding to Version Changes

- [presentedItemDidGainVersion:](presenteditemdidgain%28__%29.md): Tells the delegate that a new version of the file or file package was added.
- [presentedItemDidResolveConflictVersion:](presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitemAtURL:didGainVersion:](presentedsubitem%28at_didgain_%29.md): Tells the delegate that the item inside the presented directory gained a new version.
- [presentedSubitemAtURL:didLoseVersion:](presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.
- [presentedSubitemAtURL:didResolveConflictVersion:](presentedsubitem%28at_didresolve_%29.md): Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.
