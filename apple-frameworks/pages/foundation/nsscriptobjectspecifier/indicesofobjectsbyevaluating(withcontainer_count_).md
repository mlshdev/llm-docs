> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/indicesofobjectsbyevaluating(withcontainer:count:)](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/indicesofobjectsbyevaluating(withcontainer:count:))

# indicesOfObjectsByEvaluating(withContainer:count:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

This primitive method must be overridden by subclasses to return a pointer to an array of indices identifying objects in the key of a given container that are identified by the receiver of the message.

## Declaration

```swift
func indicesOfObjectsByEvaluating(withContainer container: Any, count: UnsafeMutablePointer<Int>) -> UnsafeMutablePointer<Int>?
```

<a id="Discussion"></a>

## Discussion

This primitive method must be overridden by subclasses to return a pointer to an array of indices identifying objects in the key of the container `aContainer` that are identified by the receiver of the message. The method uses key-value coding to obtain values based on the receiver’s key. It returns the number of such matching objects by indirection in `numRefs`. It returns `nil` directly and –1 via `numRefs` if all objects in the container (or the sole object) match the value of the receiver’s key. This method is invoked by [objectsByEvaluating(withContainers:)](objectsbyevaluating%28withcontainers_%29.md). The default implementation returns `nil` directly and –1 indirectly via `numRefs`.

## See Also

### Evaluating an object specifier

- [objectsByEvaluatingSpecifier](objectsbyevaluatingspecifier.md): Returns the actual object represented by the nested series of object specifiers.
- [objectsByEvaluating(withContainers:)](objectsbyevaluating%28withcontainers_%29.md): Returns the actual object or objects specified by the receiver as evaluated in the context of given container object.

# indicesOfObjectsByEvaluatingWithContainer:count: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

This primitive method must be overridden by subclasses to return a pointer to an array of indices identifying objects in the key of a given container that are identified by the receiver of the message.

## Declaration

```objectivec
- (NSInteger *) indicesOfObjectsByEvaluatingWithContainer:(id) container count:(NSInteger *) count;
```

<a id="Discussion"></a>

## Discussion

This primitive method must be overridden by subclasses to return a pointer to an array of indices identifying objects in the key of the container `aContainer` that are identified by the receiver of the message. The method uses key-value coding to obtain values based on the receiver’s key. It returns the number of such matching objects by indirection in `numRefs`. It returns `nil` directly and –1 via `numRefs` if all objects in the container (or the sole object) match the value of the receiver’s key. This method is invoked by [objectsByEvaluatingWithContainers:](objectsbyevaluating%28withcontainers_%29.md). The default implementation returns `nil` directly and –1 indirectly via `numRefs`.

## See Also

### Evaluating an object specifier

- [objectsByEvaluatingSpecifier](objectsbyevaluatingspecifier.md): Returns the actual object represented by the nested series of object specifiers.
- [objectsByEvaluatingWithContainers:](objectsbyevaluating%28withcontainers_%29.md): Returns the actual object or objects specified by the receiver as evaluated in the context of given container object.
