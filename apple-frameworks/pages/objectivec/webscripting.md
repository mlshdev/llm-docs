> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/webscripting](https://developer.apple.com/documentation/objectivec/webscripting)

# WebScripting (Swift)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

`WebScripting` is an informal protocol that defines methods that classes can implement to export their interfaces to a WebScript environment such as JavaScript.

<a id="overview"></a>

## Overview

Not all properties and methods are exported to JavaScript by default. The object needs to implement the class methods described below to specify the properties and methods to export. Furthermore, a method is not exported if its return type and all its parameters are not Objective-C objects or scalars.

Method argument and return types that are Objective-C objects will be converted to appropriate types for the scripting environment. For example:

- `nil` is converted to undefined.
- `NSNumber` objects will be converted to JavaScript numbers.
- `NSString` objects will be converted to JavaScript strings.
- `NSArray` objects will be mapped to special read-only arrays.
- `NSNull` will be converted to JavaScript’s `null`.
- `WebUndefined` will be converted to undefined.
- `WebScriptObject` instances will be unwrapped for the scripting environment.

Instances of all other classes will be wrapped before being passed to the script, and unwrapped as they return to Objective-C. Primitive types such as `int` and `char` are cast to a numeric in JavaScript.

Access to an object’s attributes, such as instance variables, is managed by key-value coding (KVC). The KVC methods `setValue:forKey:` and `valueForKey:` are used to access the attributes of an object from the scripting environment. Additionally, the scripting environment can attempt any number of attribute requests or method invocations that are not exported by your class. You can manage these requests by overriding the `setValue:forUndefinedKey:` and `valueForUndefinedKey:` methods from the key-value coding protocol.

Exceptions can be raised from the scripting environment by sending a [throwException(\_:)](https://developer.apple.com/documentation/webkit/webscriptobject/throwexception%28_:%29) message to the relevant `WebScriptObject` instance. The method raising the exception must be within the scope of the script invocation.

## Topics

### Getting attributes

- [webScriptName(forKey:)](nsobject-swift.class/webscriptname%28forkey_%29.md): Returns the scripting environment name for an attribute specified by a key.
- [webScriptName(for:)](nsobject-swift.class/webscriptname%28for_%29.md): Returns the scripting environment name for a selector.
- [isSelectorExcluded(fromWebScript:)](nsobject-swift.class/isselectorexcluded%28fromwebscript_%29.md): Returns whether a selector should be hidden from the scripting environment.
- [isKeyExcluded(fromWebScript:)](nsobject-swift.class/iskeyexcluded%28fromwebscript_%29.md): Returns whether a key should be hidden from the scripting environment.

### Invoking methods

- [invokeDefaultMethod(withArguments:)](nsobject-swift.class/invokedefaultmethod%28witharguments_%29.md): Executes when a script attempts to invoke a method on an exposed object directly.
- [invokeUndefinedMethod(fromWebScript:withArguments:)](nsobject-swift.class/invokeundefinedmethod%28fromwebscript_witharguments_%29.md): Handles undefined method invocation from the scripting environment.

### Finalizing

- [finalizeForWebScript()](nsobject-swift.class/finalizeforwebscript%28%29.md): Performs cleanup when the scripting environment is reset.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

# WebScripting (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

`WebScripting` is an informal protocol that defines methods that classes can implement to export their interfaces to a WebScript environment such as JavaScript.

<a id="overview"></a>

## Overview

Not all properties and methods are exported to JavaScript by default. The object needs to implement the class methods described below to specify the properties and methods to export. Furthermore, a method is not exported if its return type and all its parameters are not Objective-C objects or scalars.

Method argument and return types that are Objective-C objects will be converted to appropriate types for the scripting environment. For example:

- `nil` is converted to undefined.
- `NSNumber` objects will be converted to JavaScript numbers.
- `NSString` objects will be converted to JavaScript strings.
- `NSArray` objects will be mapped to special read-only arrays.
- `NSNull` will be converted to JavaScript’s `null`.
- `WebUndefined` will be converted to undefined.
- `WebScriptObject` instances will be unwrapped for the scripting environment.

Instances of all other classes will be wrapped before being passed to the script, and unwrapped as they return to Objective-C. Primitive types such as `int` and `char` are cast to a numeric in JavaScript.

Access to an object’s attributes, such as instance variables, is managed by key-value coding (KVC). The KVC methods `setValue:forKey:` and `valueForKey:` are used to access the attributes of an object from the scripting environment. Additionally, the scripting environment can attempt any number of attribute requests or method invocations that are not exported by your class. You can manage these requests by overriding the `setValue:forUndefinedKey:` and `valueForUndefinedKey:` methods from the key-value coding protocol.

Exceptions can be raised from the scripting environment by sending a [throwException:](https://developer.apple.com/documentation/webkit/webscriptobject/throwexception%28_:%29) message to the relevant `WebScriptObject` instance. The method raising the exception must be within the scope of the script invocation.

## Topics

### Getting attributes

- [webScriptNameForKey:](nsobject-swift.class/webscriptname%28forkey_%29.md): Returns the scripting environment name for an attribute specified by a key.
- [webScriptNameForSelector:](nsobject-swift.class/webscriptname%28for_%29.md): Returns the scripting environment name for a selector.
- [isSelectorExcludedFromWebScript:](nsobject-swift.class/isselectorexcluded%28fromwebscript_%29.md): Returns whether a selector should be hidden from the scripting environment.
- [isKeyExcludedFromWebScript:](nsobject-swift.class/iskeyexcluded%28fromwebscript_%29.md): Returns whether a key should be hidden from the scripting environment.

### Invoking methods

- [invokeDefaultMethodWithArguments:](nsobject-swift.class/invokedefaultmethod%28witharguments_%29.md): Executes when a script attempts to invoke a method on an exposed object directly.
- [invokeUndefinedMethodFromWebScript:withArguments:](nsobject-swift.class/invokeundefinedmethod%28fromwebscript_witharguments_%29.md): Handles undefined method invocation from the scripting environment.

### Finalizing

- [finalizeForWebScript](nsobject-swift.class/finalizeforwebscript%28%29.md): Performs cleanup when the scripting environment is reset.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
