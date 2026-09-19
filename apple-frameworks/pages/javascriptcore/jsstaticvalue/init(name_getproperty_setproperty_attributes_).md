> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jsstaticvalue/init(name:getproperty:setproperty:attributes:)

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
