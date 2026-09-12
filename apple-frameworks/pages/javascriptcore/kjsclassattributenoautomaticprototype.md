> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/kjsclassattributenoautomaticprototype](https://developer.apple.com/documentation/javascriptcore/kjsclassattributenoautomaticprototype)

# kJSClassAttributeNoAutomaticPrototype (Swift)

**Framework:** JavaScriptCore  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An attribute that specifies that a class doesn’t automatically generate a shared prototype for its instance objects.

## Declaration

```swift
var kJSClassAttributeNoAutomaticPrototype: Int { get }
```

<a id="Discussion"></a>

## Discussion

Use [kJSClassAttributeNoAutomaticPrototype](kjsclassattributenoautomaticprototype.md) with [JSObjectSetPrototype(\_:\_:\_:)](jsobjectsetprototype%28______%29.md) to manage prototypes manually.

## See Also

### Constants

- [kJSClassAttributeNone](kjsclassattributenone.md): An attribute that specifies that a class has no special attributes.

# kJSClassAttributeNoAutomaticPrototype (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An attribute that specifies that a class doesn’t automatically generate a shared prototype for its instance objects.

## Declaration

```objectivec
kJSClassAttributeNoAutomaticPrototype
```

<a id="Discussion"></a>

## Discussion

Use [kJSClassAttributeNoAutomaticPrototype](kjsclassattributenoautomaticprototype.md) with [JSObjectSetPrototype](jsobjectsetprototype%28______%29.md) to manage prototypes manually.

## See Also

### Constants

- [kJSClassAttributeNone](kjsclassattributenone.md): An attribute that specifies that a class has no special attributes.
