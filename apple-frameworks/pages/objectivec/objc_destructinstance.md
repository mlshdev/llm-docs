> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_destructinstance](https://developer.apple.com/documentation/objectivec/objc_destructinstance)

# objc_destructInstance

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Destroys an instance of a class without freeing memory and removes any of its associated references.

## Declaration

```objectivec
extern void *objc_destructInstance(id obj);
```

<a id="Discussion"></a>

## Discussion

This method does nothing if `obj` is `nil`.

> **Important**

>  The garbage collector does not call this function. As a result, if you edit this function, you should also edit finalize. That said, Core Foundation and other clients do call this function under garbage collection.

## See Also

### Instantiating Classes

- [class_createInstance](class_createinstance%28____%29.md): Creates an instance of a class, allocating memory for the class in the default malloc memory zone.
- [objc_constructInstance](objc_constructinstance.md): Creates an instance of a class at the specified location.
