> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclassdefinition/init(version:attributes:classname:parentclass:staticvalues:staticfunctions:initialize:finalize:hasproperty:getproperty:setproperty:deleteproperty:getpropertynames:callasfunction:callasconstructor:hasinstance:converttotype:)](https://developer.apple.com/documentation/javascriptcore/jsclassdefinition/init(version:attributes:classname:parentclass:staticvalues:staticfunctions:initialize:finalize:hasproperty:getproperty:setproperty:deleteproperty:getpropertynames:callasfunction:callasconstructor:hasinstance:converttotype:))

# init(version:attributes:className:parentClass:staticValues:staticFunctions:initialize:finalize:hasProperty:getProperty:setProperty:deleteProperty:getPropertyNames:callAsFunction:callAsConstructor:hasInstance:convertToType:)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a class definition with the specified values.

## Declaration

```swift
init(version: Int32, attributes: JSClassAttributes, className: UnsafePointer<CChar>!, parentClass: JSClassRef!, staticValues: UnsafePointer<JSStaticValue>!, staticFunctions: UnsafePointer<JSStaticFunction>!, initialize: JSObjectInitializeCallback!, finalize: JSObjectFinalizeCallback!, hasProperty: JSObjectHasPropertyCallback!, getProperty: JSObjectGetPropertyCallback!, setProperty: JSObjectSetPropertyCallback!, deleteProperty: JSObjectDeletePropertyCallback!, getPropertyNames: JSObjectGetPropertyNamesCallback!, callAsFunction: JSObjectCallAsFunctionCallback!, callAsConstructor: JSObjectCallAsConstructorCallback!, hasInstance: JSObjectHasInstanceCallback!, convertToType: JSObjectConvertToTypeCallback!)
```

## See Also

### Creating a Class Definition

- [init()](init%28%29.md): Creates an empty class definition.
- [JSClassAttributes](../jsclassattributes.md): A set of JavaScript class attributes.
