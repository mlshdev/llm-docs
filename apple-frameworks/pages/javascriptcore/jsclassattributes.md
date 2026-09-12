> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclassattributes](https://developer.apple.com/documentation/javascriptcore/jsclassattributes)

# JSClassAttributes (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A set of JavaScript class attributes.

## Declaration

```swift
typealias JSClassAttributes = UInt32
```

<a id="Discussion"></a>

## Discussion

Combine multiple attributes by performing the logical OR operation.

## See Also

### Creating a Class Definition

- [init()](jsclassdefinition/init%28%29.md): Creates an empty class definition.
- [init(version:attributes:className:parentClass:staticValues:staticFunctions:initialize:finalize:hasProperty:getProperty:setProperty:deleteProperty:getPropertyNames:callAsFunction:callAsConstructor:hasInstance:convertToType:)](jsclassdefinition/init%28version_attributes_classname_parentclass_staticvalues_staticfunctions_initialize_finalize_hasproperty_getproperty_setproperty_deleteproperty_getpropertynames_callasfunction_ca~053415f4.md): Creates a class definition with the specified values.

# JSClassAttributes (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A set of JavaScript class attributes.

## Declaration

```objectivec
typedef unsigned int JSClassAttributes;
```

<a id="Discussion"></a>

## Discussion

Combine multiple attributes by performing the logical OR operation.
