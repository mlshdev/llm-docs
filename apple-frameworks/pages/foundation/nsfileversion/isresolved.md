> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/isresolved](https://developer.apple.com/documentation/foundation/nsfileversion/isresolved)

# isResolved (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates if the version object is in conflict or not.

## Declaration

```swift
var isResolved: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the system detects a conflict involving versions of a file, it sets this property to [false](https://developer.apple.com/documentation/swift/false) to indicate an unresolved conflict. After you resolve the conflict, set this property to [true](https://developer.apple.com/documentation/swift/true) to tell the system it is resolved; you must then remove any versions of the file that are no longer useful.

> **Important**

>  If you do not explicitly remove versions of a file that are no longer useful, iCloud continues to sync them to all a user’s devices and those versions continue to consume user iCloud quota.

To remove an unused version of a file, call the [remove()](remove%28%29.md) method. To remove all unused versions of a file, call the [removeOtherVersionsOfItem(at:)](removeotherversionsofitem%28at_%29.md) method.

> **Important**

>  Never set the value of this property to [false](https://developer.apple.com/documentation/swift/false). If you do, the system raises an exception.

Resolving a conflict causes the file version object to be removed from any reports about conflicting versions, such as those returned by the [unresolvedConflictVersionsOfItem(at:)](unresolvedconflictversionsofitem%28at_%29.md) method.

## See Also

### Handling Version Conflicts

- [isConflict](isconflict.md): A Boolean value indicating whether the contents of the version are in conflict with the contents of another version.
- [unresolvedConflictVersionsOfItem(at:)](unresolvedconflictversionsofitem%28at_%29.md): Returns an array of version objects that are currently in conflict for the specified URL.

# resolved (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates if the version object is in conflict or not.

## Declaration

```objectivec
@property (getter=isResolved) BOOL resolved;
```

<a id="Discussion"></a>

## Discussion

When the system detects a conflict involving versions of a file, it sets this property to [false](https://developer.apple.com/documentation/swift/false) to indicate an unresolved conflict. After you resolve the conflict, set this property to [true](https://developer.apple.com/documentation/swift/true) to tell the system it is resolved; you must then remove any versions of the file that are no longer useful.

> **Important**

>  If you do not explicitly remove versions of a file that are no longer useful, iCloud continues to sync them to all a user’s devices and those versions continue to consume user iCloud quota.

To remove an unused version of a file, call the [removeAndReturnError:](remove%28%29.md) method. To remove all unused versions of a file, call the [removeOtherVersionsOfItemAtURL:error:](removeotherversionsofitem%28at_%29.md) method.

> **Important**

>  Never set the value of this property to [false](https://developer.apple.com/documentation/swift/false). If you do, the system raises an exception.

Resolving a conflict causes the file version object to be removed from any reports about conflicting versions, such as those returned by the [unresolvedConflictVersionsOfItemAtURL:](unresolvedconflictversionsofitem%28at_%29.md) method.

## See Also

### Handling Version Conflicts

- [conflict](isconflict.md): A Boolean value indicating whether the contents of the version are in conflict with the contents of another version.
- [unresolvedConflictVersionsOfItemAtURL:](unresolvedconflictversionsofitem%28at_%29.md): Returns an array of version objects that are currently in conflict for the specified URL.
