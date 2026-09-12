> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclasscreate(_:)](https://developer.apple.com/documentation/javascriptcore/jsclasscreate(_:))

# JSClassCreate(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript class.

## Declaration

```swift
func JSClassCreate(_ definition: UnsafePointer<JSClassDefinition>!) -> JSClassRef!
```

## Parameters

- `definition`: A [JSClassDefinition](jsclassdefinition.md) that defines the class.

<a id="return-value"></a>

## Return Value

A [JSClassRef](jsclassref.md) with the specified definition suitable for use with [JSObjectMake(\_:\_:\_:)](jsobjectmake%28______%29.md). Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Working with Classes

- [JSClassRelease(\_:)](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [JSClassRetain(\_:)](jsclassretain%28__%29.md): Retains a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.
- [JSClassAttribute](jsclassattribute.md): A JavaScript class attribute.

# JSClassCreate (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript class.

## Declaration

```objectivec
JSClassRefJSClassCreate(const JSClassDefinition *definition);
```

## Parameters

- `definition`: A [JSClassDefinition](jsclassdefinition.md) that defines the class.

<a id="return-value"></a>

## Return Value

A [JSClassRef](jsclassref.md) with the specified definition suitable for use with [JSObjectMake](jsobjectmake%28______%29.md). Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Working with Classes

- [JSClassRelease](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [JSClassRetain](jsclassretain%28__%29.md): Retains a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.
