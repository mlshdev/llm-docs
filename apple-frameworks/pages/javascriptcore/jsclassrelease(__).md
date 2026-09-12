> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclassrelease(_:)](https://developer.apple.com/documentation/javascriptcore/jsclassrelease(_:))

# JSClassRelease(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Releases a JavaScript class.

## Declaration

```swift
func JSClassRelease(_ jsClass: JSClassRef!)
```

## Parameters

- `jsClass`: The [JSClassRef](jsclassref.md) to release.

## See Also

### Working with Classes

- [JSClassCreate(\_:)](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRetain(\_:)](jsclassretain%28__%29.md): Retains a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.
- [JSClassAttribute](jsclassattribute.md): A JavaScript class attribute.

# JSClassRelease (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Releases a JavaScript class.

## Declaration

```objectivec
void JSClassRelease(JSClassRef jsClass);
```

## Parameters

- `jsClass`: The [JSClassRef](jsclassref.md) to release.

## See Also

### Working with Classes

- [JSClassCreate](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRetain](jsclassretain%28__%29.md): Retains a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.
