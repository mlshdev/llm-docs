> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsenumerator/nextobject()](https://developer.apple.com/documentation/foundation/nsenumerator/nextobject())

# nextObject() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next object from the collection being enumerated.

## Declaration

```swift
func nextObject() -> Any?
```

<a id="return-value"></a>

## Return Value

The next object from the collection being enumerated, or `nil` when all objects have been enumerated.

<a id="Discussion"></a>

## Discussion

The following code illustrates how this method works using an array:

```objc
NSArray *anArray = // ... ;
NSEnumerator *enumerator = [anArray objectEnumerator];
id object;
 
while ((object = [enumerator nextObject])) {
    // do something with object...
}
```

## See Also

### Getting the Enumerated Objects

- [allObjects](allobjects.md): The array of unenumerated objects.

# nextObject (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next object from the collection being enumerated.

## Declaration

```objectivec
- (ObjectType) nextObject;
```

<a id="return-value"></a>

## Return Value

The next object from the collection being enumerated, or `nil` when all objects have been enumerated.

<a id="Discussion"></a>

## Discussion

The following code illustrates how this method works using an array:

```objc
NSArray *anArray = // ... ;
NSEnumerator *enumerator = [anArray objectEnumerator];
id object;
 
while ((object = [enumerator nextObject])) {
    // do something with object...
}
```

## See Also

### Getting the Enumerated Objects

- [allObjects](allobjects.md): The array of unenumerated objects.
