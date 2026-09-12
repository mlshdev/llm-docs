> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/enumerateindexpaths(options:using:)](https://developer.apple.com/documentation/foundation/nsset/enumerateindexpaths(options:using:))

# enumerateIndexPaths(options:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

## Declaration

```swift
func enumerateIndexPaths(options opts: NSEnumerationOptions = [], using block: (IndexPath, UnsafeMutablePointer<ObjCBool>) -> Void)
```

# enumerateIndexPathsWithOptions:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

## Declaration

```objectivec
- (void) enumerateIndexPathsWithOptions:(NSEnumerationOptions) opts usingBlock:(void (^)(NSIndexPath *indexPath, BOOL *stop)) block;
```
