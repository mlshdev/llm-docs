> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/presenteditemdidgain(_:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/presenteditemdidgain(_:))

# presentedItemDidGain(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a new version of the file or file package was added.

## Declaration

```swift
optional func presentedItemDidGain(_ version: NSFileVersion)
```

## Parameters

- `version`: The file version object containing information about the new file version.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to determine how to incorporate data from the new version of the file or file package. If the file has not been modified by your code, you might simply update to the new version quietly. However, if your application has its own changes, you might need to ask the user how to proceed.

## See Also

### Responding to Version Changes

- [presentedItemDidLose(\_:)](presenteditemdidlose%28__%29.md): Tells the delegate that a version of the file or file package was removed.
- [presentedItemDidResolveConflict(\_:)](presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitem(at:didGain:)](presentedsubitem%28at_didgain_%29.md): Tells the delegate that the item inside the presented directory gained a new version.
- [presentedSubitem(at:didLose:)](presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.
- [presentedSubitem(at:didResolve:)](presentedsubitem%28at_didresolve_%29.md): Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.

# presentedItemDidGainVersion: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a new version of the file or file package was added.

## Declaration

```objectivec
- (void) presentedItemDidGainVersion:(NSFileVersion *) version;
```

## Parameters

- `version`: The file version object containing information about the new file version.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to determine how to incorporate data from the new version of the file or file package. If the file has not been modified by your code, you might simply update to the new version quietly. However, if your application has its own changes, you might need to ask the user how to proceed.

## See Also

### Responding to Version Changes

- [presentedItemDidLoseVersion:](presenteditemdidlose%28__%29.md): Tells the delegate that a version of the file or file package was removed.
- [presentedItemDidResolveConflictVersion:](presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitemAtURL:didGainVersion:](presentedsubitem%28at_didgain_%29.md): Tells the delegate that the item inside the presented directory gained a new version.
- [presentedSubitemAtURL:didLoseVersion:](presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.
- [presentedSubitemAtURL:didResolveConflictVersion:](presentedsubitem%28at_didresolve_%29.md): Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.
