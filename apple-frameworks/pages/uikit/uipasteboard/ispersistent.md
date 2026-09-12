> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/ispersistent](https://developer.apple.com/documentation/uikit/uipasteboard/ispersistent)

# isPersistent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard is persistent.

> Use shared app group containers instead. For more information about app groups, see [Adding an App to an App Group](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingAppSandbox.html#//apple_ref/doc/uid/TP40011195-CH4-SW19). For more information about shared containers, see the [containerURL(forSecurityApplicationGroupIdentifier:)](../../foundation/filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md) method of [FileManager](../../foundation/filemanager.md) (Swift) or the [containerURL(forSecurityApplicationGroupIdentifier:)](../../foundation/filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md) method of [FileManager](../../foundation/filemanager.md) (Objective-C).

## Declaration

```swift
var isPersistent: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Nonpersistent named pasteboards remain available. You can use these to implement such features as Duplicate or Copy Style. A nonpersistent named pasteboard is available only in the process that creates it.

## See Also

### Related Documentation

- [init(name:create:)](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [withUniqueName()](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.

### Deprecated

- [setPersistent(\_:)](setpersistent%28__%29.md): Deprecated. A Boolean value that indicates whether the pasteboard is persistent.
- [detectPatterns(for:completionHandler:)](detectpatterns%28for_completionhandler_%29-5zlnd.md): Deprecated. Determines whether the first pasteboard item matches the specified patterns, without notifying the user.
- [detectPatterns(for:inItemSet:completionHandler:)](detectpatterns%28for_initemset_completionhandler_%29-29iwn.md): Deprecated. Determines whether pasteboard items match the specified patterns, without notifying the user.
- [detectValues(for:completionHandler:)](detectvalues%28for_completionhandler_%29-9p2ff.md): Deprecated. Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [detectValues(for:inItemSet:completionHandler:)](detectvalues%28for_initemset_completionhandler_%29-8y0iw.md): Deprecated. Determines whether pasteboard items match the specified patterns, reading the contents if it finds a match.

# persistent (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard is persistent.

> Use shared app group containers instead. For more information about app groups, see [Adding an App to an App Group](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingAppSandbox.html#//apple_ref/doc/uid/TP40011195-CH4-SW19). For more information about shared containers, see the [containerURLForSecurityApplicationGroupIdentifier:](../../foundation/filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md) method of [NSFileManager](../../foundation/filemanager.md) (Swift) or the [containerURLForSecurityApplicationGroupIdentifier:](../../foundation/filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md) method of [NSFileManager](../../foundation/filemanager.md) (Objective-C).

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPersistent) BOOL persistent;
```

<a id="Discussion"></a>

## Discussion

Nonpersistent named pasteboards remain available. You can use these to implement such features as Duplicate or Copy Style. A nonpersistent named pasteboard is available only in the process that creates it.

## See Also

### Related Documentation

- [pasteboardWithName:create:](init%28name_create_%29.md): Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.
- [pasteboardWithUniqueName](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.

### Deprecated

- [setPersistent:](setpersistent%28__%29.md): Deprecated. A Boolean value that indicates whether the pasteboard is persistent.
