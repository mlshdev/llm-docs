> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/unresolvedconflictversionsofitem(at:)](https://developer.apple.com/documentation/foundation/nsfileversion/unresolvedconflictversionsofitem(at:))

# unresolvedConflictVersionsOfItem(at:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of version objects that are currently in conflict for the specified URL.

## Declaration

```swift
class func unresolvedConflictVersionsOfItem(at url: URL) -> [NSFileVersion]?
```

## Parameters

- `url`: The URL of the file that has associated version objects.

<a id="return-value"></a>

## Return Value

An array of `NSFileVersion` objects that represent the versions in conflict or `nil` if the file at URL does not exist.

## See Also

### Handling Version Conflicts

- [isConflict](isconflict.md): A Boolean value indicating whether the contents of the version are in conflict with the contents of another version.
- [isResolved](isresolved.md): A Boolean value that indicates if the version object is in conflict or not.

# unresolvedConflictVersionsOfItemAtURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of version objects that are currently in conflict for the specified URL.

## Declaration

```objectivec
+ (NSArray<NSFileVersion *> *) unresolvedConflictVersionsOfItemAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the file that has associated version objects.

<a id="return-value"></a>

## Return Value

An array of `NSFileVersion` objects that represent the versions in conflict or `nil` if the file at URL does not exist.

## See Also

### Handling Version Conflicts

- [conflict](isconflict.md): A Boolean value indicating whether the contents of the version are in conflict with the contents of another version.
- [resolved](isresolved.md): A Boolean value that indicates if the version object is in conflict or not.
