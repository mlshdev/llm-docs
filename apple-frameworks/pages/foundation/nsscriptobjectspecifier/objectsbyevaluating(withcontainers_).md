> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/objectsbyevaluating(withcontainers:)](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/objectsbyevaluating(withcontainers:))

# objectsByEvaluating(withContainers:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the actual object or objects specified by the receiver as evaluated in the context of given container object.

## Declaration

```swift
func objectsByEvaluating(withContainers containers: Any) -> Any?
```

<a id="return-value"></a>

## Return Value

The actual object or objects specified by the receiver as evaluated in the context of its container object or objects (`containers`).

<a id="Discussion"></a>

## Discussion

Invokes [indicesOfObjectsByEvaluating(withContainer:count:)](indicesofobjectsbyevaluating%28withcontainer_count_%29.md) on `self` to get an array of pointers to indices of elements in `containers` that have values paired with the message receiver’s key. This method then uses key-value coding to obtain the object or objects associated with the key; it returns these objects or `nil` if there are no matching values in containers. If there are multiple matching values, they are returned in an `NSArray`; if matching values are `nil`, `NSNull` objects are substituted. If `containers` is an `NSArray`, the method recursively evaluates each element in the array and returns an `NSArray` with evaluated objects (including `NSNulls`) in their corresponding slots.

## See Also

### Evaluating an object specifier

- [indicesOfObjectsByEvaluating(withContainer:count:)](indicesofobjectsbyevaluating%28withcontainer_count_%29.md): This primitive method must be overridden by subclasses to return a pointer to an array of indices identifying objects in the key of a given container that are identified by the receiver of the message.
- [objectsByEvaluatingSpecifier](objectsbyevaluatingspecifier.md): Returns the actual object represented by the nested series of object specifiers.

# objectsByEvaluatingWithContainers: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the actual object or objects specified by the receiver as evaluated in the context of given container object.

## Declaration

```objectivec
- (id) objectsByEvaluatingWithContainers:(id) containers;
```

<a id="return-value"></a>

## Return Value

The actual object or objects specified by the receiver as evaluated in the context of its container object or objects (`containers`).

<a id="Discussion"></a>

## Discussion

Invokes [indicesOfObjectsByEvaluatingWithContainer:count:](indicesofobjectsbyevaluating%28withcontainer_count_%29.md) on `self` to get an array of pointers to indices of elements in `containers` that have values paired with the message receiver’s key. This method then uses key-value coding to obtain the object or objects associated with the key; it returns these objects or `nil` if there are no matching values in containers. If there are multiple matching values, they are returned in an `NSArray`; if matching values are `nil`, `NSNull` objects are substituted. If `containers` is an `NSArray`, the method recursively evaluates each element in the array and returns an `NSArray` with evaluated objects (including `NSNulls`) in their corresponding slots.

## See Also

### Evaluating an object specifier

- [indicesOfObjectsByEvaluatingWithContainer:count:](indicesofobjectsbyevaluating%28withcontainer_count_%29.md): This primitive method must be overridden by subclasses to return a pointer to an array of indices identifying objects in the key of a given container that are identified by the receiver of the message.
- [objectsByEvaluatingSpecifier](objectsbyevaluatingspecifier.md): Returns the actual object represented by the nested series of object specifiers.
