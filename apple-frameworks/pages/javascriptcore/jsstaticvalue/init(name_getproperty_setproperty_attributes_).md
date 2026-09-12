> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstaticvalue/init(name:getproperty:setproperty:attributes:)](https://developer.apple.com/documentation/javascriptcore/jsstaticvalue/init(name:getproperty:setproperty:attributes:))

# init(name:getProperty:setProperty:attributes:)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a static value with the specified values.

## Declaration

```swift
init(name: UnsafePointer<CChar>!, getProperty: JSObjectGetPropertyCallback!, setProperty: JSObjectSetPropertyCallback!, attributes: JSPropertyAttributes)
```

## See Also

### Creating a Static Value

- [init()](init%28%29.md): Creates a static value.
