> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/presentedsubitem(at:didgain:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/presentedsubitem(at:didgain:))

# presentedSubitem(at:didGain:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the item inside the presented directory gained a new version.

## Declaration

```swift
optional func presentedSubitem(at url: URL, didGain version: NSFileVersion)
```

## Parameters

- `url`: The URL of the item inside the presented directory that gained a new version. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.
- `version`: The file version object containing information about the new file version.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to determine how to incorporate data from the new version of the item. This might involve incorporating the version silently or asking the user about how to proceed.

## See Also

### Responding to Version Changes

- [presentedItemDidGain(\_:)](presenteditemdidgain%28__%29.md): Tells the delegate that a new version of the file or file package was added.
- [presentedItemDidLose(\_:)](presenteditemdidlose%28__%29.md): Tells the delegate that a version of the file or file package was removed.
- [presentedItemDidResolveConflict(\_:)](presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitem(at:didLose:)](presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.
- [presentedSubitem(at:didResolve:)](presentedsubitem%28at_didresolve_%29.md): Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.

# presentedSubitemAtURL:didGainVersion: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the item inside the presented directory gained a new version.

## Declaration

```objectivec
- (void) presentedSubitemAtURL:(NSURL *) url didGainVersion:(NSFileVersion *) version;
```

## Parameters

- `url`: The URL of the item inside the presented directory that gained a new version. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.
- `version`: The file version object containing information about the new file version.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to determine how to incorporate data from the new version of the item. This might involve incorporating the version silently or asking the user about how to proceed.

## See Also

### Responding to Version Changes

- [presentedItemDidGainVersion:](presenteditemdidgain%28__%29.md): Tells the delegate that a new version of the file or file package was added.
- [presentedItemDidLoseVersion:](presenteditemdidlose%28__%29.md): Tells the delegate that a version of the file or file package was removed.
- [presentedItemDidResolveConflictVersion:](presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitemAtURL:didLoseVersion:](presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.
- [presentedSubitemAtURL:didResolveConflictVersion:](presentedsubitem%28at_didresolve_%29.md): Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.
