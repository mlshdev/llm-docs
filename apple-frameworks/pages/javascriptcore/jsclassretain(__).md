> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclassretain(_:)](https://developer.apple.com/documentation/javascriptcore/jsclassretain(_:))

# JSClassRetain(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retains a JavaScript class.

## Declaration

```swift
func JSClassRetain(_ jsClass: JSClassRef!) -> JSClassRef!
```

## Parameters

- `jsClass`: The [JSClassRef](jsclassref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSClassRef](jsclassref.md) that is the same as `jsClass`.

## See Also

### Working with Classes

- [JSClassCreate(\_:)](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRelease(\_:)](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.
- [JSClassAttribute](jsclassattribute.md): A JavaScript class attribute.

# JSClassRetain (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retains a JavaScript class.

## Declaration

```objectivec
JSClassRefJSClassRetain(JSClassRef jsClass);
```

## Parameters

- `jsClass`: The [JSClassRef](jsclassref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSClassRef](jsclassref.md) that is the same as `jsClass`.

## See Also

### Working with Classes

- [JSClassCreate](jsclasscreate%28__%29.md): Creates a JavaScript class.
- [JSClassRelease](jsclassrelease%28__%29.md): Releases a JavaScript class.
- [kJSClassDefinitionEmpty](kjsclassdefinitionempty.md): A class definition structure of the current version that contains null pointers and has no attributes.
- [JSClassDefinition](jsclassdefinition.md): A structure that contains properties and callbacks that define a type of object.
