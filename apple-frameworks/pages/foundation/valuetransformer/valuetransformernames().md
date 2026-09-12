> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/valuetransformer/valuetransformernames()](https://developer.apple.com/documentation/foundation/valuetransformer/valuetransformernames())

# valueTransformerNames() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of all the registered value transformers.

## Declaration

```swift
class func valueTransformerNames() -> [NSValueTransformerName]
```

<a id="return-value"></a>

## Return Value

An array of all the registered value transformers.

## See Also

### Using the Name-Based Registry

- [setValueTransformer(\_:forName:)](setvaluetransformer%28__forname_%29.md): Registers the provided value transformer with a given identifier.
- [init(forName:)](init%28forname_%29.md): Returns the value transformer identified by a given identifier.
- [NSValueTransformerName](../nsvaluetransformername.md): Named value transformers defined by `NSValueTransformer`.

# valueTransformerNames (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of all the registered value transformers.

## Declaration

```objectivec
+ (NSArray<NSString *> *) valueTransformerNames;
```

<a id="return-value"></a>

## Return Value

An array of all the registered value transformers.

## See Also

### Using the Name-Based Registry

- [setValueTransformer:forName:](setvaluetransformer%28__forname_%29.md): Registers the provided value transformer with a given identifier.
- [valueTransformerForName:](init%28forname_%29.md): Returns the value transformer identified by a given identifier.
- [NSValueTransformerName](../nsvaluetransformername.md): Named value transformers defined by `NSValueTransformer`.
