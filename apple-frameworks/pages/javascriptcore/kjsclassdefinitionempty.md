> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/kjsclassdefinitionempty](https://developer.apple.com/documentation/javascriptcore/kjsclassdefinitionempty)

# kJSClassDefinitionEmpty (Swift)

**Framework:** JavaScriptCore  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A class definition structure of the current version that contains null pointers and has no attributes.

## Declaration

```swift
let kJSClassDefinitionEmpty: JSClassDefinition
```

<a id="Discussion"></a>

## Discussion

Use this constant as a convenience when creating class definitions. For example, to create a class definition with only a finalize method.

```objc
JSClassDefinition definition = kJSClassDefinitionEmpty; 
definition.finalize = Finalize;
```

## See Also

### Working with Classes

- [JSClassCreate(\_:)](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRelease(\_:)](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [JSClassRetain(\_:)](jsclassretain%28__%29.md): Retains a JavaScript class.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.
- [JSClassAttribute](jsclassattribute.md): A JavaScript class attribute.

# kJSClassDefinitionEmpty (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A class definition structure of the current version that contains null pointers and has no attributes.

## Declaration

```objectivec
extern const JSClassDefinition kJSClassDefinitionEmpty;
```

<a id="Discussion"></a>

## Discussion

Use this constant as a convenience when creating class definitions. For example, to create a class definition with only a finalize method.

```objc
JSClassDefinition definition = kJSClassDefinitionEmpty; 
definition.finalize = Finalize;
```

## See Also

### Working with Classes

- [JSClassCreate](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRelease](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [JSClassRetain](jsclassretain%28__%29.md): Retains a JavaScript class.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.
