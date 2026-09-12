> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/valuetransformer/setvaluetransformer(_:forname:)](https://developer.apple.com/documentation/foundation/valuetransformer/setvaluetransformer(_:forname:))

# setValueTransformer(\_:forName:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Registers the provided value transformer with a given identifier.

## Declaration

```swift
class func setValueTransformer(_ transformer: ValueTransformer?, forName name: NSValueTransformerName)
```

## Parameters

- `transformer`: The transformer to register.
- `name`: The name for `transformer`.

## See Also

### Related Documentation

- [Value Transformer Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ValueTransformers/ValueTransformers.html#//apple_ref/doc/uid/10000175i)

### Using the Name-Based Registry

- [init(forName:)](init%28forname_%29.md): Returns the value transformer identified by a given identifier.
- [valueTransformerNames()](valuetransformernames%28%29.md): Returns an array of all the registered value transformers.
- [NSValueTransformerName](../nsvaluetransformername.md): Named value transformers defined by `NSValueTransformer`.

# setValueTransformer:forName: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Registers the provided value transformer with a given identifier.

## Declaration

```objectivec
+ (void) setValueTransformer:(NSValueTransformer *) transformer forName:(NSValueTransformerName) name;
```

## Parameters

- `transformer`: The transformer to register.
- `name`: The name for `transformer`.

## See Also

### Related Documentation

- [Value Transformer Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ValueTransformers/ValueTransformers.html#//apple_ref/doc/uid/10000175i)

### Using the Name-Based Registry

- [valueTransformerForName:](init%28forname_%29.md): Returns the value transformer identified by a given identifier.
- [valueTransformerNames](valuetransformernames%28%29.md): Returns an array of all the registered value transformers.
- [NSValueTransformerName](../nsvaluetransformername.md): Named value transformers defined by `NSValueTransformer`.
